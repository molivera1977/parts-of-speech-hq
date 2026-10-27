# Parts of Speech HQ — content spec (for writing `data/part-<key>.js`)

## Who it is for
Mr. O's Grade 4 class (Bridgeport, CT). 17 of 22 read at ELA Level 1. Every word on the site is read aloud, but the
student still has to follow it, so the writing is short, plain and concrete. The site **teaches, practices and reviews
the basics of four parts of speech**. Marcos, 10/27/2026: *"lets focus on the basics of each. dont worry about helping
linking verbs, past, present, future."*

His own words (from his 9/15 paper review sheets) are the definitions. Use them exactly:

| Job | Definition (say it this way) | The question a kid asks |
|---|---|---|
| **noun** | A noun names a person, place, thing, or idea. | Does the word name a person, place, thing, or idea? |
| **verb** | A verb shows an action. A verb tells what someone or something does. | Can someone or something do this? What did the noun do? |
| **adjective** | An adjective describes a noun. An adjective tells what kind or how many. | Find the noun. Ask: what kind? how many? |
| **adverb** | An adverb describes a verb. An adverb tells how, when, or where. | Find the verb. Ask: how? when? where? Many adverbs that tell how end in -ly. |

**Out of scope (never teach, never test):** helping verbs, linking verbs (is, are, was, seems…), past/present/future
tense words, common vs proper nouns, plurals as a skill, comparing (-er / -est, more / most), "which one?" adjectives
(this, that, these, those), pronouns.
Animals: a noun that names an animal counts as a **thing** ("A frog is a living thing."). Never use an animal in a
person/place/thing/idea **sort** question, because some teachers say "animal" is its own group.

## The site
Five parts in this order: **Nouns → Verbs → Adjectives → Adverbs → All Four**. Each part has three stages:
1. **Learn** — lesson cards (one idea per card, every line read aloud), then a short check of 6 questions.
2. **Practice** — one "Remember" card, then 10 questions. Two versions (a redo gets new sentences).
3. **Review** — one "Remember" card, then 10 questions (All Four: 12). Three versions. 75% passes and opens the next part.

After every answer the site shows ✅/❌, the student's wrong pick explained (the site writes that note itself from your
tags — see "Notes"), and your `why`. After a miss the student must hear it before Next.

**A job is taught before it is named.** In Nouns, the words *verb, adjective, adverb* never appear in anything a
student reads (cards, why). In Verbs, *adjective/adverb* never appear. *Describe* is taught on the first Adjectives
card; Nouns and Verbs never say "describe". The checker enforces this. (The site's automatic notes already follow it:
in Nouns a wrong pick "ran" gets "The word “ran” is not a noun. “Ran” shows an action.")

## File format

```js
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.<key> = {            // noun | verb | adj | adv | all
  learn:    { cards: [CARD × 4–7], versions: [ [ITEM × 6] ] },
  practice: { cards: [CARD × 1],   versions: [ [ITEM × 10], [ITEM × 10] ] },
  review:   { cards: [CARD × 1],   versions: [ [ITEM × 10], [ITEM × 10], [ITEM × 10] ] }   // All Four: 12 per version
};
```

### Ids
`<letter><stage><version><two digits>`, numbered in order inside each version.
Letters: Nouns **N**, Verbs **V**, Adjectives **J**, Adverbs **D**, All Four **A**. Stages: Learn 1, Practice 2, Review 3.
`N2103` = Nouns, Practice, version 1, question 3. `D3210` = Adverbs, Review, version 2, question 10.

### Tags
Every word of a sentence gets one tag, in order, separated by spaces: **n** noun · **v** verb · **adj** adjective ·
**adv** adverb · **x** anything else (a, an, the, and, for, to, in, on, with, at, of …).
`'The tired baker sold warm bread.'` → `'x adj n v adj n'`. Punctuation rides on its word and is not a word.
**The tags are the answer key.** A wrong tag marks a right answer wrong in front of a child. Get every one right.

### CARD
`{ title: 'A Noun Can Name a Place', blocks: [BLOCK, …] }` — 1–6 blocks, ≤ 90 words, ONE idea.
Blocks (one kind each):
- `{ p: 'One or two short sentences.' }`
- `{ term: 'noun', means: 'a word that names a person, place, thing, or idea', ex: 'Dog, school, and pencil are nouns.' }` (shown as "noun means …")
- `{ words: ['teacher', 'doctor', 'baby', 'Grandpa'], tag: 'n' }` — 3–8 example words, shown as colored tiles ("For example:")
- `{ sent: 'The tired baker sold warm bread.', tags: 'x adj n v adj n', show: 'n' }` — a sentence with the `show` job's words colored and labeled. `show` may be a list: `['adj', 'n']`. Optional `say: '…'` adds a line under it.
- `{ tip: 'Ask: Does the word name a person, place, thing, or idea?' }` — shown as 💡 Tip
- `{ rows: [['1', 'Find the noun.'], ['2', 'Ask: what kind?']] }` — numbered steps
- `{ good: 'The word “park” is a noun.', why: 'A park is a place.' }` and `{ bad: 'The word “ran” is not a noun.', why: '“Ran” does not name a person, place, thing, or idea.' }` — ✔ / ✘ examples

