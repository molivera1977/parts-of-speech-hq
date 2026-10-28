/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — VERBS (key "verb", ids V…)
   Basics only (Marcos 10/27/2026): a verb shows an action; a verb tells what
   someone or something does. Action verbs only — no helping or linking verbs,
   no tense words. Theme: sports, games, the playground and the gym.
   10/27 critique pass: the main tip is the in-sentence test ("Who is the sentence
   about? What did that person or thing do?"); at least half the right words in
   every Practice/Review pick-a-word have no -ed (swam, ate, dug …), and some
   wrong choices end in -ed (bed, hundred), so the -ed ending alone never answers.
   Format and rules: tools/CONTENT-SPEC.md · check: node tools/check-pos.js verb
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.verb = {

  /* ── LEARN: 6 cards, then a 6-question check ── */
  learn: {
    cards: [
      { title: 'A Verb Shows an Action',
        blocks: [
          { term: 'verb', means: 'a word that shows an action' },
          { p: 'A verb tells what a person or thing does.' },
          { words: ['jump', 'run', 'write', 'eat', 'swim', 'clap'], tag: 'v' },
          { sent: 'The ball rolled down the hill.', tags: 'x n v x x n', show: 'v', say: 'A ball is a thing. A thing can do an action too.' }
        ] },
      { title: 'Ask: Can Someone Do This?',
        blocks: [
          { good: 'Can you clap? Yes!', why: 'Clap is an action. “Clap” is a verb.' },
          { bad: 'Can you pencil? No.', why: '“Pencil” is a noun. A pencil is a thing.' },
          { words: ['kick', 'throw', 'hop', 'catch', 'skip'], tag: 'v' },
          { p: 'Can you kick? Yes! Can you hop? Yes! Each word is an action.' },
          { tip: 'Ask: Can someone do this?' }
        ] },
      { title: 'Find the Verb in a Sentence',
        blocks: [
          { rows: [['1', 'Ask: Who is the sentence about?'], ['2', 'Ask: What did that person or thing do?'], ['3', 'That action word is the verb.']] },
          { sent: 'Jamal dribbled the ball.', tags: 'n v x n', show: ['n', 'v'], say: 'Who is the sentence about? Jamal. What did Jamal do? Jamal dribbled.' },
          { sent: 'Kai stomped in the puddle.', tags: 'n v x x n', show: ['n', 'v'], say: 'Who is the sentence about? Kai. What did Kai do? Kai stomped.' },
          { sent: 'Grace climbed the rope.', tags: 'n v x n', show: ['n', 'v'], say: 'What did Grace do? Grace climbed.' },
          { sent: 'The team cheered.', tags: 'x n v', show: ['n', 'v'], say: 'What did the team do? The team cheered.' }
        ] },
      { title: 'Verbs Can Look Different',
        blocks: [
          { words: ['jumped', 'kicked', 'ran', 'ate', 'swam', 'threw'], tag: 'v' },
          { p: 'Some verbs end in -ed, like jumped and kicked. Many verbs do not end in -ed.' },
          { sent: 'Sofia swam to the wall.', tags: 'n v x x n', show: 'v', say: 'What did Sofia do? Sofia swam.' },
          { sent: 'Rosa ate an orange after the game.', tags: 'n v x n x x n', show: 'v', say: 'What did Rosa do? Rosa ate.' },
          { tip: 'Do not look at the end of the word. Ask: What did that person or thing do?' }
        ] },
      { title: 'Verbs and Nouns Can End in -s',
        blocks: [
          { p: 'Some verbs end in -s, like jumps and hops. Some nouns end in -s too, like kids and balls.' },
          { sent: 'Ben skips across the gym.', tags: 'n v x x n', show: 'v', say: 'What does Ben do? Ben skips.' },
          { sent: 'Grace kicks the cones.', tags: 'n v x n', show: ['n', 'v'], say: '“Kicks” tells what Grace does. A cone is a thing.' },
          { tip: 'An -s at the end does not tell the job. Ask: What does that person or thing do?' }
        ] },
      { title: 'Noun or Verb?',
        blocks: [
          { p: 'A noun names a person, place, thing, or idea. A verb shows an action.' },
          { sent: 'Omar tossed the beanbag.', tags: 'n v x n', show: ['n', 'v'], say: 'Who is the sentence about? Omar. What did Omar do? Omar tossed.' },
          { good: 'The word “tossed” is a verb.', why: '“Tossed” tells what Omar did.' },
          { bad: 'The word “beanbag” is not a verb.', why: 'A beanbag is a thing. “Beanbag” is a noun.' },
          { tip: 'Ask: Who is the sentence about? What did that person or thing do?' }
        ] }
    ],
    versions: [
      [
        { id: 'V1101', type: 'tap', skill: 'Find the verb', s: 'Maya kicked the ball to Leo.', tags: 'n v x n x n', ask: 'v',
          why: 'What did Maya do? Maya kicked the ball.' },
        { id: 'V1102', type: 'tap', skill: 'Find the verb', s: 'The cat chases the birds.', tags: 'x n v x n', ask: 'v',
          why: '“Chases” and “birds” both end in -s. Only “chases” tells what the cat does.' },
        { id: 'V1103', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['ran', 'jacket', 'sleepy', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Ran” tells what someone did. Kai ran to the bus.' },
        { id: 'V1104', type: 'tap', skill: 'Find the verb', s: 'Leo swam across the pool.', tags: 'n v x x n', ask: 'v',
          why: 'What did Leo do? Leo swam.' },
        { id: 'V1105', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Nia threw the ball over the fence.', tags: 'n v x n x x n',
          choices: ['threw', 'ball', 'fence'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Nia do? Nia threw the ball.' },
        { id: 'V1106', type: 'yesno', skill: 'Verb or not', ask: 'v', word: 'giggled', tag: 'v', answer: 'yes',
          why: '“Giggled” tells what someone did. Ana giggled at the joke.' }
      ]
    ]
  },

  /* ── PRACTICE: 1 Remember card, then 10 questions × 2 versions ── */
  practice: {
    cards: [
      { title: 'Remember: Verbs',
        blocks: [
          { term: 'verb', means: 'a word that shows an action' },
          { p: 'A verb tells what a person or thing does.' },
          { words: ['jumped', 'kicked', 'threw', 'swam', 'ate', 'fell'], tag: 'v' },
          { tip: 'Ask: Who is the sentence about? What did that person or thing do?' }
        ] }
    ],
    versions: [
      [
        { id: 'V2101', type: 'tap', skill: 'Find the verb', s: 'Rosa bounces the ball on the court.', tags: 'n v x n x x n', ask: 'v',
          why: 'What does Rosa do? Rosa bounces the ball.' },
        { id: 'V2102', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['sang', 'sneaker', 'tiny', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Sang” tells what someone did. Zoe sang a song.' },
        { id: 'V2103', type: 'tap', skill: 'Find the verb', s: 'The class stretched on the mats.', tags: 'x n v x x n', ask: 'v',
          why: 'What did the class do? The class stretched.' },
        { id: 'V2104', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Grace ___ the ball into the hoop.',
          choices: ['tossed', 'locker', 'hundred', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Grace do? Grace tossed the ball.' },
        { id: 'V2105', type: 'name', skill: 'Noun or verb', s: 'Ben caught the ball with two hands.', tags: 'n v x n x adj n', word: 'caught',
          why: 'What did Ben do? Ben caught the ball.' },
        { id: 'V2106', type: 'tap', skill: 'Find the verb', s: 'Mateo crawled through the tunnel.', tags: 'n v x x n', ask: 'v',
          why: '“Crawled” tells what Mateo did.' },
        { id: 'V2107', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Priya scored a goal for the team.', tags: 'n v x n x x n',
          choices: ['scored', 'goal', 'team'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Priya do? Priya scored a goal.' },
        { id: 'V2108', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'The Tigers ___ the big game.',
          choices: ['won', 'pillow', 'hungry', 'proudly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did the Tigers do? The Tigers won the game.' },
        { id: 'V2109', type: 'yesno', skill: 'Verb or not', ask: 'v', word: 'trophy', tag: 'n', answer: 'no',
          why: 'A trophy is a thing you can win.' },
        { id: 'V2110', type: 'tap', skill: 'Find the verb', s: 'Zoe tagged Leo on the playground.', tags: 'n v n x x n', ask: 'v',
          why: 'What did Zoe do? Zoe tagged Leo.' }
      ],
      [
        { id: 'V2201', type: 'tap', skill: 'Find the verb', s: 'Luis rolled the ball to Ana.', tags: 'n v x n x n', ask: 'v',
          why: 'What did Luis do? Luis rolled the ball to Ana.' },
        { id: 'V2202', type: 'tap', skill: 'Find the verb', s: 'The kids raced to the gate.', tags: 'x n v x x n', ask: 'v',
          why: 'What did the kids do? The kids raced.' },
        { id: 'V2203', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['climbed', 'bed', 'hungry', 'quietly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Climbed” tells what someone did. Kai climbed the slide.' },
        { id: 'V2204', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Jamal ___ a hole in the sand.',
          choices: ['dug', 'muffin', 'fuzzy', 'slowly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Jamal do? Jamal dug a hole.' },
        { id: 'V2205', type: 'tap', skill: 'Find the verb', s: 'Sofia hugged Grace after the game.', tags: 'n v n x x n', ask: 'v',
          why: '“Hugged” tells what Sofia did.' },
        { id: 'V2206', type: 'name', skill: 'Noun or verb', s: 'Ana climbed the wall at the gym.', tags: 'n v x n x x n', word: 'gym',
          why: 'A gym is a place. “Climbed” tells what Ana did.' },
        { id: 'V2207', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Leo grabbed a helmet from the bench.', tags: 'n v x n x x n',
          choices: ['grabbed', 'helmet', 'bench'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Leo do? Leo grabbed a helmet.' },
        { id: 'V2208', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Nia ___ the rope with both hands.',
          choices: ['swung', 'carrot', 'proud', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Nia do? Nia swung the rope.' },
        { id: 'V2209', type: 'yesno', skill: 'Verb or not', ask: 'v', s: 'Ivy splashed in the pool.', tags: 'n v x x n', word: 'splashed', tag: 'v', answer: 'yes',
          why: 'What did Ivy do? Ivy splashed.' },
        { id: 'V2210', type: 'tap', skill: 'Find the verb', s: 'Mateo ran to the base and slid.', tags: 'n v x x n x v', ask: 'v',
          why: 'What did Mateo do? Mateo ran and slid.' }
      ]
    ]
  },

  /* ── REVIEW: 1 Remember card, then 10 questions × 3 versions (75% passes) ── */
  review: {
    cards: [
      { title: 'Remember: Verbs',
        blocks: [
          { term: 'verb', means: 'a word that shows an action' },
          { p: 'A verb tells what a person or thing does.' },
          { words: ['swam', 'dug', 'hugged', 'slid', 'wrote'], tag: 'v' },
          { sent: 'Priya tossed the ball to Kai.', tags: 'n v x n x n', show: ['n', 'v'], say: 'Who is the sentence about? Priya. What did Priya do? Priya tossed.' },
          { tip: 'Ask: Who is the sentence about? What did that person or thing do?' }
        ] }
    ],
    versions: [
      [
        { id: 'V3101', type: 'tap', skill: 'Find the verb', s: 'Grace jumped over the cone.', tags: 'n v x x n', ask: 'v',
          why: 'What did Grace do? Grace jumped.' },
        { id: 'V3102', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['ate', 'mitten', 'green', 'soon'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Ate” tells what someone did. Omar ate a pear.' },
        { id: 'V3103', type: 'tap', skill: 'Find the verb', s: 'The team ran around the field.', tags: 'x n v x x n', ask: 'v',
          why: 'What did the team do? The team ran.' },
        { id: 'V3104', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Kai ___ the ball over the net.',
          choices: ['hit', 'banana', 'shiny', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Kai do? Kai hit the ball.' },
        { id: 'V3105', type: 'name', skill: 'Noun or verb', s: 'Ella spun the hoop.', tags: 'n v x n', word: 'spun',
          why: 'What did Ella do? Ella spun the hoop.' },
        { id: 'V3106', type: 'tap', skill: 'Find the verb', s: 'Luis and Omar jogged across the gym.', tags: 'n x n v x x n', ask: 'v',
          why: 'What did Luis and Omar do? Luis and Omar jogged.' },
        { id: 'V3107', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Zoe blocked the ball at the goal.', tags: 'n v x n x x n',
          choices: ['blocked', 'ball', 'goal'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Zoe do? Zoe blocked the ball.' },
        { id: 'V3108', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Rosa ___ up the rope.',
          choices: ['climbed', 'bed', 'tiny', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Rosa do? Rosa climbed the rope.' },
        { id: 'V3109', type: 'name', skill: 'Noun or verb', s: 'Leo carried the ball to the playground.', tags: 'n v x n x x n', word: 'playground',
          why: 'A playground is a place. “Carried” tells what Leo did.' },
        { id: 'V3110', type: 'tap', skill: 'Find the verb', s: 'Nia hopped and skipped on the grass.', tags: 'n v x v x x n', ask: 'v',
          why: 'What did Nia do? Nia hopped and skipped.' }
      ],
      [
        { id: 'V3201', type: 'tap', skill: 'Find the verb', s: 'Owen threw the ball at the hoop.', tags: 'n v x n x x n', ask: 'v',
          why: 'What did Owen do? Owen threw the ball.' },
        { id: 'V3202', type: 'tap', skill: 'Find the verb', s: 'The girls laughed after recess.', tags: 'x n v x n', ask: 'v',
          why: 'What did the girls do? The girls laughed.' },
        { id: 'V3203', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['rode', 'teacher', 'sunny', 'often'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Rode” tells what someone did. Mateo rode a bike.' },
        { id: 'V3204', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Ben ___ the ball across the field.',
          choices: ['kicked', 'bed', 'happy', 'sadly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Ben do? Ben kicked the ball.' },
        { id: 'V3205', type: 'name', skill: 'Noun or verb', s: 'Jade bounced on the trampoline.', tags: 'n v x x n', word: 'trampoline',
          why: 'A trampoline is a thing. “Bounced” tells what Jade did.' },
        { id: 'V3206', type: 'tap', skill: 'Find the verb', s: 'Amir waved a flag for the team.', tags: 'n v x n x x n', ask: 'v',
          why: '“Waved” tells what Amir did.' },
        { id: 'V3207', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Tess chased Sam around the gym.', tags: 'n v n x x n',
          choices: ['chased', 'Sam', 'gym'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Tess do? Tess chased Sam.' },
        { id: 'V3208', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Priya ___ a fort with pillows.',
          choices: ['built', 'window', 'golden', 'safely'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Priya do? Priya built a fort.' },
        { id: 'V3209', type: 'name', skill: 'Noun or verb', s: 'The band marched onto the field.', tags: 'x n v x x n', word: 'marched',
          why: 'What did the band do? The band marched.' },
        { id: 'V3210', type: 'tap', skill: 'Find the verb', s: 'Kai caught the ball and ran.', tags: 'n v x n x v', ask: 'v',
          why: 'What did Kai do? Kai caught the ball and ran.' }
      ],
      [
        { id: 'V3301', type: 'tap', skill: 'Find the verb', s: 'Noah balanced on the beam.', tags: 'n v x x n', ask: 'v',
          why: 'What did Noah do? Noah balanced.' },
        { id: 'V3302', type: 'tap', skill: 'Find the verb', s: 'The boys tumbled on the mat.', tags: 'x n v x x n', ask: 'v',
          why: 'What did the boys do? The boys tumbled.' },
        { id: 'V3303', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['flew', 'basket', 'fluffy', 'loudly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Flew” tells what something did. The kite flew over the park.' },
        { id: 'V3304', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Max ___ the ball down the court.',
          choices: ['dribbled', 'eyebrow', 'hundred', 'neatly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Max do? Max dribbled the ball.' },
        { id: 'V3305', type: 'name', skill: 'Noun or verb', s: 'Eli ran to the bench.', tags: 'n v x x n', word: 'bench',
          why: 'A bench is a thing. “Ran” tells what Eli did.' },
        { id: 'V3306', type: 'tap', skill: 'Find the verb', s: 'Hana pushes the cart to the gym.', tags: 'n v x n x x n', ask: 'v',
          why: 'What does Hana do? Hana pushes the cart.' },
        { id: 'V3307', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Mia threw the ball to Ben.', tags: 'n v x n x n',
          choices: ['threw', 'ball', 'Ben'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Mia do? Mia threw the ball.' },
        { id: 'V3308', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'The crowd ___ a song for the team.',
          choices: ['sang', 'lunchbox', 'noisy', 'happily'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did the crowd do? The crowd sang a song.' },
        { id: 'V3309', type: 'name', skill: 'Noun or verb', s: 'Dev skated around the rink.', tags: 'n v x x n', word: 'skated',
          why: 'What did Dev do? Dev skated.' },
        { id: 'V3310', type: 'tap', skill: 'Find the verb', s: 'Ella clapped and cheered at the game.', tags: 'n v x v x x n', ask: 'v',
          why: 'What did Ella do? Ella clapped and cheered.' }
      ]
    ]
  }
};
