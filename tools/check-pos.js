/* ═══════════════════════════════════════════════════════
   Parts of Speech HQ — content checker.
   Usage:  node tools/check-pos.js            (every part that has a data file)
           node tools/check-pos.js noun adj   (only these parts)
           node tools/check-pos.js --plants   (plant one mistake of each kind; every one must be caught)
   Reads data/pos.js + data/part-<key>.js the same way the site does, and builds each
   question and wrong-pick note with the site's own POS_Q / POS_NOTE, so it measures
   the words a student really sees. Exit 1 on any problem.
═══════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = path.resolve(__dirname, '..');

/* ── reading level: the same formula as tools/fk.js, one line at a time ── */
function syl(w) { w = w.toLowerCase().replace(/[^a-z]/g, ''); if (!w) return 0; if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, ''); const m = w.match(/[aeiouy]{1,2}/g); return m ? m.length : 1; }
// The words being taught (and a quoted word under study) are heard and taught, so they count
// as one short word: "An adjective describes a noun" is the lesson, not reading load.
const TERMS = /\b(nouns?|verbs?|adjectives?|adverbs?|describ(e|es|ed)|persons?|places?|things?|ideas?|actions?|sentences?|speech)\b/gi;
function fk(t) {
  t = String(t).replace(/“[^”]*”/g, 'word').replace(TERMS, 'word').replace(/[“”"]/g, '').replace(/___/g, 'blank');
  const s = Math.max(1, t.split(/[.!?…]+/).filter(x => /[A-Za-z]/.test(x)).length);
  const words = t.split(/\s+/).filter(x => /[A-Za-z0-9]/.test(x));
  if (!words.length) return 0;
  const y = words.reduce((n, x) => n + syl(x), 0);
  return 0.39 * (words.length / s) + 11.8 * (y / words.length) - 15.59;
}
// Short lines measure low no matter what; a long word in a 3-word line can still read > 3,
// so only lines of 5+ words are held to 3.0 (whole cards are also measured).
const FK_MAX = 3.0;

/* ── words a sentence must not use ── */
// Out of scope by Marcos's word (10/27): helping and linking verbs, and tense work.
const BE_HELP = 'am is are was were be been being will would shall should can could may might must has have had do does did seem seems seemed become becomes became'.split(' ');
// Pronouns: "she" names no one, and the class's rule is to name the thing ("it" is never used).
const PRONOUNS = 'i me my mine he him his she her hers it its we us our ours they them their theirs you your yours myself himself herself itself themselves ourselves yourself this that these those who whom whose'.split(' ');
// Words that do more than one job, so a 4th grader could be right with the "wrong" answer.
const AMBIG = ('fast hard early late well high low straight daily deep near far close pretty quick slow loud right left back home still just only very too so not more most much little ' +
  'light kind fine last first round even ever there then ahead').split(' ');
// Little words that are only ever "x" here: as an adverb ("ran in", "looked around") they are a trap.
const NEVER_ADV = 'in on up down out off over around under by past along through about across behind below above'.split(' ');
// A where-adverb that is also a place word: an adverb only at the end, never before a noun ("played outside." not "outside the house")
const WHERE_ADV = 'inside outside upstairs downstairs indoors outdoors nearby'.split(' ');
// -ly words that are adjectives: they break the "many adverbs end in -ly" hint.
const LY_ADJ = 'friendly lovely lonely ugly silly curly chilly early daily holy jolly lively smelly costly likely only family belly bully jelly fly lily rally reply supply apply holly sly'.split(' ');
// -ing words allowed (nouns only); any other -ing word needs a helping verb or is a verb used as a noun.
const ING_OK = 'morning evening king ring wing string ceiling'.split(' ');
// Words that are a noun AND a verb on their own ("a jump", "to jump"): never a choice with no sentence.
const NV_AMBIG = ('run jump walk swim play dance paint rain snow kick hug fish watch drink cook smile laugh help work talk visit plant brush climb skate ride race ' +
  'dream hope love wish need call push pull drop fall hop skip spin wave rest step stop start turn sleep shout yell cry cheer clap kiss bake bite blow boil bounce ' +
  'camp catch chase chew color cover crash crawl cut dig dive dress drive dust fix float fly fold hike hunt iron jog knock land light lock mail march mix nap nod ' +
  'pack park plan pour print race rock roll rub sail save search sew share shop sign sink skip slide smell snack sneeze spill splash spray squeeze stamp stand ' +
  'stretch swing taste test text tie touch track trade train trip vote wash whistle wrap yawn zip film place point show sound look face hand head foot arm ' +
  'water time name number book box can line note picture talk text bear duck fly bat bark seal wave ship crowd bug stamp key').split(/\s+/);
// Mr. O's roster first names (no real student is ever in a sentence) — and Marcus, too close to Marcos.
const ROSTER = "jo'von jovon eduin kelvin allison roniel michael fakeem iyana christopher kiara destiny tahji eric jovany lanaura thiara robyn marcos marcus alanie johanelyz taishmara autumn nazareth".split(' ');
// His own 9/15 worksheet sentences: the site gives new practice, so none is copied.
const HIS_SHEETS = [
  'The hungry bear searched for berries.', 'Rosa quietly opened the door.', 'Our teacher read the story aloud.', 'The waves crashed loudly.',
  'My cousin lives in Florida.', 'The brave firefighter climbed the ladder.', 'The frog jumped into the pond.', 'We will visit the zoo tomorrow.',
  'She wore a purple scarf.', 'The kindness of our neighbors surprised us.', 'The kids giggled at the joke.', 'The small puppy barked loudly.',
  'The dog chased the ball across the yard.', 'Maria packed a sandwich and an apple for lunch.', 'The kittens slept on a soft blanket.',
  'The tall giraffe ate green leaves.', 'We saw five colorful birds.', 'The turtle moved slowly.', 'The children played outside.',
  'Sam carefully carried the eggs.', 'The playful kitten pounced quickly.', 'The frog leaped into the pond.', 'The wind howled all night.',
  'The baby smiled at her mother.', 'Marcus painted a colorful mural.', 'The bees buzzed around the flowers.'
].map(s => s.toLowerCase().replace(/[^a-z ]/g, ''));

/* ── load the site's data like the browser does ── */
function load(parts, plant) {
  const box = { window: {} };
  vm.createContext(box);
  vm.runInContext(fs.readFileSync(path.join(SITE, 'data', 'pos.js'), 'utf8'), box);
  box.window.POS_SETS = {};
  box.window.POS_PARTS.forEach(p => {
    const f = path.join(SITE, 'data', `part-${p.key}.js`);
    if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), box);
  });
  if (plant) plant(box.window);
  return box.window;
}

