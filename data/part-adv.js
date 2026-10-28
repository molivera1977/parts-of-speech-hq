/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — ADVERBS (key adv, ids D…)
   Basics only: an adverb describes a verb; an adverb tells how, when, or where;
   many adverbs that tell how end in -ly. No comparing (faster / fastest).
   Theme: home routines, weather, and time of day.
   10/27 critique rewrite: how/when adverbs also come earlier in a sentence (not always the
   last word); some right answers have no -ly; "never" is gone and "always" is never taught
   as a when word (many programs call it "how often"); the -ly hint lives on the cards only.
   Format and rules: tools/CONTENT-SPEC.md · check: node tools/check-pos.js adv
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.adv = {

  /* ── LEARN: 6 cards, then a 6-question check ── */
  learn: {
    cards: [
      { title: 'Meet the Adverb', blocks: [
        { sent: 'The kitten yawned slowly.', tags: 'x n v adv', show: ['v', 'adv'], say: '“Slowly” describes the verb “yawned.”' },
        { sent: 'Dad snored loudly.', tags: 'n v adv', show: ['v', 'adv'], say: '“Loudly” describes the verb “snored.”' },
        { sent: 'Grandpa visited today.', tags: 'n v adv', show: ['v', 'adv'], say: '“Today” describes the verb “visited.”' },
        { sent: 'The kids played upstairs.', tags: 'x n v adv', show: ['v', 'adv'], say: '“Upstairs” describes the verb “played.”' },
        { term: 'adverb', means: 'a word that describes a verb', ex: 'Slowly and loudly are adverbs.' },
        { p: 'An adverb tells more about the action.' }
      ] },
      { title: 'Adverbs That Tell How', blocks: [
        { p: 'Ask: How did the action happen?' },
        { words: ['slowly', 'quickly', 'gently', 'loudly', 'carefully'], tag: 'adv' },
        { sent: 'Mom hummed softly.', tags: 'n v adv', show: 'adv', say: '“Softly” tells how Mom hummed.' },
        { sent: 'Leo quickly washed the dishes.', tags: 'n adv v x n', show: 'adv', say: '“Quickly” tells how Leo washed the dishes.' },
        { sent: 'Kai brushed the cat gently.', tags: 'n v x n adv', show: 'adv', say: '“Gently” tells how Kai brushed the cat.' },
        { tip: 'Many adverbs that tell how end in -ly. Watch out: “jelly” and “family” end in -ly too. Both words are nouns. Always ask: How?' }
      ] },
      { title: 'Adverbs That Tell When', blocks: [
        { p: 'Ask: When did the action happen?' },
        { words: ['today', 'yesterday', 'tomorrow', 'soon', 'later'], tag: 'adv' },
        { sent: 'Nia baked muffins yesterday.', tags: 'n v n adv', show: 'adv', say: '“Yesterday” tells when Nia baked muffins.' },
        { sent: 'Soon the bus arrived.', tags: 'adv x n v', show: 'adv', say: '“Soon” tells when the bus arrived.' },
        { sent: 'Sofia cleaned the room later.', tags: 'n v x n adv', show: 'adv', say: '“Later” tells when Sofia cleaned the room.' }
      ] },
      { title: 'Adverbs That Tell Where', blocks: [
        { p: 'Ask: Where did the action happen?' },
        { words: ['outside', 'inside', 'upstairs', 'downstairs', 'here', 'everywhere', 'nearby', 'away'], tag: 'adv' },
        { sent: 'Luis carried the laundry downstairs.', tags: 'n v x n adv', show: 'adv', say: '“Downstairs” tells where Luis carried the laundry.' },
        { sent: 'Grandma hung the towels outside.', tags: 'n v x n adv', show: 'adv', say: '“Outside” tells where Grandma hung the towels.' },
        { sent: 'The birds flew away.', tags: 'x n v adv', show: 'adv', say: '“Away” tells where the birds flew.' }
      ] },
      { title: 'Find the Adverb', blocks: [
        { rows: [['1', 'Find the verb.'], ['2', 'Ask: How? When? Where?'], ['3', 'The word that answers is the adverb.']] },
        { sent: 'Omar neatly folded the shirts.', tags: 'n adv v x n', show: ['v', 'adv'], say: 'How did Omar fold the shirts? “Neatly.”' },
        { sent: 'Zoe walked the dog today.', tags: 'n v x n adv', show: ['v', 'adv'], say: 'When did Zoe walk the dog? “Today.”' },
        { sent: 'Ben splashed outside.', tags: 'n v adv', show: ['v', 'adv'], say: 'Where did Ben splash? “Outside.”' }
      ] },
      { title: 'Adjective or Adverb?', blocks: [
        { p: 'An adjective describes a noun. An adverb describes a verb.' },
        { sent: 'Nia read in the quiet library.', tags: 'n v x x adj n', show: 'adj' },
        { sent: 'Nia whispered quietly.', tags: 'n v adv', show: 'adv' },
        { good: 'The word “quietly” is an adverb.', why: '“Quietly” tells how Nia whispered.' },
        { bad: 'The word “quiet” is not an adverb.', why: '“Quiet” describes the noun “library.” “Quiet” is an adjective.' },
        { sent: 'The sleepy baby smiled sweetly.', tags: 'x adj n v adv', show: ['adj', 'adv'], say: '“Sleepy” describes the baby. “Sweetly” tells how the baby smiled.' }
      ] }
    ],
    versions: [
      [
        { id: 'D1101', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The baby giggled happily at the puppy.', tags: 'x n v adv x x n',
          why: 'How did the baby giggle? Happily.' },
        { id: 'D1102', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Yesterday Jamal mopped the floor.', tags: 'adv n v x n',
          why: 'When did Jamal mop the floor? Yesterday.' },
        { id: 'D1103', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['soon', 'bathtub', 'cloudy', 'yawned'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Soon” tells when.' },
        { id: 'D1104', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Kai shook the rug outside.', tags: 'n v x n adv',
          why: 'Where did Kai shake the rug? Outside.' },
        { id: 'D1105', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The cold wind howled loudly.', tags: 'x adj n v adv',
          choices: ['loudly', 'cold', 'wind', 'howled'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: 'How did the wind howl? Loudly.' },
        { id: 'D1106', type: 'sort', skill: 'How, when, or where', s: 'Mateo fed the fish today.', tags: 'n v x n adv', word: 'today', answer: 'when',
          why: '“Today” tells when Mateo fed the fish.' }
      ]
    ]
  },

  /* ── PRACTICE: one Remember card, then 10 questions (2 versions) ── */
  practice: {
    cards: [
      { title: 'Remember: Adverbs', blocks: [
        { p: 'An adverb describes a verb. An adverb tells how, when, or where.' },
        { p: 'How: slowly, gently, loudly. Many end in -ly.' },
        { p: 'When: today, soon, later.' },
        { p: 'Where: outside, upstairs, here.' },
        { sent: 'Maya sang softly today.', tags: 'n v adv adv', show: ['v', 'adv'], say: '“Softly” tells how Maya sang. “Today” tells when.' },
        { tip: 'Find the verb. Ask: How? When? Where?' }
      ] }
    ],
    versions: [
      [
        { id: 'D2101', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Mom slowly stirred the soup.', tags: 'n adv v x n',
          why: 'How did Mom stir the soup? Slowly.' },
        { id: 'D2102', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The thunder boomed nearby.', tags: 'x n v adv',
          why: 'Where did the thunder boom? Nearby.' },
        { id: 'D2103', type: 'sort', skill: 'How, when, or where', s: 'Ben made the bed neatly.', tags: 'n v x n adv', word: 'neatly', answer: 'how',
          why: '“Neatly” tells how Ben made the bed.' },
        { id: 'D2104', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['quietly', 'kitchen', 'rainy', 'sneezed'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Quietly” tells how.' },
        { id: 'D2105', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Priya always waters the plants carefully.', tags: 'n adv v x n adv',
          why: 'Both adverbs describe the verb “waters.”' },
        { id: 'D2106', type: 'name', skill: 'Name the part of speech', s: 'The sun shone brightly.', tags: 'x n v adv', word: 'brightly',
          why: 'How did the sun shine? Brightly.' },
        { id: 'D2107', type: 'sort', skill: 'How, when, or where', s: 'Omar dragged the boxes upstairs.', tags: 'n v x n adv', word: 'upstairs', answer: 'where',
          why: '“Upstairs” tells where Omar dragged the boxes.' },
        { id: 'D2108', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Leo parked the bike ___.',
          choices: ['outside', 'pencil', 'purple', 'yawned'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: 'Where did Leo park the bike? Outside.' },
        { id: 'D2109', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Today Leo cleaned the kitchen.', tags: 'adv n v x n',
          why: 'When did Leo clean the kitchen? Today.' },
        { id: 'D2110', type: 'name', skill: 'Name the part of speech', s: 'The fluffy kitten napped quietly.', tags: 'x adj n v adv', word: 'fluffy',
          why: 'The noun is “kitten”. What kind of kitten? Fluffy.' }
      ],
      [
        { id: 'D2201', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Dad quickly flipped the pancakes.', tags: 'n adv v x n',
          why: 'How did Dad flip the pancakes? Quickly.' },
        { id: 'D2202', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Sofia hurried inside.', tags: 'n v adv',
          why: 'Where did Sofia hurry? Inside.' },
        { id: 'D2203', type: 'sort', skill: 'How, when, or where', s: 'The snow melted yesterday.', tags: 'x n v adv', word: 'yesterday', answer: 'when',
          why: '“Yesterday” tells when the snow melted.' },
        { id: 'D2204', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The sleepy cat napped upstairs.', tags: 'x adj n v adv',
          choices: ['upstairs', 'sleepy', 'cat', 'napped'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: 'Where did the cat nap? Upstairs.' },
        { id: 'D2205', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Omar always packs a raincoat.', tags: 'n adv v x n',
          why: '“Always” describes the verb “packs.”' },
        { id: 'D2206', type: 'name', skill: 'Name the part of speech', s: 'The rain fell heavily.', tags: 'x n v adv', word: 'heavily',
          why: 'How did the rain fall? Heavily.' },
        { id: 'D2207', type: 'sort', skill: 'How, when, or where', s: 'Luis wiped the muddy boots outside.', tags: 'n v x adj n adv', word: 'outside', answer: 'where',
          why: '“Outside” tells where Luis wiped the boots.' },
        { id: 'D2208', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Mateo ___ shut the window.',
          choices: ['tightly', 'sofa', 'purple', 'giggled'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: 'How did Mateo shut the window? Tightly.' },
        { id: 'D2209', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Ana dusted the shelves today.', tags: 'n v x n adv',
          why: 'When did Ana dust the shelves? Today.' },
        { id: 'D2210', type: 'name', skill: 'Name the part of speech', s: 'Grace sipped the hot cocoa slowly.', tags: 'n v x adj n adv', word: 'sipped',
          why: '“Sipped” tells what Grace did.' }
      ]
    ]
  },

  /* ── REVIEW: one Remember card, then 10 questions (3 versions); 75% passes ── */
  review: {
    cards: [
      { title: 'Remember: Adverbs', blocks: [
        { p: 'An adverb describes a verb. An adverb tells how, when, or where.' },
        { p: 'How: quietly, neatly, happily. Many end in -ly.' },
        { p: 'When: yesterday, tomorrow, later.' },
        { p: 'Where: inside, downstairs, away.' },
        { sent: 'Leo read quietly upstairs.', tags: 'n v adv adv', show: ['v', 'adv'], say: '“Quietly” tells how Leo read. “Upstairs” tells where.' },
        { tip: 'Find the verb. Ask: How? When? Where?' }
      ] }
    ],
    versions: [
      [
        { id: 'D3101', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The wind blew the leaves away.', tags: 'x n v x n adv',
          why: 'Where did the wind blow the leaves? Away.' },
        { id: 'D3102', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['later', 'window', 'sunny', 'shivered'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Later” tells when.' },
        { id: 'D3103', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Today Zoe made breakfast.', tags: 'adv n v n',
          why: 'When did Zoe make breakfast? Today.' },
        { id: 'D3104', type: 'sort', skill: 'How, when, or where', s: 'The clouds drifted slowly.', tags: 'x n v adv', word: 'slowly', answer: 'how',
          why: '“Slowly” tells how the clouds drifted.' },
        { id: 'D3105', type: 'name', skill: 'Name the part of speech', s: 'Jamal played the piano downstairs.', tags: 'n v x n adv', word: 'downstairs',
          why: 'Where did Jamal play the piano? Downstairs.' },
        { id: 'D3106', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Nia gently hugged Grandpa.', tags: 'n adv v n',
          why: 'How did Nia hug Grandpa? Gently.' },
        { id: 'D3107', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The tiny stars twinkled brightly.', tags: 'x adj n v adv',
          choices: ['brightly', 'tiny', 'stars', 'twinkled'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: 'How did the stars twinkle? Brightly.' },
        { id: 'D3108', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Grandpa washed the windows ___.',
          choices: ['yesterday', 'garden', 'cloudy', 'sneezed'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: 'When did Grandpa wash the windows? Yesterday.' },
        { id: 'D3109', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Grandma arrives soon.', tags: 'n v adv',
          why: 'When does Grandma arrive? Soon.' },
        { id: 'D3110', type: 'name', skill: 'Name the part of speech', s: 'Ana wore a warm coat outside.', tags: 'n v x adj n adv', word: 'warm',
          why: 'The noun is “coat”. What kind of coat? Warm.' }
      ],
      [
        { id: 'D3201', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Rosa neatly set the table.', tags: 'n adv v x n',
          why: 'How did Rosa set the table? Neatly.' },
        { id: 'D3202', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The fog cleared later.', tags: 'x n v adv',
          why: 'When did the fog clear? Later.' },
        { id: 'D3203', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['calmly', 'teapot', 'windy', 'yawned'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Calmly” tells how.' },
        { id: 'D3204', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Yesterday Mateo shoveled the snow.', tags: 'adv n v x n',
          why: 'When did Mateo shovel the snow? Yesterday.' },
        { id: 'D3205', type: 'sort', skill: 'How, when, or where', s: 'Kai hid the presents upstairs.', tags: 'n v x n adv', word: 'upstairs', answer: 'where',
          why: '“Upstairs” tells where Kai hid the presents.' },
        { id: 'D3206', type: 'name', skill: 'Name the part of speech', s: 'Priya smiled proudly.', tags: 'n v adv', word: 'smiled',
          why: '“Smiled” tells what Priya did.' },
        { id: 'D3207', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Ben stacked the plates quietly.', tags: 'n v x n adv',
          why: 'How did Ben stack the plates? Quietly.' },
        { id: 'D3208', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The gray clouds rolled away.', tags: 'x adj n v adv',
          choices: ['away', 'gray', 'clouds', 'rolled'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: 'Where did the clouds roll? Away.' },
        { id: 'D3209', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Sofia planted the seeds ___.',
          choices: ['today', 'kitchen', 'rainy', 'giggled'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: 'When did Sofia plant the seeds? Today.' },
        { id: 'D3210', type: 'name', skill: 'Name the part of speech', s: 'Grandpa always reads the news.', tags: 'n adv v x n', word: 'always',
          why: '“Always” describes the verb “reads.”' }
      ],
      [
        { id: 'D3301', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Maya quickly buttoned the coat.', tags: 'n adv v x n',
          why: 'How did Maya button the coat? Quickly.' },
        { id: 'D3302', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Nia visited Grandpa yesterday.', tags: 'n v n adv',
          why: 'When did Nia visit Grandpa? Yesterday.' },
        { id: 'D3303', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['soon', 'mitten', 'sunny', 'sneezed'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Soon” tells when.' },
        { id: 'D3304', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The kittens played happily in the yard.', tags: 'x n v adv x x n',
          why: 'How did the kittens play? Happily.' },
        { id: 'D3305', type: 'sort', skill: 'How, when, or where', s: 'Leo fed the birds later.', tags: 'n v x n adv', word: 'later', answer: 'when',
          why: '“Later” tells when Leo fed the birds.' },
        { id: 'D3306', type: 'name', skill: 'Name the part of speech', s: 'The gentle breeze blew softly.', tags: 'x adj n v adv', word: 'gentle',
          why: 'The noun is “breeze”. What kind of breeze? Gentle.' },
        { id: 'D3307', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The white snowflakes fell everywhere.', tags: 'x adj n v adv',
          choices: ['everywhere', 'white', 'snowflakes', 'fell'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: 'Where did the snowflakes fall? Everywhere.' },
        { id: 'D3308', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Jamal ___ wiped the table.',
          choices: ['neatly', 'window', 'hungry', 'shouted'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: 'How did Jamal wipe the table? Neatly.' },
        { id: 'D3309', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Rosa put the lunchbox here.', tags: 'n v x n adv',
          why: 'Where did Rosa put the lunchbox? Here.' },
        { id: 'D3310', type: 'name', skill: 'Name the part of speech', s: 'The ducks splashed nearby.', tags: 'x n v adv', word: 'nearby',
          why: 'Where did the ducks splash? Nearby.' }
      ]
    ]
  }
};
