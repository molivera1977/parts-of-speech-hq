/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — ADVERBS (key adv, ids D…)
   Basics only: an adverb describes a verb; an adverb tells how, when, or where;
   many adverbs that tell how end in -ly. No comparing (faster / fastest).
   Theme: home routines, weather, and time of day.
   Format and rules: tools/CONTENT-SPEC.md · check: node tools/check-pos.js adv
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.adv = {

  /* ── LEARN: 6 cards, then a 6-question check ── */
  learn: {
    cards: [
      { title: 'An Adverb Describes a Verb', blocks: [
        { sent: 'The kitten yawned slowly.', tags: 'x n v adv', show: ['v', 'adv'], say: '“Slowly” describes the verb “yawned.”' },
        { sent: 'Dad snored loudly.', tags: 'n v adv', show: ['v', 'adv'], say: '“Loudly” describes the verb “snored.”' },
        { sent: 'Grandpa visited today.', tags: 'n v adv', show: ['v', 'adv'], say: '“Today” describes the verb “visited.”' },
        { sent: 'The kids played upstairs.', tags: 'x n v adv', show: ['v', 'adv'], say: '“Upstairs” describes the verb “played.”' },
        { term: 'adverb', means: 'a word that describes a verb', ex: 'Slowly and loudly are adverbs.' },
        { p: 'An adverb tells more about the action.' }
      ] },
      { title: 'Adverbs That Tell How', blocks: [
        { p: 'Some adverbs tell how. Ask: How did the action happen?' },
        { words: ['slowly', 'quickly', 'gently', 'loudly', 'carefully'], tag: 'adv' },
        { sent: 'Mom hummed softly.', tags: 'n v adv', show: 'adv', say: '“Softly” tells how Mom hummed.' },
        { sent: 'Leo washed the dishes quickly.', tags: 'n v x n adv', show: 'adv', say: '“Quickly” tells how Leo washed the dishes.' },
        { sent: 'Kai brushed the cat gently.', tags: 'n v x n adv', show: 'adv', say: '“Gently” tells how Kai brushed the cat.' },
        { tip: 'Many adverbs that tell how end in -ly.' }
      ] },
      { title: 'Adverbs That Tell When', blocks: [
        { p: 'Some adverbs tell when. Ask: When did the action happen?' },
        { words: ['today', 'yesterday', 'tomorrow', 'soon', 'later', 'always', 'never'], tag: 'adv' },
        { sent: 'Nia baked muffins yesterday.', tags: 'n v n adv', show: 'adv', say: '“Yesterday” tells when Nia baked muffins.' },
        { sent: 'Rosa never skips breakfast.', tags: 'n adv v n', show: 'adv', say: '“Never” tells when. Never means not one time.' },
        { sent: 'Sofia cleaned the room later.', tags: 'n v x n adv', show: 'adv', say: '“Later” tells when Sofia cleaned the room.' }
      ] },
      { title: 'Adverbs That Tell Where', blocks: [
        { p: 'Some adverbs tell where. Ask: Where did the action happen?' },
        { words: ['outside', 'inside', 'upstairs', 'downstairs', 'here', 'everywhere', 'nearby', 'away'], tag: 'adv' },
        { sent: 'Luis carried the laundry downstairs.', tags: 'n v x n adv', show: 'adv', say: '“Downstairs” tells where Luis carried the laundry.' },
        { sent: 'Grandma hung the towels outside.', tags: 'n v x n adv', show: 'adv', say: '“Outside” tells where Grandma hung the towels.' },
        { sent: 'The birds flew away.', tags: 'x n v adv', show: 'adv', say: '“Away” tells where the birds flew.' }
      ] },
      { title: 'Find the Adverb', blocks: [
        { rows: [['1', 'Find the verb.'], ['2', 'Ask: How? When? Where?'], ['3', 'The word that answers is the adverb.']] },
        { sent: 'Omar folded the shirts neatly.', tags: 'n v x n adv', show: ['v', 'adv'], say: 'How did Omar fold the shirts? “Neatly.”' },
        { sent: 'Zoe walked the dog today.', tags: 'n v x n adv', show: ['v', 'adv'], say: 'When did Zoe walk the dog? “Today.”' },
        { sent: 'Ben splashed outside.', tags: 'n v adv', show: ['v', 'adv'], say: 'Where did Ben splash? “Outside.”' }
      ] },
      { title: 'Adjective or Adverb?', blocks: [
        { p: 'An adjective describes a noun. An adverb describes a verb.' },
        { sent: 'Nia read in the quiet library.', tags: 'n v x x adj n', show: 'adj', say: '“Quiet” describes the noun “library.”' },
        { sent: 'Nia whispered quietly.', tags: 'n v adv', show: 'adv', say: '“Quietly” describes the verb “whispered.”' },
        { sent: 'The sleepy baby smiled sweetly.', tags: 'x adj n v adv', show: ['adj', 'adv'], say: '“Sleepy” describes the baby. “Sweetly” tells how the baby smiled.' },
        { good: 'The word “quietly” is an adverb.', why: '“Quietly” tells how Nia whispered.' },
        { bad: 'The word “quiet” is an adverb.', why: '“Quiet” describes the noun “library.” “Quiet” is an adjective.' }
      ] }
    ],
    versions: [
      [
        { id: 'D1101', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The baby giggled happily.', tags: 'x n v adv',
          why: '“Happily” tells how the baby giggled.' },
        { id: 'D1102', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Jamal mopped the floor yesterday.', tags: 'n v x n adv',
          why: '“Yesterday” tells when Jamal mopped the floor.' },
        { id: 'D1103', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['softly', 'bathtub', 'cloudy', 'yawned'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Softly” tells how. Many adverbs that tell how end in -ly.' },
        { id: 'D1104', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Kai shook the rug outside.', tags: 'n v x n adv',
          why: '“Outside” tells where Kai shook the rug.' },
        { id: 'D1105', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The cold wind howled loudly.', tags: 'x adj n v adv',
          choices: ['loudly', 'cold', 'wind', 'howled'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: '“Loudly” tells how the wind howled.' },
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
        { p: 'When: today, soon, never.' },
        { p: 'Where: outside, upstairs, here.' },
        { sent: 'Maya sang softly today.', tags: 'n v adv adv', show: ['v', 'adv'], say: '“Softly” tells how Maya sang. “Today” tells when.' },
        { tip: 'Find the verb. Ask: How? When? Where?' }
      ] }
    ],
    versions: [
      [
        { id: 'D2101', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Mom stirred the soup slowly.', tags: 'n v x n adv',
          why: '“Slowly” tells how Mom stirred the soup.' },
        { id: 'D2102', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The thunder boomed nearby.', tags: 'x n v adv',
          why: '“Nearby” tells where the thunder boomed.' },
        { id: 'D2103', type: 'sort', skill: 'How, when, or where', s: 'Ben made the bed neatly.', tags: 'n v x n adv', word: 'neatly', answer: 'how',
          why: '“Neatly” tells how Ben made the bed.' },
        { id: 'D2104', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['quietly', 'kitchen', 'rainy', 'sneezed'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Quietly” tells how. Many adverbs that tell how end in -ly.' },
        { id: 'D2105', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Priya always waters the plants carefully.', tags: 'n adv v x n adv',
          why: '“Always” tells when Priya waters the plants. “Carefully” tells how.' },
        { id: 'D2106', type: 'name', skill: 'Name the part of speech', s: 'The sun shone brightly.', tags: 'x n v adv', word: 'brightly',
          why: '“Brightly” tells how the sun shone. “Brightly” is an adverb.' },
        { id: 'D2107', type: 'sort', skill: 'How, when, or where', s: 'Omar dragged the boxes upstairs.', tags: 'n v x n adv', word: 'upstairs', answer: 'where',
          why: '“Upstairs” tells where Omar dragged the boxes.' },
        { id: 'D2108', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Grandma ___ tucked the baby into bed.',
          choices: ['gently', 'blanket', 'sleepy', 'yawned'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Gently” tells how Grandma tucked the baby in.' },
        { id: 'D2109', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Leo cleaned the kitchen yesterday.', tags: 'n v x n adv',
          why: '“Yesterday” tells when Leo cleaned the kitchen.' },
        { id: 'D2110', type: 'name', skill: 'Name the part of speech', s: 'The fluffy kitten napped quietly.', tags: 'x adj n v adv', word: 'fluffy',
          why: '“Fluffy” tells what kind of kitten. “Fluffy” is an adjective.' }
      ],
      [
        { id: 'D2201', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Dad flipped the pancakes quickly.', tags: 'n v x n adv',
          why: '“Quickly” tells how Dad flipped the pancakes.' },
        { id: 'D2202', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Sofia hurried inside.', tags: 'n v adv',
          why: '“Inside” tells where Sofia hurried.' },
        { id: 'D2203', type: 'sort', skill: 'How, when, or where', s: 'The snow melted yesterday.', tags: 'x n v adv', word: 'yesterday', answer: 'when',
          why: '“Yesterday” tells when the snow melted.' },
        { id: 'D2204', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The cozy cat purred softly.', tags: 'x adj n v adv',
          choices: ['softly', 'cozy', 'cat', 'purred'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: '“Softly” tells how the cat purred.' },
        { id: 'D2205', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Omar always packs a raincoat.', tags: 'n adv v x n',
          why: '“Always” tells when Omar packs a raincoat.' },
        { id: 'D2206', type: 'name', skill: 'Name the part of speech', s: 'The rain fell heavily.', tags: 'x n v adv', word: 'heavily',
          why: '“Heavily” tells how the rain fell. “Heavily” is an adverb.' },
        { id: 'D2207', type: 'sort', skill: 'How, when, or where', s: 'Luis wiped the muddy boots outside.', tags: 'n v x adj n adv', word: 'outside', answer: 'where',
          why: '“Outside” tells where Luis wiped the boots.' },
        { id: 'D2208', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Mateo ___ shut the window.',
          choices: ['tightly', 'sofa', 'purple', 'giggled'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Tightly” tells how Mateo shut the window.' },
        { id: 'D2209', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Ana dusted the shelves today.', tags: 'n v x n adv',
          why: '“Today” tells when Ana dusted the shelves.' },
        { id: 'D2210', type: 'name', skill: 'Name the part of speech', s: 'Grace sipped the hot cocoa slowly.', tags: 'n v x adj n adv', word: 'sipped',
          why: '“Sipped” shows an action. “Sipped” tells what Grace did.' }
      ]
    ]
  },

  /* ── REVIEW: one Remember card, then 10 questions (3 versions); 75% passes ── */
  review: {
    cards: [
      { title: 'Remember: Adverbs', blocks: [
        { p: 'An adverb describes a verb. An adverb tells how, when, or where.' },
        { p: 'How: quietly, neatly, happily. Many end in -ly.' },
        { p: 'When: yesterday, tomorrow, always.' },
        { p: 'Where: inside, downstairs, away.' },
        { sent: 'Leo read quietly upstairs.', tags: 'n v adv adv', show: ['v', 'adv'], say: '“Quietly” tells how Leo read. “Upstairs” tells where.' },
        { tip: 'Find the verb. Ask: How? When? Where?' }
      ] }
    ],
    versions: [
      [
        { id: 'D3101', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The wind blew the leaves away.', tags: 'x n v x n adv',
          why: '“Away” tells where the wind blew the leaves.' },
        { id: 'D3102', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['warmly', 'window', 'sunny', 'shivered'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Warmly” tells how. Many adverbs that tell how end in -ly.' },
        { id: 'D3103', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Zoe made breakfast today.', tags: 'n v n adv',
          why: '“Today” tells when Zoe made breakfast.' },
        { id: 'D3104', type: 'sort', skill: 'How, when, or where', s: 'The clouds drifted slowly.', tags: 'x n v adv', word: 'slowly', answer: 'how',
          why: '“Slowly” tells how the clouds drifted.' },
        { id: 'D3105', type: 'name', skill: 'Name the part of speech', s: 'Jamal played the piano downstairs.', tags: 'n v x n adv', word: 'downstairs',
          why: '“Downstairs” tells where Jamal played the piano. “Downstairs” is an adverb.' },
        { id: 'D3106', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Nia hugged Grandpa tightly.', tags: 'n v n adv',
          why: '“Tightly” tells how Nia hugged Grandpa.' },
        { id: 'D3107', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The tiny stars twinkled brightly.', tags: 'x adj n v adv',
          choices: ['brightly', 'tiny', 'stars', 'twinkled'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: '“Brightly” tells how the stars twinkled.' },
        { id: 'D3108', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Grandpa ___ swept the porch.',
          choices: ['happily', 'garden', 'cloudy', 'sneezed'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Happily” tells how Grandpa swept the porch.' },
        { id: 'D3109', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Grandma arrives soon.', tags: 'n v adv',
          why: '“Soon” tells when Grandma arrives.' },
        { id: 'D3110', type: 'name', skill: 'Name the part of speech', s: 'Ana wore a warm coat outside.', tags: 'n v x adj n adv', word: 'warm',
          why: '“Warm” tells what kind of coat. “Warm” is an adjective.' }
      ],
      [
        { id: 'D3201', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Rosa set the table neatly.', tags: 'n v x n adv',
          why: '“Neatly” tells how Rosa set the table.' },
        { id: 'D3202', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The fog cleared later.', tags: 'x n v adv',
          why: '“Later” tells when the fog cleared.' },
        { id: 'D3203', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['calmly', 'teapot', 'windy', 'yawned'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Calmly” tells how. Many adverbs that tell how end in -ly.' },
        { id: 'D3204', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Mateo shoveled the snow yesterday.', tags: 'n v x n adv',
          why: '“Yesterday” tells when Mateo shoveled the snow.' },
        { id: 'D3205', type: 'sort', skill: 'How, when, or where', s: 'Kai hid the presents upstairs.', tags: 'n v x n adv', word: 'upstairs', answer: 'where',
          why: '“Upstairs” tells where Kai hid the presents.' },
        { id: 'D3206', type: 'name', skill: 'Name the part of speech', s: 'Priya smiled proudly.', tags: 'n v adv', word: 'smiled',
          why: '“Smiled” shows an action. “Smiled” tells what Priya did.' },
        { id: 'D3207', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Ben stacked the plates quietly.', tags: 'n v x n adv',
          why: '“Quietly” tells how Ben stacked the plates.' },
        { id: 'D3208', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The gray clouds rolled away.', tags: 'x adj n v adv',
          choices: ['away', 'gray', 'clouds', 'rolled'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: '“Away” tells where the clouds rolled.' },
        { id: 'D3209', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Sofia ___ pulled the curtains.',
          choices: ['slowly', 'kitchen', 'rainy', 'giggled'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Slowly” tells how Sofia pulled the curtains.' },
        { id: 'D3210', type: 'name', skill: 'Name the part of speech', s: 'Grandpa always reads the news.', tags: 'n adv v x n', word: 'always',
          why: '“Always” tells when Grandpa reads the news. “Always” is an adverb.' }
      ],
      [
        { id: 'D3301', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Maya buttoned the coat quickly.', tags: 'n v x n adv',
          why: '“Quickly” tells how Maya buttoned the coat.' },
        { id: 'D3302', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Nia visits Grandma tomorrow.', tags: 'n v n adv',
          why: '“Tomorrow” tells when Nia visits Grandma.' },
        { id: 'D3303', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['loudly', 'mitten', 'sunny', 'sneezed'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Loudly” tells how. Many adverbs that tell how end in -ly.' },
        { id: 'D3304', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'The kittens napped inside.', tags: 'x n v adv',
          why: '“Inside” tells where the kittens napped.' },
        { id: 'D3305', type: 'sort', skill: 'How, when, or where', s: 'Leo always feeds the birds.', tags: 'n adv v x n', word: 'always', answer: 'when',
          why: '“Always” tells when Leo feeds the birds.' },
        { id: 'D3306', type: 'name', skill: 'Name the part of speech', s: 'The gentle breeze blew softly.', tags: 'x adj n v adv', word: 'gentle',
          why: '“Gentle” tells what kind of breeze. “Gentle” is an adjective.' },
        { id: 'D3307', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'The white snowflakes fell slowly.', tags: 'x adj n v adv',
          choices: ['slowly', 'white', 'snowflakes', 'fell'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: '“Slowly” tells how the snowflakes fell.' },
        { id: 'D3308', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'Jamal ___ wiped the table.',
          choices: ['neatly', 'window', 'hungry', 'shouted'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Neatly” tells how Jamal wiped the table.' },
        { id: 'D3309', type: 'tap', skill: 'Find the adverb', ask: 'adv', s: 'Rosa put the lunchbox here.', tags: 'n v x n adv',
          why: '“Here” tells where Rosa put the lunchbox.' },
        { id: 'D3310', type: 'name', skill: 'Name the part of speech', s: 'The ducks splashed nearby.', tags: 'x n v adv', word: 'nearby',
          why: '“Nearby” tells where the ducks splashed. “Nearby” is an adverb.' }
      ]
    ]
  }
};