function check(W, only) {
  const problems = [];
  const bad = (where, msg) => problems.push(`${where}: ${msg}`);
  const ids = new Map();
  const sentences = new Map();
  const tagSet = new Set(W.POS_TAG_ORDER.concat('x'));
  const posWords = /\b(nouns?|verbs?|adjectives?|adverbs?)\b/gi;

  // every line a student reads or hears, checked for "it", untaught job names, roster names and reading level
  const textRules = (where, text, partKey, opts) => {
    const o = opts || {};
    const t = String(text || '');
    if (!t.trim()) return;
    if (/\b(it|its|they|them)\b/i.test(t.replace(/“[^”]*”/g, ''))) bad(where, `says "it/they/them" — name the thing: ${t}`);
    const taught = W.POS_TAUGHT(partKey).map(k => W.POS_TAGS[k].name);
    (t.replace(/“[^”]*”/g, '').match(posWords) || []).forEach(m => {
      const name = m.toLowerCase().replace(/s$/, '');
      if (!taught.includes(name) && !o.allowNames) bad(where, `uses "${m}" before ${name}s are taught: ${t}`);
    });
    if (partKey === 'noun' || partKey === 'verb') {
      if (/\bdescrib/i.test(t)) bad(where, `uses "describe" before Adjectives teaches it: ${t}`);
    }
    t.toLowerCase().split(/[^a-z']+/).forEach(w => { if (ROSTER.includes(w)) bad(where, `uses a roster name "${w}": ${t}`); });
    t.split(/(?<=[.!?])\s+/).forEach(line => {
      const n = line.split(/\s+/).filter(x => /[A-Za-z]/.test(x)).length;
      if (n >= 5 && fk(line) > FK_MAX) bad(where, `reads at FK ${fk(line).toFixed(1)} (max ${FK_MAX}): ${line}`);
    });
  };

  // a sentence a student works on: no out-of-scope or two-job words, no pronouns, new to the site
  const sentenceRules = (where, s, tags) => {
    const toks = W.POS_SPLIT(s);
    if (toks.length < 3 || toks.length > 12) bad(where, `sentence has ${toks.length} words (3–12): ${s}`);
    if (!/^[A-Z]/.test(s) && !/^___/.test(s)) bad(where, `sentence must start with a capital: ${s}`);
    if (!/[.!?]$/.test(s)) bad(where, `sentence must end with . ! or ?: ${s}`);
    if (/[’']s\b|n[’']t\b|[’'](ll|re|ve|d|m)\b/i.test(s)) bad(where, `no 's or contractions: ${s}`);
    if (/\b(Mr|Mrs|Ms|Dr)\b/.test(s)) bad(where, `no titles (Mr., Mrs., Dr.): ${s}`);
    toks.forEach((tk, i) => {
      const w = tk.word.toLowerCase();
      if (w === '___') return;
      if (BE_HELP.includes(w)) bad(where, `"${tk.word}" is a helping/linking verb (out of scope): ${s}`);
      if (PRONOUNS.includes(w)) bad(where, `"${tk.word}" is a pronoun (name the person or thing): ${s}`);
      if (AMBIG.includes(w)) bad(where, `"${tk.word}" can do more than one job: ${s}`);
      if (LY_ADJ.includes(w)) bad(where, `"${tk.word}" is an -ly word that is not an adverb: ${s}`);
      if (/ing$/.test(w) && !ING_OK.includes(w)) bad(where, `"${tk.word}" is an -ing word: ${s}`);
      // the counter calls "carefully" and "everywhere" 4 (both are really 3), so the line is 4 by the counter
      if (syl(w) > 4 && !/^[A-Z]/.test(tk.word)) bad(where, `"${tk.word}" is too long a word: ${s}`);
      if (tags) {
        const t = tags[i];
        if (t === 'adv' && NEVER_ADV.includes(w)) bad(where, `"${tk.word}" is not used as an adverb here (pick a clear adverb): ${s}`);
        if (t === 'adv' && WHERE_ADV.includes(w) && i + 1 < toks.length && (['n', 'adj'].includes(tags[i + 1]) || /^(a|an|the)$/i.test(toks[i + 1].word)))
          bad(where, `"${tk.word}" comes before a noun here, so it is not an adverb: ${s}`);
        if (/ly$/.test(w) && t !== 'adv' && !['n'].includes(t)) bad(where, `"${tk.word}" ends in -ly but is tagged ${t}: ${s}`);
        if (/^(a|an|the|and|or|but|of|to|for|with|at|on|in|into|under|across|by|from|near|behind|through|after|before)$/.test(w) && t !== 'x') bad(where, `"${tk.word}" must be tagged x: ${s}`);
      }
    });
    const key = s.toLowerCase().replace(/[^a-z_ ]/g, '').replace(/\s+/g, ' ').trim();
    if (HIS_SHEETS.includes(key)) bad(where, `copies a sentence from Mr. O's 9/15 sheets: ${s}`);
    if (sentences.has(key)) bad(where, `sentence repeats ${sentences.get(key)}: ${s}`);
    else sentences.set(key, where);
  };

  const wordRules = (where, word, isolated) => {
    const w = String(word).toLowerCase();
    if (BE_HELP.includes(w) || PRONOUNS.includes(w) || AMBIG.includes(w) || LY_ADJ.includes(w)) bad(where, `choice "${word}" is out of scope or does two jobs`);
    if (/ing$/.test(w) && !ING_OK.includes(w)) bad(where, `choice "${word}" is an -ing word`);
    if (isolated && NV_AMBIG.includes(w)) bad(where, `choice "${word}" is a noun AND a verb on its own — use a sentence, or a word with one job (jumped, pencil)`);
    if (ROSTER.includes(w)) bad(where, `choice "${word}" is a roster name`);
  };

  const cardRules = (where, cards, partKey, min, max) => {
    if (!Array.isArray(cards) || cards.length < min || cards.length > max) { bad(where, `needs ${min}–${max} cards (has ${(cards || []).length})`); return; }
    cards.forEach((c, ci) => {
      const cw = `${where} card ${ci + 1}`;
      if (!c.title) bad(cw, 'no title');
      textRules(cw, c.title, partKey);
      if (!Array.isArray(c.blocks) || !c.blocks.length || c.blocks.length > 6) bad(cw, `needs 1–6 blocks (has ${(c.blocks || []).length})`);
      (c.blocks || []).forEach((b, bi) => {
        const bw = `${cw} block ${bi + 1}`;
        const kinds = ['p', 'term', 'words', 'sent', 'tip', 'rows', 'good', 'bad'].filter(k => b[k] != null);
        if (kinds.length !== 1) bad(bw, `one kind per block (p / term / words / sent / tip / rows / good / bad), has ${kinds.join(', ') || 'none'}`);
        const k = kinds[0];
        if (k === 'p' || k === 'tip') textRules(bw, b[k], partKey);
        if (k === 'term') { textRules(bw, `${b.term} means ${b.means}`, partKey); if (b.ex) textRules(bw, b.ex, partKey); }
        if (k === 'words') {
          if (!Array.isArray(b.words) || b.words.length < 3 || b.words.length > 8) bad(bw, 'words: 3–8 example words');
          if (b.tag && !W.POS_TAGS[b.tag]) bad(bw, `unknown tag ${b.tag}`);
          (b.words || []).forEach(w => { if (ROSTER.includes(String(w).toLowerCase())) bad(bw, `roster name ${w}`); });
        }
        if (k === 'sent') {
          const tags = W.POS_TAG_LIST(b.tags);
          if (tags.length !== W.POS_SPLIT(b.sent).length) bad(bw, `tags (${tags.length}) do not match the words (${W.POS_SPLIT(b.sent).length}): ${b.sent}`);
          tags.forEach(t => { if (!tagSet.has(t)) bad(bw, `unknown tag ${t}`); });
          const show = Array.isArray(b.show) ? b.show : [b.show];
          show.forEach(t => { if (!W.POS_TAGS[t]) bad(bw, `show must be n / v / adj / adv`); else if (!tags.includes(t)) bad(bw, `no ${t} word to show: ${b.sent}`); });
          sentenceRules(bw, b.sent, tags);
          if (b.say) textRules(bw, b.say, partKey);
        }
        if (k === 'rows') (b.rows || []).forEach(r => textRules(bw, r[1], partKey));
        if (k === 'good' || k === 'bad') { textRules(bw, b[k], partKey); textRules(bw, b.why, partKey); if (!b.why) bad(bw, 'needs a why'); }
      });
      // a line that only says the card's title again (the title is read aloud with the card): Marcos 10/27 sent
      // "An Adjective Can Tell What Kind" + "Many adjectives tell what kind." and "An Adjective Describes a Noun" +
      // "adjective means a word that describes a noun". Cut the line, or give the card a title that adds something.
      const STOP = ['a', 'an', 'the', 'can', 'is', 'are', 'many', 'some', 'of', 'to', 'means', 'word', 'that'];
      const wordsOf = t => String(t).toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter(w => w && !STOP.includes(w)).map(w => w.replace(/(es|s)$/, ''));
      const tw = new Set(wordsOf(c.title));
      (c.blocks || []).forEach((b, bi) => {
        const t = b.p || b.tip || (b.term ? `${b.term} ${b.means}` : '');
        String(t).split(/(?<=[.!?])\s+/).forEach(line => {
          const lw = wordsOf(line);
          if (!lw.length || !tw.size) return;
          const same = lw.filter(w => tw.has(w)).length, added = lw.length - same;
          if (same / tw.size >= 0.75 && added <= 1) bad(`${cw} block ${bi + 1}`, `says the title again ("${c.title}" / "${line}") — cut the line or change the title`);
        });
      });
      const all = (c.blocks || []).map(b => b.p || b.tip || b.why || b.means || '').join(' ');
      if (all.split(/\s+/).length > 90) bad(cw, `card is ${all.split(/\s+/).length} words — one idea per card (max 90)`);
    });
  };

  const itemRules = (where, it, part, stageN, version, k, allowed) => {
    const want = `${part.letter}${stageN}${version}${String(k + 1).padStart(2, '0')}`;
    if (it.id !== want) bad(where, `id should be ${want} (has ${it.id})`);
    if (ids.has(it.id)) bad(where, `id repeats ${ids.get(it.id)}`); else ids.set(it.id, where);
    if (!allowed.includes(it.type)) bad(where, `type ${it.type} is not used in ${part.label} (use ${allowed.join(', ')})`);
    if (!it.skill) bad(where, 'no skill');
    if (!it.why) bad(where, 'no why');
    textRules(`${where} why`, it.why, part.key);
    const taught = W.POS_TAUGHT(part.key);
    if (it.type !== 'sort' && it.type !== 'name' && it.type !== 'build') {
      if (!taught.includes(it.ask)) bad(where, `ask "${it.ask}" is not a job taught by ${part.label}`);
      if (part.key !== 'all' && it.ask !== part.tag) bad(where, `ask must be "${part.tag}" in ${part.label}`);
    }
    const q = W.POS_Q(Object.assign({}, it, it.type === 'build' ? { ask: (it.slots || [])[0] && it.slots[0].tag } : {}), part.key);
    textRules(`${where} question`, q, part.key);
    const choiceSet = (words, tags, isolated, s) => {
      if (!Array.isArray(words) || words.length < 3 || words.length > 4) bad(where, `needs 3–4 choices (has ${(words || []).length})`);
      if (!Array.isArray(tags) || tags.length !== (words || []).length) { bad(where, 'choiceTags must match the choices one for one'); return; }
      tags.forEach(t => { if (!tagSet.has(t)) bad(where, `unknown choice tag ${t}`); });
      const right = tags.filter(t => t === it.ask).length;
      if (right !== 1) bad(where, `exactly one choice must be ${it.ask} (has ${right})`);
      if (tags[0] !== it.ask) bad(where, 'the right choice goes FIRST (the site shuffles)');
      if (new Set(words.map(w => String(w).toLowerCase())).size !== words.length) bad(where, 'choices repeat');
      words.forEach((w, i) => {
        wordRules(where, w, isolated);
        textRules(`${where} note`, W.POS_NOTE(w, tags[i], it.ask, part.key), part.key);
      });
      if (s) {
        const toks = W.POS_SPLIT(s), st = W.POS_TAG_LIST(it.tags);
        words.forEach((w, i) => {
          const at = toks.findIndex(t => t.word === w);
          if (at < 0) bad(where, `choice "${w}" is not a word in the sentence`);
          else if (st[at] !== tags[i]) bad(where, `choice "${w}" is tagged ${tags[i]} but ${st[at]} in the sentence`);
        });
      }
    };
    switch (it.type) {
      case 'tap': {
        const tags = W.POS_TAG_LIST(it.tags), toks = W.POS_SPLIT(it.s);
        if (tags.length !== toks.length) bad(where, `tags (${tags.length}) do not match the words (${toks.length}): ${it.s}`);
        tags.forEach(t => { if (!tagSet.has(t)) bad(where, `unknown tag ${t}`); });
        const n = tags.filter(t => t === it.ask).length;
        if (n < 1) bad(where, `no ${it.ask} word to tap: ${it.s}`);
        if (n > 3) bad(where, `${n} right words is too many (max 3): ${it.s}`);
        sentenceRules(where, it.s, tags);
        toks.forEach((tk, i) => textRules(`${where} note`, W.POS_NOTE(tk.word, tags[i], it.ask, part.key), part.key));
        break;
      }
      case 'mc': {
        if (it.s) {
          const tags = W.POS_TAG_LIST(it.tags);
          if (tags.length !== W.POS_SPLIT(it.s).length) bad(where, `tags (${tags.length}) do not match the words: ${it.s}`);
          sentenceRules(where, it.s, tags);
        }
        choiceSet(it.choices, it.choiceTags, !it.s, it.s);
        break;
      }
      case 'fill': {
        if ((String(it.s).match(/___/g) || []).length !== 1) bad(where, `needs one ___ blank: ${it.s}`);
        sentenceRules(where, it.s, null);
        choiceSet(it.choices, it.choiceTags, false, null);
        break;
      }
      case 'yesno': {
        if (!['yes', 'no'].includes(it.answer)) bad(where, 'answer must be "yes" or "no"');
        if (!W.POS_TAGS[it.tag] && it.tag !== 'x') bad(where, 'yesno needs the word\'s own tag');
        if ((it.tag === it.ask) !== (it.answer === 'yes')) bad(where, `answer "${it.answer}" does not match: "${it.word}" is ${it.tag}`);
        wordRules(where, it.word, !it.s);
        if (it.s) {
          const tags = W.POS_TAG_LIST(it.tags), toks = W.POS_SPLIT(it.s);
          const at = toks.findIndex(t => t.word === it.word);
          if (at < 0) bad(where, `"${it.word}" is not in the sentence`); else if (tags[at] !== it.tag) bad(where, `"${it.word}" is ${tags[at]} in the sentence, not ${it.tag}`);
          sentenceRules(where, it.s, tags);
        }
        break;
      }
      case 'name': {
        const tags = W.POS_TAG_LIST(it.tags), toks = W.POS_SPLIT(it.s);
        if (tags.length !== toks.length) bad(where, `tags (${tags.length}) do not match the words: ${it.s}`);
        const at = toks.findIndex(t => t.word === it.word);
        if (at < 0) bad(where, `"${it.word}" is not in the sentence`);
        else if (!taught.includes(tags[at])) bad(where, `"${it.word}" is ${tags[at]} — the answer must be a job taught by now`);
        if (taught.length < 2) bad(where, 'name needs at least two taught jobs to pick from');
        sentenceRules(where, it.s, tags);
        break;
      }
      case 'sort': {
        if (!part.bins) { bad(where, `${part.label} has no sort`); break; }
        if (!part.bins.includes(it.answer)) bad(where, `answer must be one of: ${part.bins.join(' / ')}`);
        wordRules(where, it.word, false);
        if (it.s) {
          const tags = W.POS_TAG_LIST(it.tags), toks = W.POS_SPLIT(it.s);
          const at = toks.findIndex(t => t.word === it.word);
          if (at < 0) bad(where, `"${it.word}" is not in the sentence`); else if (tags[at] !== part.tag) bad(where, `"${it.word}" is ${tags[at]} in the sentence, not ${part.tag}`);
          sentenceRules(where, it.s, tags);
        } else if (part.key !== 'noun') bad(where, `${part.label} sort needs the sentence (s + tags)`);
        break;
      }
      case 'build': {
        const toks = W.POS_SPLIT(it.frame);
        const slots = toks.filter(t => /^\{(n|v|adj|adv)\}$/.test(t.text.replace(/[.!?,]$/, '')));
        if (slots.length !== (it.slots || []).length || slots.length !== 4) bad(where, 'build: the frame has 4 slots {adj} {n} {v} {adv}, one per slot entry');
        (it.slots || []).forEach((sl, si) => {
          const sw = `${where} slot ${si + 1}`;
          const ft = (slots[si] || { text: '' }).text.replace(/[{}.!?,]/g, '');
          if (sl.tag !== ft) bad(sw, `slot tag ${sl.tag} does not match the frame {${ft}}`);
          const save = it.ask; it.ask = sl.tag; choiceSet(sl.choices, sl.choiceTags, false, null); it.ask = save;
        });
        const built = it.frame.replace(/\{(n|v|adj|adv)\}/g, () => '');
        if (/\b(it|they)\b/i.test(built)) bad(where, 'frame says it/they');
        const full = (it.slots || []).reduce((f, sl) => f.replace(`{${sl.tag}}`, sl.choices[0]), it.frame);
        sentenceRules(where, full, null);
        break;
      }
      default: bad(where, `unknown type ${it.type}`);
    }
    return it.type === 'build' ? (it.slots || []).length : 1;
  };

  const TYPES = {
    noun: ['tap', 'mc', 'fill', 'sort', 'yesno'],
    verb: ['tap', 'mc', 'fill', 'yesno', 'name'],
    adj:  ['tap', 'mc', 'fill', 'sort', 'yesno', 'name'],
    adv:  ['tap', 'mc', 'fill', 'sort', 'yesno', 'name'],
    all:  ['tap', 'mc', 'fill', 'name', 'build']
  };
  const SIZE = { learn: [1, 6], practice: [2, 10], review: [3, 10] };   // versions × scored questions
  const ALL_SIZE = { learn: [1, 6], practice: [2, 10], review: [3, 12] };

  W.POS_PARTS.forEach(part => {
    if (only.length && !only.includes(part.key)) return;
    const set = (W.POS_SETS || {})[part.key];
    if (!set) { if (only.length) bad(part.key, `no data/part-${part.key}.js`); return; }
    W.POS_STAGES.forEach(st => {
      const where = `${part.key} ${st.key}`;
      const stage = set[st.key];
      if (!stage) { bad(where, 'missing'); return; }
      const [nv, nq] = (part.key === 'all' ? ALL_SIZE : SIZE)[st.key];
      cardRules(where, stage.cards, part.key, st.key === 'learn' ? (part.key === 'all' ? 3 : 4) : 1, st.key === 'learn' ? 7 : 1);
      const versions = stage.versions || [];
      if (versions.length !== nv) bad(where, `needs ${nv} version(s) (has ${versions.length})`);
      versions.forEach((items, vi) => {
        let scored = 0;
        (items || []).forEach((it, k) => { scored += itemRules(`${where} v${vi + 1} #${k + 1} (${it.id})`, it, part, st.n, vi + 1, k, TYPES[part.key]); });
        if (scored !== nq) bad(`${where} v${vi + 1}`, `needs ${nq} scored questions (has ${scored})`);
        const types = new Set((items || []).map(i => i.type));
        if (types.size < 3) bad(`${where} v${vi + 1}`, `use at least 3 kinds of questions (has ${[...types].join(', ')})`);
        const taps = (items || []).filter(i => i.type === 'tap').length;
        if (taps < 2) bad(`${where} v${vi + 1}`, `needs at least 2 tap questions (has ${taps})`);
        // ── no surface tricks (critique 10/27): a Level 1 reader must not pass by "pick the -ly word",
        // "pick the -ed word", "pick the -y word", "tap the last word" or "tap the first word (the name)".
        const END = { v: /ed$/i, adj: /y$/i, adv: /ly$/i };
        const boxes = [];
        (items || []).forEach(i => {
          if (i.type === 'build') i.slots.forEach(sl => boxes.push({ ask: sl.tag, choices: sl.choices }));
          else if (i.type === 'mc' || i.type === 'fill') boxes.push({ ask: i.ask, choices: i.choices });
        });
        const judged = boxes.filter(b => END[b.ask]);
        const byEnding = judged.filter(b => END[b.ask].test(b.choices[0]) && b.choices.filter(c => END[b.ask].test(c)).length === 1);
        if (judged.length >= 2 && judged.every(b => END[b.ask].test(b.choices[0])))
          bad(`${where} v${vi + 1}`, `every right word in pick-a-word ends in its job's ending (-ed / -y / -ly): break the pattern at least once (swam, soft, soon …)`);
        if (judged.length >= 2 && byEnding.length > Math.ceil(judged.length / 2))
          bad(`${where} v${vi + 1}`, `${byEnding.length} of ${judged.length} pick-a-word questions can be answered by the ending alone (max ${Math.ceil(judged.length / 2)}): give a wrong choice the same ending, or a right word without it`);
        const tapsOf = ask => (items || []).filter(i => i.type === 'tap' && i.ask === ask);
        const advTaps = tapsOf('adv');
        const advLast = advTaps.filter(i => { const t = W.POS_TAG_LIST(i.tags); return t[t.length - 1] === 'adv'; });
        if (advTaps.length >= 2 && advLast.length > Math.ceil(advTaps.length * 0.6))
          bad(`${where} v${vi + 1}`, `${advLast.length} of ${advTaps.length} adverb taps end on the adverb (max ${Math.ceil(advTaps.length * 0.6)}): put a how/when adverb earlier ("Mom slowly stirred the soup.")`);
        const nounTaps = tapsOf('n');
        if (nounTaps.length >= 2 && nounTaps.every(i => W.POS_TAG_LIST(i.tags)[0] === 'n'))
          bad(`${where} v${vi + 1}`, 'every noun tap starts with a noun (a name): start at least one with a little word ("The baby dropped a spoon.")');
        if (part.key === 'all') {
          const asks = new Set((items || []).filter(i => i.ask).map(i => i.ask));
          (items || []).filter(i => i.type === 'name').forEach(i => asks.add(W.POS_TAG_LIST(i.tags)[W.POS_SPLIT(i.s).findIndex(t => t.word === i.word)]));
          if (asks.size < 4) bad(`${where} v${vi + 1}`, `All Four must ask about all four jobs (asks ${[...asks].join(', ')})`);
        }
      });
      if (st.key === 'practice' && part.key === 'all' && !versions.every(v => (v || []).some(i => i.type === 'build'))) bad(where, 'every All Four Practice version has one build-a-sentence');
    });
  });
  return { problems, ids: ids.size, sentences: sentences.size };
}

/* ── planted mistakes: each must be caught ── */
const PLANTS = {
  'tags-misaligned':  W => { const it = firstOf(W, 'tap'); it.tags = it.tags.replace(/\s*\S+$/, ''); },
  'no-right-word':    W => { const it = firstOf(W, 'tap'); it.tags = W.POS_TAG_LIST(it.tags).map(t => t === it.ask ? 'x' : t).join(' '); },
  'helping-verb':     W => { const it = firstOf(W, 'tap'); it.s = it.s.replace(/^(\S+) (\S+)/, '$1 was $2'); it.tags = 'x ' + it.tags; },
  'pronoun':          W => { const it = firstOf(W, 'tap'); it.s = it.s.replace(/^\S+ \S+/, 'She'); it.tags = 'x ' + W.POS_TAG_LIST(it.tags).slice(2).join(' '); },
  'two-right-choices':W => { const it = firstOf(W, 'mc'); it.choiceTags[1] = it.choiceTags[0]; },
  'right-not-first':  W => { const it = firstOf(W, 'mc'); [it.choices[0], it.choices[1]] = [it.choices[1], it.choices[0]]; [it.choiceTags[0], it.choiceTags[1]] = [it.choiceTags[1], it.choiceTags[0]]; },
  'nv-isolated':      W => { const it = firstOf(W, 'mc', i => !i.s); it.choices[1] = 'jump'; },
  'says-it':          W => { const it = firstOf(W, 'tap'); it.why = 'It names a thing.'; },
  'untaught-name':    W => { const it = W.POS_SETS.noun.learn.versions[0][0]; it.why = 'This word is a verb.'; },
  'hard-reading':     W => { const it = firstOf(W, 'tap'); it.why = 'Extraordinary vocabulary demonstrates sophisticated grammatical understanding immediately.'; },
  'roster-name':      W => { const it = firstOf(W, 'tap'); it.s = it.s.replace(/^\S+/, 'Kelvin'); },
  'duplicate':        W => { const a = firstOf(W, 'tap'); const b = firstOf(W, 'tap', i => i !== a); b.s = a.s; b.tags = a.tags; b.ask = a.ask; },
  'his-sheet':        W => { const it = firstOf(W, 'tap'); it.s = 'The turtle moved slowly.'; it.tags = 'x n v adv'; },
  'id-wrong':         W => { const it = firstOf(W, 'tap'); it.id = it.id.replace(/\d$/, d => String((Number(d) + 1) % 10)); },
  'missing-why':      W => { const it = firstOf(W, 'tap'); delete it.why; },
  'ly-adjective':     W => { const it = firstOf(W, 'mc'); it.choices[1] = 'friendly'; },
  'too-few':          W => { W.POS_SETS.noun.practice.versions[0].pop(); },
  'yesno-wrong':      W => { const it = firstOf(W, 'yesno'); if (it) it.answer = it.answer === 'yes' ? 'no' : 'yes'; },
  'card-says-title':  W => { const c = W.POS_SETS.adj.learn.cards[2]; c.blocks.unshift({ p: 'Many adjectives tell what kind.' }); c.title = 'An Adjective Can Tell What Kind'; }
};
function firstOf(W, type, extra) {
  for (const p of W.POS_PARTS) {
    const set = W.POS_SETS[p.key]; if (!set) continue;
    for (const st of W.POS_STAGES) for (const v of ((set[st.key] || {}).versions || [])) for (const it of v)
      if (it.type === type && (!extra || extra(it))) return it;
  }
  return null;
}

const args = process.argv.slice(2);
if (args.includes('--plants')) {
  const base = check(load(), []).problems.length;
  if (base) { console.log(`Fix the ${base} real problem(s) first (node tools/check-pos.js).`); process.exit(1); }
  let caught = 0;
  Object.entries(PLANTS).forEach(([name, plant]) => {
    let r;
    try { r = check(load(null, plant), []); } catch (e) { r = { problems: [`crash: ${e.message}`] }; }
    const ok = r.problems.length > 0;
    if (ok) caught++;
    console.log(`${ok ? 'CAUGHT' : 'MISSED'}  ${name}${ok ? '' : ''}`);
  });
  console.log(`${caught}/${Object.keys(PLANTS).length} planted mistakes caught`);
  process.exit(caught === Object.keys(PLANTS).length ? 0 : 1);
}
const only = args.filter(a => !a.startsWith('--'));
const r = check(load(), only);
r.problems.forEach(p => console.log('✗ ' + p));
console.log(`${r.problems.length} problem(s) · ${r.ids} question ids · ${r.sentences} sentences`);
process.exit(r.problems.length ? 1 : 0);
