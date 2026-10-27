/* ═══════════════════════════════════════════════════════
   Parts of Speech HQ → Teacher Dashboard
   Rewrites the block between /* POSHQ:BEGIN *\/ and /* POSHQ:END *\/ in
   "Mr. O's Teacher Dashboard/index.html" from this site's data files, so the
   dashboard's question list always matches the site: one entry per part, each
   with its three stages (pos-<part>-<stage>), every question of EVERY version as
   { id, skill, q }. Ids are unique per version (N3201 = Nouns · Review · version 2
   · question 1), so a row's misses always find their own question. q is worded
   the way the site saves a miss (data/pos.js POS_Q, then — sentence “…”).
   Usage:  node tools/dashboard-data.js          (rewrite the dashboard block)
           node tools/dashboard-data.js --print  (print the block only)
═══════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = path.resolve(__dirname, '..');
const DASH = path.resolve(SITE, '..', "Mr. O's Teacher Dashboard", 'index.html');

const box = { window: {} };
vm.createContext(box);
vm.runInContext(fs.readFileSync(path.join(SITE, 'data', 'pos.js'), 'utf8'), box);
const W = box.window;
W.POS_SETS = {};
W.POS_PARTS.forEach(p => {
  const f = path.join(SITE, 'data', `part-${p.key}.js`);
  if (!fs.existsSync(f)) { console.error(`Missing data/part-${p.key}.js`); process.exit(1); }
  vm.runInContext(fs.readFileSync(f, 'utf8'), box);
});

// Same wording as the site's missText(): the question, then the sentence
const withSentence = (q, s) => (s ? `${q} — sentence “${s}”` : q);

const parts = W.POS_PARTS.map((p, pi) => ({
  key: p.key, n: pi + 1, letter: p.letter, label: p.label,
  stages: W.POS_STAGES.map(st => {
    const versions = W.POS_SETS[p.key][st.key].versions;
    const items = [];
    let max = null;
    versions.forEach(v => {
      let count = 0;
      v.forEach(it => {
        if (it.type === 'build') {
          const full = it.slots.reduce((f, sl) => f.replace(`{${sl.tag}}`, sl.choices[0]), it.frame);
          it.slots.forEach((sl, k) => { count++; items.push({ id: `${it.id}.${k + 1}`, skill: it.skill, q: withSentence(W.POS_Q({ type: 'build', ask: sl.tag }, p.key), full) }); });
        } else { count++; items.push({ id: it.id, skill: it.skill, q: withSentence(W.POS_Q(it, p.key), it.s) }); }
      });
      if (max != null && max !== count) { console.error(`${p.key} ${st.key}: versions have different lengths`); process.exit(1); }
      max = count;
    });
    return { n: st.n, key: st.key, label: st.label, max, items };
  })
}));

const ids = parts.flatMap(p => p.stages.flatMap(s => s.items.map(q => q.id)));
const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
if (dup.length) { console.error('Duplicate question ids:', dup.join(', ')); process.exit(1); }

const block = `/* POSHQ:BEGIN */\nconst POSHQ_PARTS = ${JSON.stringify(parts)};\n/* POSHQ:END */`;

if (process.argv.includes('--print')) { console.log(block); process.exit(0); }

const html = fs.readFileSync(DASH, 'utf8');
const re = /\/\* POSHQ:BEGIN \*\/[\s\S]*?\/\* POSHQ:END \*\//;
if (!re.test(html)) { console.error('No POSHQ:BEGIN / POSHQ:END markers in the dashboard. Add the Parts of Speech HQ block first.'); process.exit(1); }
fs.writeFileSync(DASH, html.replace(re, () => block));
console.log(`Dashboard updated: ${parts.length} parts, ${parts.length * W.POS_STAGES.length} stages, ${ids.length} questions.`);