**Examples lead.** Mr. O: "Examples are everything for 4th graders much more than definitions." Every idea gets
4–5 examples from a 4th grader's life (school, home, the park, food, sports, pets, weather, Bridgeport). A definition
alone is never enough. "Nothing gets said once": the Practice and Review "Remember" card repeats the definition, a
few example words, and the tip.

### ITEM types
The site writes the question itself (from `type` and `ask`), so every question is worded the same way. **The right
choice always comes FIRST** in `choices`; the site shuffles. Every item has `id`, `type`, `skill`, `why`.

**tap** — the sentence is shown as word buttons; the student taps one word. Any word with the `ask` tag is right.
Question: "Tap the noun in the sentence." (one right word) or "Tap a noun in the sentence." (2–3 right words).
```js
{ id: 'N2101', type: 'tap', skill: 'Find the noun', s: 'The tired baker sold warm bread.', tags: 'x adj n v adj n', ask: 'n',
  why: '“Baker” names a person. “Bread” names a thing.' }
```
At most 3 right words. Prefer sentences with exactly one or two.

**mc** — "Which word is a noun?" (no sentence: 4 single words) or "Which word in the sentence is a noun?" (`s` + `tags`; every choice is a word of the sentence, 3–4 choices).
```js
{ id: 'N2102', type: 'mc', skill: 'Pick the noun', ask: 'n', choices: ['library', 'quickly', 'purple', 'climbed'], choiceTags: ['n', 'adv', 'adj', 'v'],
  why: '“Library” names a place.' }
{ id: 'N2103', type: 'mc', skill: 'Find the noun', ask: 'n', s: 'Grace painted a bright rainbow.', tags: 'n v x adj n',
  choices: ['rainbow', 'painted', 'bright'], choiceTags: ['n', 'v', 'adj'], why: 'A rainbow is a thing you can see.' }
```
`choiceTags` tag each choice (one for one). Exactly one choice has the `ask` tag. With no sentence, every choice must
have ONE job on its own: use `jumped` (not `jump`, which can be "a jump"), `pencil`, `purple`, `quickly`. The checker
refuses words that are both a noun and a verb on their own.

**fill** — "Which noun best completes the sentence?" One `___` blank, 4 single-word choices.
```js
{ id: 'N2104', type: 'fill', skill: 'Complete the sentence', ask: 'n', s: 'Luis kicked the ___ into the net.',
  choices: ['ball', 'sleepy', 'gently', 'shouted'], choiceTags: ['n', 'adj', 'adv', 'v'], why: 'Luis kicked a thing. A ball is a thing.' }
```
The wrong choices must NOT make a good sentence in the blank. (Mr. O's own sheet had "The ___ wind blew" with "forest"
as a wrong choice — but "the forest wind" works. Do not do that.)

**yesno** — "Is the word “happiness” a noun?" Choices Yes / No (fixed).
```js
{ id: 'N2105', type: 'yesno', skill: 'Noun or not', ask: 'n', word: 'happiness', tag: 'n', answer: 'yes', why: 'Happiness is an idea. You feel happiness.' }
```
`tag` = the word's own job (or `x`). Optional `s` + `tags` to put the word in a sentence. Use at most 1 per version.

**sort** — Nouns: "Does the noun “beach” name a person, a place, a thing, or an idea?" (choices `a person · a place · a thing · an idea`).
Adjectives: "Does the adjective “five” tell what kind or how many?" (`what kind · how many`).
Adverbs: "Does the adverb “yesterday” tell how, when, or where?" (`how · when · where`).
```js
{ id: 'N2106', type: 'sort', skill: 'Person, place, thing, or idea', word: 'beach', answer: 'a place', why: 'You can go to a beach. A beach is a place.' }
{ id: 'J2106', type: 'sort', skill: 'What kind or how many', s: 'Five ducks swam across the pond.', tags: 'adj n v x x n', word: 'Five', answer: 'how many', why: '“Five” tells how many ducks.' }
```
Adjective and adverb sorts need the sentence (`s` + `tags`); the word is a word of the sentence with the part's tag.
Noun sorts are a single word; never an animal, never a word that fits two groups ("school" is a place; "lunch" could be a thing or a time — skip it).

