/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — PARTS, STAGES, WORD JOBS, SHARED WORDS
   Marcos 10/27/2026: "let's create a site that has sections that teach, practice,
   and review nouns, verbs, adjectives, and adverbs" · "lets focus on the basics of
   each. dont worry about helping linking verbs, past, present, future".
   His words come from his own Parts of Speech Review sheets (9/15/2026):
   Noun (N) names a person, place, thing, or idea · Verb (V) shows action ·
   Adjective (ADJ) describes a noun · Adverb (ADV) describes a verb and tells how,
   when, or where.

   This file: the five parts (Nouns, Verbs, Adjectives, Adverbs, All Four) in
   teaching order, the three stages of each part (Learn, Practice, Review), the
   four word jobs and their colors, and the words the site builds from an item
   (the question, the note on a wrong pick). tools/check-pos.js reads this same
   file, so the checker measures the exact words a student sees.
   Each part's cards and questions live in data/part-<key>.js (window.POS_SETS[key]).
═══════════════════════════════════════════════════════ */

/* The four word jobs. `job` is said once the part has been taught; `plain` says the
   same thing without the part's name, for a part not taught yet (a word is taught
   before it is used). */
window.POS_TAGS = {
  n:   { name: 'noun',      a: 'a',  label: 'N',   color: '#1d5fd1', job: 'names a person, place, thing, or idea', plain: 'names a person, place, thing, or idea' },
  v:   { name: 'verb',      a: 'a',  label: 'V',   color: '#c62828', job: 'shows an action',  plain: 'shows an action' },
  adj: { name: 'adjective', a: 'an', label: 'ADJ', color: '#1b7a43', job: 'describes a noun', plain: 'tells about a noun' },
  adv: { name: 'adverb',    a: 'an', label: 'ADV', color: '#7b2fbf', job: 'describes a verb', plain: 'tells how, when, or where' }
};
window.POS_TAG_ORDER = ['n', 'v', 'adj', 'adv'];

/* Teaching order. The letter starts every question id (N2105 = Nouns, Practice,
   version 1, question 5). `tag` is the job this part teaches (All Four: every job). */
window.POS_PARTS = [
  { key: 'noun', letter: 'N', tag: 'n',   icon: '🟦', label: 'Nouns',      sub: 'Person, place, thing, or idea',
    def: 'A noun names a person, place, thing, or idea.',
    bins: ['a person', 'a place', 'a thing', 'an idea'] },
  { key: 'verb', letter: 'V', tag: 'v',   icon: '🟥', label: 'Verbs',      sub: 'Action words',
    def: 'A verb shows an action. A verb tells what someone or something does.' },
  { key: 'adj',  letter: 'J', tag: 'adj', icon: '🟩', label: 'Adjectives', sub: 'Words that describe a noun',
    def: 'An adjective describes a noun. An adjective tells what kind or how many.',
    bins: ['what kind', 'how many'] },
  { key: 'adv',  letter: 'D', tag: 'adv', icon: '🟪', label: 'Adverbs',    sub: 'How, when, or where',
    def: 'An adverb describes a verb. An adverb tells how, when, or where.',
    bins: ['how', 'when', 'where'] },
  { key: 'all',  letter: 'A', tag: null,  icon: '⭐', label: 'All Four',   sub: 'Nouns, verbs, adjectives, and adverbs together',
    def: 'Every word has a job. Nouns, verbs, adjectives, and adverbs are four jobs.' }
];

/* Each part: Learn (lesson cards, then a short check), Practice, Review. Learn and
   Practice are done once they are finished; a Review passes at 75% (Marcos 10/27). */
window.POS_STAGES = [
  { n: 1, key: 'learn',    label: 'Learn',    icon: '📘', pass: 0 },
  { n: 2, key: 'practice', label: 'Practice', icon: '✏️', pass: 0 },
  { n: 3, key: 'review',   label: 'Review',   icon: '✅', pass: 75 }
];

/* A sentence's words, in order. Punctuation stays on the word it touches ("berries.")
   but is not part of the word. "___" is the blank in a complete-the-sentence item. */
window.POS_SPLIT = function (s) {
  return String(s || '').trim().split(/\s+/).filter(Boolean).map(text => ({
    text,
    word: text === '___' || /^_+[.!?,]?$/.test(text) ? '___' : text.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, '')
  }));
};
/* An item's tags, one per word of its sentence ("x adj n v x n") */
window.POS_TAG_LIST = function (tags) {
  return Array.isArray(tags) ? tags.slice() : String(tags || '').trim().split(/\s+/).filter(Boolean);
};

/* Which jobs a student has been taught by this part (Nouns: noun; Adverbs and All Four: all four) */
window.POS_TAUGHT = function (partKey) {
  const i = window.POS_PARTS.findIndex(p => p.key === partKey);
  return window.POS_TAG_ORDER.slice(0, Math.min(4, i + 1));
};

/* The question a student sees, built from the item so every one is worded the same way */
window.POS_Q = function (it, partKey) {
  const T = window.POS_TAGS[it.ask] || {};
  const w = `“${it.word}”`;
  switch (it.type) {
    case 'tap': {
      // heard aloud, "a noun" and "the noun" sound alike, so a sentence with 2–3 right words says how many (critique 10/27)
      const n = window.POS_TAG_LIST(it.tags).filter(t => t === it.ask).length;
      return n > 1 ? `Tap one ${T.name}. The sentence has ${['', 'one', 'two', 'three'][n] || n} ${T.name}s.` : `Tap the ${T.name} in the sentence.`;
    }
    case 'mc':    return it.s ? `Which word in the sentence is ${T.a} ${T.name}?` : `Which word is ${T.a} ${T.name}?`;
    case 'fill':  return `Which ${T.name} best completes the sentence?`;
    case 'yesno': return `Is the word ${w} ${T.a} ${T.name}?`;
    case 'name':  return `What part of speech is the word ${w} in the sentence?`;
    case 'sort': {
      if (partKey === 'noun') return `Does the noun ${w} name a person, a place, a thing, or an idea?`;
      if (partKey === 'adj')  return `Does the adjective ${w} tell what kind or how many?`;
      return `Does the adverb ${w} tell how, when, or where?`;
    }
    case 'build': return `Pick ${T.a} ${T.name} for the sentence.`;
  }
  return '';
};

/* The note after a wrong pick: what the picked word really is, in one short sentence (critique 10/27: the
   definition is already on the screen in the Remember line). A job not taught yet is described without its
   name. a, an, the and the other little words are "little words" (taught on Nouns card 1); "a, an, the" point
   to a noun, and do not count as adjectives (his sheet). */
window.POS_NOTE = function (word, tag, ask, partKey) {
  const A = window.POS_TAGS[ask];
  if (!A || tag === ask) return '';
  const W = `“${String(word).charAt(0).toUpperCase()}${String(word).slice(1)}”`;
  const T = window.POS_TAGS[tag];
  if (T) {
    return window.POS_TAUGHT(partKey).includes(tag)
      ? `${W} is ${T.a} ${T.name}, not ${A.a} ${A.name}.`
      : `${W} is not ${A.a} ${A.name}. ${W} ${T.plain}.`;
  }
  if (/^(a|an|the)$/i.test(word)) {
    if (ask === 'adj') return 'We do not count a, an, or the.';
    if (ask === 'n') return `${W} is a little word. ${W} points to a noun.`;
  }
  return `${W} is a little word, not ${A.a} ${A.name}.`;
};
