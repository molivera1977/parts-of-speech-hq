/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — VERBS (key "verb", ids V…)
   Basics only (Marcos 10/27/2026): a verb shows an action; a verb tells what
   someone or something does. Action verbs only — no helping or linking verbs,
   no tense words. Theme: sports, games, the playground and the gym.
   10/27 critique pass: the main tip is the in-sentence test ("Who is the sentence
   about? What did that person or thing do?"); at least half the right words in
   every Practice/Review pick-a-word have no -ed (swam, ate, dug …), and some
   wrong choices end in -ed (bed, hundred), so the -ed ending alone never answers.
   10/28 listen-through fixes: endings are said "the letters e, d" / "the letter s" (no
   hyphen), every card sentence names its verb, tips say "Ask yourself:", the Action
   Test bridges a past word ("kicked" → kick), the s card shows "kicks" vs "cones".
   Format and rules: tools/CONTENT-SPEC.md · check: node tools/check-pos.js verb
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.verb = {

  /* ── LEARN: 6 cards, then a 6-question check ── */
  learn: {
    cards: [
      { title: 'Meet the Verb',
        blocks: [
          { term: 'verb', means: 'a word that shows an action' },
          { p: 'A verb tells what a person or thing does.' },
          { words: ['jump', 'run', 'write', 'eat', 'swim', 'clap'], tag: 'v' },
          { sent: 'The ball rolled down the hill.', tags: 'x n v x x n', show: 'v', say: '“Rolled” is the verb. A ball is a thing. A thing can do an action too.' }
        ] },
      { title: 'The Action Test',
        blocks: [
          { good: 'Can you clap? Yes!', why: 'Clap is an action. “Clap” is a verb.' },
          { bad: 'Can you kitchen? No.', why: '“Kitchen” is a noun. A kitchen is a place.' },
          { words: ['kick', 'throw', 'hop', 'catch', 'skip'], tag: 'v' },
          { p: 'Can you throw? Yes! Can you hop? Yes! Each word is an action.' },
          { p: '“Kicked” comes from “kick.” Can you kick? Yes! So “kicked” is a verb.' },
          { tip: 'Ask yourself: Can someone do this?' }
        ] },
      { title: 'Find the Verb in a Sentence',
        blocks: [
          { rows: [['1', 'Ask yourself: Who is the sentence about?'], ['2', 'Ask yourself: What did that person or thing do?'], ['3', 'That action word is the verb.']] },
          { sent: 'Jamal dribbled the ball.', tags: 'n v x n', show: ['n', 'v'], say: 'Who is the sentence about? Jamal. What did Jamal do? Jamal dribbled. “Dribbled” is the verb.' },
          { sent: 'Grace climbed the rope.', tags: 'n v x n', show: ['n', 'v'], say: 'What did Grace do? Grace climbed. “Climbed” is the verb.' }
        ] },
      { title: 'Verbs Can Look Different',
        blocks: [
          { words: ['jumped', 'kicked', 'ran', 'ate', 'swam', 'threw'], tag: 'v' },
          { p: '“Jumped” and “kicked” end in the letters e, d. Many verbs do not end in e, d.' },
          { sent: 'Sofia swam to the wall.', tags: 'n v x x n', show: 'v', say: 'What did Sofia do? Sofia swam. “Swam” is the verb.' },
          { sent: 'Rosa ate an orange after the game.', tags: 'n v x n x x n', show: 'v', say: 'What did Rosa do? Rosa ate. “Ate” is the verb.' },
          { tip: 'The end of a word can trick you. Ask yourself: What did that person or thing do?' }
        ] },
      { title: 'Watch Out for S at the End',
        blocks: [
          { p: 'Some verbs end in the letter s. Some nouns do too.' },
          { sent: 'Ben skips across the gym.', tags: 'n v x x n', show: 'v', say: 'What does Ben do? Ben skips. “Skips” is the verb.' },
          { sent: 'Grace kicks the cones.', tags: 'n v x n', show: ['n', 'v'], say: '“Kicks” and “cones” both end in s. “Kicks” is the verb. “Cones” is a noun.' },
          { tip: 'An s at the end can trick you. Ask yourself: What does the person or thing do?' }
        ] },
      { title: 'Noun or Verb?',
        blocks: [
          { p: 'A noun names a person, place, thing, or idea. A verb shows an action.' },
          { sent: 'Omar tossed the beanbag.', tags: 'n v x n', show: ['n', 'v'], say: 'Who is the sentence about? Omar. What did Omar do? Omar tossed.' },
          { good: 'The word “tossed” is a verb.', why: '“Tossed” is the action in the sentence.' },
          { bad: 'The word “beanbag” is not a verb.', why: 'A beanbag is a thing. “Beanbag” is a noun.' }
        ] }
    ],
    versions: [
      [
        { id: 'V1101', type: 'tap', skill: 'Find the verb', s: 'Maya kicked the ball to Leo.', tags: 'n v x n x n', ask: 'v',
          why: 'What did Maya do? Maya kicked. “Kicked” is the verb.' },
        { id: 'V1102', type: 'tap', skill: 'Find the verb', s: 'The cat chases the birds.', tags: 'x n v x n', ask: 'v',
          why: 'What does the cat do? The cat chases. “Chases” is the verb.' },
        { id: 'V1103', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['ran', 'jacket', 'sleepy', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Ran” tells what someone did. “Ran” is the verb.' },
        { id: 'V1104', type: 'tap', skill: 'Find the verb', s: 'Leo swam across the pool.', tags: 'n v x x n', ask: 'v',
          why: 'What did Leo do? Leo swam. “Swam” is the verb.' },
        { id: 'V1105', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Nia threw the ball over the fence.', tags: 'n v x n x x n',
          choices: ['threw', 'ball', 'fence'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Nia do? Nia threw. “Threw” is the verb.' },
        { id: 'V1106', type: 'yesno', skill: 'Verb or not', ask: 'v', word: 'giggled', tag: 'v', answer: 'yes',
          why: '“Giggled” comes from “giggle.” Can you giggle? Yes! Ana giggled at the joke.' }
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
          { tip: 'Ask yourself: Who is the sentence about? What did that person or thing do?' }
        ] }
    ],
    versions: [
      [
        { id: 'V2101', type: 'tap', skill: 'Find the verb', s: 'Rosa bounces the ball on the court.', tags: 'n v x n x x n', ask: 'v',
          why: 'What does Rosa do? Rosa bounces. “Bounces” is the verb.' },
        { id: 'V2102', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['sang', 'sneaker', 'tiny', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Sang” tells what someone did. “Sang” is the verb.' },
        { id: 'V2103', type: 'tap', skill: 'Find the verb', s: 'The class stretched on the mats.', tags: 'x n v x x n', ask: 'v',
          why: 'What did the class do? The class stretched. “Stretched” is the verb.' },
        { id: 'V2104', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Grace ___ the ball into the hoop.',
          choices: ['tossed', 'locker', 'hundred', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Grace do? Grace tossed. “Tossed” is the verb.' },
        { id: 'V2105', type: 'name', skill: 'Noun or verb', s: 'Ben caught the ball with two hands.', tags: 'n v x n x adj n', word: 'caught',
          why: 'What did Ben do? Ben caught the ball.' },
        { id: 'V2106', type: 'tap', skill: 'Find the verb', s: 'Mateo crawled through the tunnel.', tags: 'n v x x n', ask: 'v',
          why: 'What did Mateo do? Mateo crawled. “Crawled” is the verb.' },
        { id: 'V2107', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Priya scored a goal for the team.', tags: 'n v x n x x n',
          choices: ['scored', 'goal', 'team'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Priya do? Priya scored. “Scored” is the verb.' },
        { id: 'V2108', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'The Tigers ___ the big game.',
          choices: ['won', 'pillow', 'hungry', 'proudly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did the Tigers do? The Tigers won. “Won” is the verb.' },
        { id: 'V2109', type: 'yesno', skill: 'Verb or not', ask: 'v', word: 'trophy', tag: 'n', answer: 'no',
          why: 'A trophy is a thing you can win.' },
        { id: 'V2110', type: 'tap', skill: 'Find the verb', s: 'Zoe tagged Leo on the playground.', tags: 'n v n x x n', ask: 'v',
          why: 'What did Zoe do? Zoe tagged. “Tagged” is the verb.' }
      ],
      [
        { id: 'V2201', type: 'tap', skill: 'Find the verb', s: 'Luis rolled the ball to Ana.', tags: 'n v x n x n', ask: 'v',
          why: 'What did Luis do? Luis rolled. “Rolled” is the verb.' },
        { id: 'V2202', type: 'tap', skill: 'Find the verb', s: 'The kids raced to the gate.', tags: 'x n v x x n', ask: 'v',
          why: 'What did the kids do? The kids raced. “Raced” is the verb.' },
        { id: 'V2203', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['climbed', 'sofa', 'hungry', 'quietly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Climbed” tells what someone did. “Climbed” is the verb.' },
        { id: 'V2204', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Jamal ___ a hole in the sand.',
          choices: ['dug', 'muffin', 'fuzzy', 'slowly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Jamal do? Jamal dug. “Dug” is the verb.' },
        { id: 'V2205', type: 'tap', skill: 'Find the verb', s: 'Sofia hugged Grace after the game.', tags: 'n v n x x n', ask: 'v',
          why: 'What did Sofia do? Sofia hugged. “Hugged” is the verb.' },
        { id: 'V2206', type: 'name', skill: 'Noun or verb', s: 'Ana climbed the wall at the gym.', tags: 'n v x n x x n', word: 'gym',
          why: 'A gym is a place. “Climbed” tells what Ana did.' },
        { id: 'V2207', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Leo grabbed a helmet from the bench.', tags: 'n v x n x x n',
          choices: ['grabbed', 'helmet', 'bench'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Leo do? Leo grabbed. “Grabbed” is the verb.' },
        { id: 'V2208', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Nia ___ the rope with both hands.',
          choices: ['swung', 'carrot', 'proud', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Nia do? Nia swung. “Swung” is the verb.' },
        { id: 'V2209', type: 'yesno', skill: 'Verb or not', ask: 'v', s: 'Ivy splashed in the pool.', tags: 'n v x x n', word: 'splashed', tag: 'v', answer: 'yes',
          why: 'What did Ivy do? Ivy splashed.' },
        { id: 'V2210', type: 'tap', skill: 'Find the verb', s: 'Mateo ran to the base and slid.', tags: 'n v x x n x v', ask: 'v',
          why: 'What did Mateo do? Mateo ran and slid. “Ran” and “slid” are verbs.' }
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
          { tip: 'Ask yourself: Who is the sentence about? What did that person or thing do?' },
          { sent: 'Priya tossed the ball to Kai.', tags: 'n v x n x n', show: ['n', 'v'], say: 'Who is the sentence about? Priya. What did Priya do? Priya tossed. “Tossed” is the verb.' }
        ] }
    ],
    versions: [
      [
        { id: 'V3101', type: 'tap', skill: 'Find the verb', s: 'Grace jumped over the cone.', tags: 'n v x x n', ask: 'v',
          why: 'What did Grace do? Grace jumped. “Jumped” is the verb.' },
        { id: 'V3102', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['ate', 'mitten', 'green', 'soon'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Ate” tells what someone did. “Ate” is the verb.' },
        { id: 'V3103', type: 'tap', skill: 'Find the verb', s: 'The team ran around the field.', tags: 'x n v x x n', ask: 'v',
          why: 'What did the team do? The team ran. “Ran” is the verb.' },
        { id: 'V3104', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Kai ___ the ball over the net.',
          choices: ['hit', 'banana', 'shiny', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Kai do? Kai hit the ball. “Hit” is the verb.' },
        { id: 'V3105', type: 'name', skill: 'Noun or verb', s: 'Ella spun the hoop.', tags: 'n v x n', word: 'spun',
          why: 'What did Ella do? Ella spun the hoop.' },
        { id: 'V3106', type: 'tap', skill: 'Find the verb', s: 'Luis and Omar jogged across the gym.', tags: 'n x n v x x n', ask: 'v',
          why: 'What did Luis and Omar do? Luis and Omar jogged. “Jogged” is the verb.' },
        { id: 'V3107', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Zoe blocked the ball at the goal.', tags: 'n v x n x x n',
          choices: ['blocked', 'ball', 'goal'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Zoe do? Zoe blocked. “Blocked” is the verb.' },
        { id: 'V3108', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Rosa ___ up the rope.',
          choices: ['climbed', 'bed', 'tiny', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Rosa do? Rosa climbed. “Climbed” is the verb.' },
        { id: 'V3109', type: 'name', skill: 'Noun or verb', s: 'Leo carried the ball to the playground.', tags: 'n v x n x x n', word: 'playground',
          why: 'A playground is a place. “Carried” tells what Leo did.' },
        { id: 'V3110', type: 'tap', skill: 'Find the verb', s: 'Nia hopped and skipped on the grass.', tags: 'n v x v x x n', ask: 'v',
          why: 'What did Nia do? Nia hopped and skipped. “Hopped” and “skipped” are verbs.' }
      ],
      [
        { id: 'V3201', type: 'tap', skill: 'Find the verb', s: 'Owen threw the ball at the hoop.', tags: 'n v x n x x n', ask: 'v',
          why: 'What did Owen do? Owen threw. “Threw” is the verb.' },
        { id: 'V3202', type: 'tap', skill: 'Find the verb', s: 'The girls laughed after recess.', tags: 'x n v x n', ask: 'v',
          why: 'What did the girls do? The girls laughed. “Laughed” is the verb.' },
        { id: 'V3203', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['rode', 'teacher', 'sunny', 'often'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Rode” tells what someone did. “Rode” is the verb.' },
        { id: 'V3204', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Ben ___ the ball across the field.',
          choices: ['kicked', 'bed', 'happy', 'sadly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Ben do? Ben kicked. “Kicked” is the verb.' },
        { id: 'V3205', type: 'name', skill: 'Noun or verb', s: 'Jade bounced on the trampoline.', tags: 'n v x x n', word: 'trampoline',
          why: 'A trampoline is a thing. “Bounced” tells what Jade did.' },
        { id: 'V3206', type: 'tap', skill: 'Find the verb', s: 'Amir waved a flag for the team.', tags: 'n v x n x x n', ask: 'v',
          why: 'What did Amir do? Amir waved. “Waved” is the verb.' },
        { id: 'V3207', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Tess chased Sam around the gym.', tags: 'n v n x x n',
          choices: ['chased', 'Sam', 'gym'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Tess do? Tess chased. “Chased” is the verb.' },
        { id: 'V3208', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Priya ___ a fort with pillows.',
          choices: ['built', 'window', 'golden', 'safely'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Priya do? Priya built a fort. “Built” is the verb.' },
        { id: 'V3209', type: 'name', skill: 'Noun or verb', s: 'The band marched onto the field.', tags: 'x n v x x n', word: 'marched',
          why: 'What did the band do? The band marched.' },
        { id: 'V3210', type: 'tap', skill: 'Find the verb', s: 'Kai caught the ball and ran.', tags: 'n v x n x v', ask: 'v',
          why: 'What did Kai do? Kai caught and ran. “Caught” and “ran” are verbs.' }
      ],
      [
        { id: 'V3301', type: 'tap', skill: 'Find the verb', s: 'Noah balanced on the beam.', tags: 'n v x x n', ask: 'v',
          why: 'What did Noah do? Noah balanced. “Balanced” is the verb.' },
        { id: 'V3302', type: 'tap', skill: 'Find the verb', s: 'The boys tumbled on the mat.', tags: 'x n v x x n', ask: 'v',
          why: 'What did the boys do? The boys tumbled. “Tumbled” is the verb.' },
        { id: 'V3303', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['flew', 'basket', 'fluffy', 'loudly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: '“Flew” tells what something did. “Flew” is the verb.' },
        { id: 'V3304', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Max ___ the ball down the court.',
          choices: ['dribbled', 'eyebrow', 'hundred', 'neatly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did Max do? Max dribbled. “Dribbled” is the verb.' },
        { id: 'V3305', type: 'name', skill: 'Noun or verb', s: 'Eli ran to the bench.', tags: 'n v x x n', word: 'bench',
          why: 'A bench is a thing. “Ran” tells what Eli did.' },
        { id: 'V3306', type: 'tap', skill: 'Find the verb', s: 'Hana pushes the cart to the gym.', tags: 'n v x n x x n', ask: 'v',
          why: 'What does Hana do? Hana pushes. “Pushes” is the verb.' },
        { id: 'V3307', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Mia threw the ball to Ben.', tags: 'n v x n x n',
          choices: ['threw', 'ball', 'Ben'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Mia do? Mia threw. “Threw” is the verb.' },
        { id: 'V3308', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'The crowd ___ a song for the team.',
          choices: ['sang', 'lunchbox', 'noisy', 'happily'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'What did the crowd do? The crowd sang. “Sang” is the verb.' },
        { id: 'V3309', type: 'name', skill: 'Noun or verb', s: 'Dev skated around the rink.', tags: 'n v x x n', word: 'skated',
          why: 'What did Dev do? Dev skated.' },
        { id: 'V3310', type: 'tap', skill: 'Find the verb', s: 'Ella clapped and cheered at the game.', tags: 'n v x v x x n', ask: 'v',
          why: 'What did Ella do? Ella clapped and cheered. “Clapped” and “cheered” are verbs.' }
      ]
    ]
  }
};