**name** — "What part of speech is the word “painted” in the sentence?" The site offers the jobs taught so far
(Verbs: noun · verb; Adjectives: noun · verb · adjective; Adverbs and All Four: all four).
```js
{ id: 'V2107', type: 'name', skill: 'Name the part of speech', s: 'Omar painted the fence.', tags: 'n v x n', word: 'painted', why: '“Painted” tells what Omar did. “Painted” is an action.' }
```
The answer is the word's tag in the sentence (must be a job taught by now).

**build** (All Four Practice only) — build a sentence by picking a word for each colored box. One build = 4 scored questions.
```js
{ id: 'A2101', type: 'build', skill: 'Build a sentence', frame: 'The {adj} {n} {v} {adv}.',
  slots: [
    { tag: 'adj', choices: ['playful', 'quickly', 'barked'],  choiceTags: ['adj', 'adv', 'v'] },
    { tag: 'n',   choices: ['kitten', 'sleepy', 'jumped'],    choiceTags: ['n', 'adj', 'v'] },
    { tag: 'v',   choices: ['pounced', 'happy', 'gently'],    choiceTags: ['v', 'adj', 'adv'] },
    { tag: 'adv', choices: ['quietly', 'fluffy', 'pencil'],   choiceTags: ['adv', 'adj', 'n'] }
  ],
  why: 'Your sentence has all four jobs: an adjective, a noun, a verb, and an adverb.' }
```
The right words (first in each slot) must make one good sentence. The wrong words must not fit their box's job.

### Notes (the site writes them)
After a wrong pick the site says what the picked word really is, from your tags:
"The word “ran” is a verb, not a noun. “Ran” shows an action." Before verbs are taught: "The word “ran” is not a noun.
“Ran” shows an action." So **tag every word right**, and your `why` only needs to explain the RIGHT answer.

### `why`
1–2 short sentences. Explain the right answer with the kid's question: "“Fluffy” tells what kind of puppy." · "“Slowly”
tells how the turtle moved." · "A library is a place." Name the thing; **never "it", "its", "they", "them"** (the class
rule — repeat the noun). Do not give away another question's answer.

## Sentence rules (the checker enforces most of these)
- 3–12 words (most 5–8). Capital first letter, ends with . ! or ?
- Simple action verbs only: `jumped, ran, ate, kicked, swims, reads`. **Never** am / is / are / was / were / be / been /
  will / would / can / could / should / has / have / had / do / does / did / seem(s) (helping and linking verbs are out).
- **No pronouns** (I, he, she, it, we, they, you, me, him, her, us, them, my, his, our, their, this, that…). Use names and nouns.
- No `'s`, no contractions, no Mr./Mrs./Dr., no -ing words (except morning, evening, king, ring, wing, string, ceiling).
- No word that easily does two jobs: fast, hard, early, late, well, high, low, straight, near, far, close, pretty,
  quick, slow, loud, right, left, back, home, still, just, only, very, too, so, not, more, most, much, little, light,
  kind, fine, first, last, round, there, then, ahead (the checker lists them).
- No -ly words that are not adverbs (friendly, lovely, silly, chilly, family, jelly…), so "-ly means how" stays true.
- Little words (in, on, up, down, out, off, over, around, under…) are always `x`, never adverbs. Where-adverbs
  (outside, inside, upstairs, downstairs, nearby, here, everywhere, away) go at the END of a sentence, never before a noun.
- No noun used as an adjective ("school bus", "apple pie", "birthday party"): it makes the tags arguable.
- Words of 3 syllables or fewer (names excepted).
- **No real student names.** Never use: Jo'Von, Eduin, Kelvin, Allison, Roniel, Michael, Fakeem, Iyana, Christopher,
  Kiara, Destiny, Tahji, Eric, Jovany, Lanaura, Thiara, Robyn, Marcos, Marcus, Alanie, Johanelyz, Taishmara, Autumn, Nazareth.
- **Every sentence is new**: no sentence twice anywhere on the site, and none copied from Mr. O's 9/15 sheets.
  A card's example sentence is never a question's sentence. Different versions = different sentences.
- Everyday, warm, kid-world content. Vary the names (Maya, Luis, Ana, Omar, Grace, Leo, Nia, Sofia, Jamal, Rosa, Mateo,
  Zoe, Kai, Priya, Ben…) and the places (school, the park, the beach, the kitchen, Bridgeport, the library, the gym).

## Reading level
Every line a student reads (card text, `why`, the site's questions and notes) measures **FK ≤ 3.0** per sentence
(sentences of 5+ words). The taught words (noun, verb, adjective, adverb, describe, person, place, thing, idea,
action, sentence) and any “quoted” word count as one short word. `node tools/fk.js "text"` measures any text.

## Done means
`node tools/check-pos.js <key>` prints **0 problem(s)**. Then read every item once more as a 9-year-old would, and
once more as a grammar teacher would: is every tag right **in this sentence**? Could a wrong choice also be right?
