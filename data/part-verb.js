/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — VERBS (key "verb", ids V…)
   Basics only (Marcos 10/27/2026): a verb shows an action; a verb tells what
   someone or something does. Action verbs only — no helping or linking verbs,
   no tense words. Theme: sports, games, the playground and the gym.
   Format and rules: tools/CONTENT-SPEC.md · check: node tools/check-pos.js verb
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.verb = {

  /* ── LEARN: 5 cards, then a 6-question check ── */
  learn: {
    cards: [
      { title: 'A Verb Shows an Action',
        blocks: [
          { term: 'verb', means: 'a word that shows an action', ex: 'Jump, run, and clap are verbs.' },
          { p: 'A verb tells what someone does. A verb tells what something does.' },
          { words: ['jump', 'run', 'write', 'eat', 'swim', 'clap'], tag: 'v' },
          { p: 'You can jump. You can run. You can write, eat, swim, and clap!' }
        ] },
      { title: 'Ask: Can Someone Do This?',
        blocks: [
          { good: 'Can you clap? Yes!', why: 'Clap is an action. “Clap” is a verb.' },
          { bad: 'Can you pencil? No.', why: '“Pencil” is a noun. A pencil is a thing.' },
          { words: ['kick', 'throw', 'hop', 'catch', 'skip'], tag: 'v' },
          { p: 'Can you kick? Can you hop? Yes! Kick, throw, hop, catch, and skip are actions.' },
          { tip: 'Ask: Can someone do this?' }
        ] },
      { title: 'Find the Verb in a Sentence',
        blocks: [
          { rows: [['1', 'Find the noun.'], ['2', 'Ask: What did the noun do?'], ['3', 'That action word is the verb.']] },
          { sent: 'Jamal dribbled the ball.', tags: 'n v x n', show: ['n', 'v'], say: 'What did Jamal do? Jamal dribbled.' },
          { sent: 'Grace climbed the rope.', tags: 'n v x n', show: ['n', 'v'], say: 'What did Grace do? Grace climbed.' },
          { sent: 'The team cheered.', tags: 'x n v', show: ['n', 'v'], say: 'What did the team do? The team cheered.' },
          { sent: 'Kai stomped in the puddle.', tags: 'n v x x n', show: ['n', 'v'], say: 'What did Kai do? Kai stomped.' }
        ] },
      { title: 'Verbs Can Look Different',
        blocks: [
          { words: ['jumped', 'kicked', 'ran', 'ate', 'swam', 'threw'], tag: 'v' },
          { p: 'Some verbs end in -ed, like jumped and kicked. Some verbs end in -s, like jumps and kicks. Nouns can end in -s too, like kids and balls. So ask: Does the word show an action?' },
          { p: 'Ran, ate, swam, and threw show an action too. Each one is a verb.' },
          { sent: 'Sofia swam to the wall.', tags: 'n v x x n', show: 'v' },
          { sent: 'Ben skips across the gym.', tags: 'n v x x n', show: 'v' },
          { sent: 'Rosa ate an orange after the game.', tags: 'n v x n x x n', show: 'v' }
        ] },
      { title: 'Noun or Verb?',
        blocks: [
          { p: 'A noun names a person, place, thing, or idea. A verb shows an action.' },
          { sent: 'Omar tossed the beanbag.', tags: 'n v x n', show: ['n', 'v'], say: 'What did Omar do? Omar tossed the beanbag.' },
          { good: 'The word “tossed” is a verb.', why: 'Can you toss? Yes! “Tossed” tells what Omar did.' },
          { bad: 'The word “beanbag” is not a verb.', why: 'Can you beanbag? No. A beanbag is a thing, so “beanbag” is a noun.' }
        ] }
    ],
    versions: [
      [
        { id: 'V1101', type: 'tap', skill: 'Find the verb', s: 'Maya kicked the ball to Leo.', tags: 'n v x n x n', ask: 'v',
          why: '“Kicked” tells what Maya did. Maya kicked the ball.' },
        { id: 'V1102', type: 'tap', skill: 'Find the verb', s: 'The parents clapped for the team.', tags: 'x n v x x n', ask: 'v',
          why: '“Clapped” tells what the parents did.' },
        { id: 'V1103', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['jumped', 'jacket', 'sleepy', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Can you jump? Yes! “Jumped” shows an action.' },
        { id: 'V1104', type: 'tap', skill: 'Find the verb', s: 'Leo swam across the pool.', tags: 'n v x x n', ask: 'v',
          why: '“Swam” tells what Leo did. Swam is an action.' },
        { id: 'V1105', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Nia threw the ball over the fence.', tags: 'n v x n x x n',
          choices: ['threw', 'ball', 'fence'], choiceTags: ['v', 'n', 'n'],
          why: '“Threw” tells what Nia did. Nia threw the ball.' },
        { id: 'V1106', type: 'yesno', skill: 'Verb or not', ask: 'v', word: 'giggled', tag: 'v', answer: 'yes',
          why: 'Can you giggle? Yes! “Giggled” shows an action.' }
      ]
    ]
  },

  /* ── PRACTICE: 1 Remember card, then 10 questions × 2 versions ── */
  practice: {
    cards: [
      { title: 'Remember: Verbs',
        blocks: [
          { term: 'verb', means: 'a word that shows an action', ex: 'Kick, throw, and swim are verbs.' },
          { p: 'A verb tells what someone does. A verb tells what something does.' },
          { words: ['kicked', 'threw', 'ran', 'swam', 'climbed', 'cheered'], tag: 'v' },
          { tip: 'Ask: What did the noun do?' }
        ] }
    ],
    versions: [
      [
        { id: 'V2101', type: 'tap', skill: 'Find the verb', s: 'Rosa bounces the ball on the court.', tags: 'n v x n x x n', ask: 'v',
          why: '“Bounces” tells what Rosa does.' },
        { id: 'V2102', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['skipped', 'sneaker', 'tiny', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Can you skip? Yes! “Skipped” shows an action.' },
        { id: 'V2103', type: 'tap', skill: 'Find the verb', s: 'The class stretched on the mats.', tags: 'x n v x x n', ask: 'v',
          why: '“Stretched” tells what the class did.' },
        { id: 'V2104', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Grace ___ the ball into the hoop.',
          choices: ['tossed', 'locker', 'purple', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Grace tossed the ball. “Tossed” shows what Grace did.' },
        { id: 'V2105', type: 'name', skill: 'Noun or verb', s: 'Ben caught the ball with two hands.', tags: 'n v x n x adj n', word: 'caught',
          why: '“Caught” tells what Ben did. Caught is an action, so “caught” is a verb.' },
        { id: 'V2106', type: 'tap', skill: 'Find the verb', s: 'Mateo crawled through the tunnel.', tags: 'n v x x n', ask: 'v',
          why: '“Crawled” tells what Mateo did.' },
        { id: 'V2107', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Priya scored a goal for the team.', tags: 'n v x n x x n',
          choices: ['scored', 'goal', 'team'], choiceTags: ['v', 'n', 'n'],
          why: '“Scored” tells what Priya did.' },
        { id: 'V2108', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'The Tigers ___ the big game.',
          choices: ['won', 'pillow', 'hungry', 'proudly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'The Tigers won the game. “Won” shows what the Tigers did.' },
        { id: 'V2109', type: 'yesno', skill: 'Verb or not', ask: 'v', word: 'trophy', tag: 'n', answer: 'no',
          why: 'Can you trophy? No. A trophy is a thing you can win.' },
        { id: 'V2110', type: 'tap', skill: 'Find the verb', s: 'Zoe tagged Leo on the playground.', tags: 'n v n x x n', ask: 'v',
          why: '“Tagged” tells what Zoe did.' }
      ],
      [
        { id: 'V2201', type: 'tap', skill: 'Find the verb', s: 'Luis rolled the ball to Ana.', tags: 'n v x n x n', ask: 'v',
          why: '“Rolled” tells what Luis did.' },
        { id: 'V2202', type: 'tap', skill: 'Find the verb', s: 'The kids raced to the gate.', tags: 'x n v x x n', ask: 'v',
          why: '“Raced” tells what the kids did.' },
        { id: 'V2203', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['climbed', 'jersey', 'hungry', 'quietly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Can you climb? Yes! “Climbed” shows an action.' },
        { id: 'V2204', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Jamal ___ over the puddle.',
          choices: ['hopped', 'muffin', 'fuzzy', 'slowly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Jamal hopped. “Hopped” shows what Jamal did.' },
        { id: 'V2205', type: 'tap', skill: 'Find the verb', s: 'Sofia hugged Grace after the game.', tags: 'n v n x x n', ask: 'v',
          why: '“Hugged” tells what Sofia did.' },
        { id: 'V2206', type: 'name', skill: 'Noun or verb', s: 'Ana climbed the wall at the gym.', tags: 'n v x n x x n', word: 'gym',
          why: '“Gym” names a place. Can you gym? No. “Gym” is a noun.' },
        { id: 'V2207', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Leo grabbed a helmet from the bench.', tags: 'n v x n x x n',
          choices: ['grabbed', 'helmet', 'bench'], choiceTags: ['v', 'n', 'n'],
          why: '“Grabbed” tells what Leo did.' },
        { id: 'V2208', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Nia ___ the rope with both hands.',
          choices: ['pulled', 'carrot', 'proud', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Nia pulled the rope. “Pulled” shows what Nia did.' },
        { id: 'V2209', type: 'yesno', skill: 'Verb or not', ask: 'v', s: 'Ivy splashed in the pool.', tags: 'n v x x n', word: 'splashed', tag: 'v', answer: 'yes',
          why: '“Splashed” tells what Ivy did. Splashed is an action.' },
        { id: 'V2210', type: 'tap', skill: 'Find the verb', s: 'Mateo ran to the base and slid.', tags: 'n v x x n x v', ask: 'v',
          why: '“Ran” and “slid” both tell what Mateo did.' }
      ]
    ]
  },

  /* ── REVIEW: 1 Remember card, then 10 questions × 3 versions (75% passes) ── */
  review: {
    cards: [
      { title: 'Remember: Verbs',
        blocks: [
          { term: 'verb', means: 'a word that shows an action', ex: 'Hop, catch, and skip are verbs.' },
          { p: 'A verb tells what someone does. A verb tells what something does.' },
          { words: ['jumped', 'caught', 'ate', 'skipped', 'hopped'], tag: 'v' },
          { sent: 'Priya tossed the ball to Kai.', tags: 'n v x n x n', show: ['n', 'v'], say: 'What did Priya do? Priya tossed the ball.' },
          { tip: 'Ask: What did the noun do?' }
        ] }
    ],
    versions: [
      [
        { id: 'V3101', type: 'tap', skill: 'Find the verb', s: 'Grace jumped over the cone.', tags: 'n v x x n', ask: 'v',
          why: '“Jumped” tells what Grace did.' },
        { id: 'V3102', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['wiggled', 'mitten', 'green', 'soon'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Can you wiggle? Yes! “Wiggled” shows an action.' },
        { id: 'V3103', type: 'tap', skill: 'Find the verb', s: 'The team ran around the field.', tags: 'x n v x x n', ask: 'v',
          why: '“Ran” tells what the team did.' },
        { id: 'V3104', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Kai ___ the ball over the net.',
          choices: ['hit', 'banana', 'shiny', 'gently'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Kai hit the ball. “Hit” shows what Kai did.' },
        { id: 'V3105', type: 'name', skill: 'Noun or verb', s: 'Ella spun the hoop.', tags: 'n v x n', word: 'spun',
          why: '“Spun” tells what Ella did. Spun is an action, so “spun” is a verb.' },
        { id: 'V3106', type: 'tap', skill: 'Find the verb', s: 'Luis and Omar jogged across the gym.', tags: 'n x n v x x n', ask: 'v',
          why: '“Jogged” tells what Luis and Omar did.' },
        { id: 'V3107', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Zoe blocked the ball at the goal.', tags: 'n v x n x x n',
          choices: ['blocked', 'ball', 'goal'], choiceTags: ['v', 'n', 'n'],
          why: '“Blocked” tells what Zoe did.' },
        { id: 'V3108', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Rosa ___ up the rope.',
          choices: ['climbed', 'cookie', 'tiny', 'softly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Rosa climbed up the rope. “Climbed” shows what Rosa did.' },
        { id: 'V3109', type: 'name', skill: 'Noun or verb', s: 'Leo carried the ball to the playground.', tags: 'n v x n x x n', word: 'playground',
          why: '“Playground” names a place. Can you playground? No. “Playground” is a noun.' },
        { id: 'V3110', type: 'tap', skill: 'Find the verb', s: 'Nia hopped and skipped on the grass.', tags: 'n v x v x x n', ask: 'v',
          why: '“Hopped” and “skipped” both tell what Nia did.' }
      ],
      [
        { id: 'V3201', type: 'tap', skill: 'Find the verb', s: 'Owen threw the ball at the hoop.', tags: 'n v x n x x n', ask: 'v',
          why: '“Threw” tells what Owen did.' },
        { id: 'V3202', type: 'tap', skill: 'Find the verb', s: 'The girls laughed after recess.', tags: 'x n v x n', ask: 'v',
          why: '“Laughed” tells what the girls did.' },
        { id: 'V3203', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['shouted', 'teacher', 'sunny', 'often'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Can you shout? Yes! “Shouted” shows an action.' },
        { id: 'V3204', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Ben ___ the ball across the field.',
          choices: ['kicked', 'sticker', 'happy', 'sadly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Ben kicked the ball. “Kicked” shows what Ben did.' },
        { id: 'V3205', type: 'name', skill: 'Noun or verb', s: 'Jade bounced on the trampoline.', tags: 'n v x x n', word: 'trampoline',
          why: '“Trampoline” names a thing. A trampoline is a thing you jump on.' },
        { id: 'V3206', type: 'tap', skill: 'Find the verb', s: 'Amir waved a flag for the team.', tags: 'n v x n x x n', ask: 'v',
          why: '“Waved” tells what Amir did.' },
        { id: 'V3207', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Tess chased Sam around the gym.', tags: 'n v n x x n',
          choices: ['chased', 'Sam', 'gym'], choiceTags: ['v', 'n', 'n'],
          why: '“Chased” tells what Tess did.' },
        { id: 'V3208', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Priya ___ the ball into the air.',
          choices: ['threw', 'window', 'golden', 'safely'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Priya threw the ball up. “Threw” shows what Priya did.' },
        { id: 'V3209', type: 'name', skill: 'Noun or verb', s: 'The band marched onto the field.', tags: 'x n v x x n', word: 'marched',
          why: '“Marched” tells what the band did. Marched is an action, so “marched” is a verb.' },
        { id: 'V3210', type: 'tap', skill: 'Find the verb', s: 'Kai caught the ball and ran.', tags: 'n v x n x v', ask: 'v',
          why: '“Caught” and “ran” both tell what Kai did.' }
      ],
      [
        { id: 'V3301', type: 'tap', skill: 'Find the verb', s: 'Noah balanced on the beam.', tags: 'n v x x n', ask: 'v',
          why: '“Balanced” tells what Noah did.' },
        { id: 'V3302', type: 'tap', skill: 'Find the verb', s: 'The boys tumbled on the mat.', tags: 'x n v x x n', ask: 'v',
          why: '“Tumbled” tells what the boys did.' },
        { id: 'V3303', type: 'mc', skill: 'Pick the verb', ask: 'v',
          choices: ['galloped', 'basket', 'fluffy', 'loudly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Can you gallop? Yes! “Galloped” shows an action.' },
        { id: 'V3304', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Max ___ the ball down the court.',
          choices: ['dribbled', 'eyebrow', 'furry', 'neatly'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'Max dribbled the ball. “Dribbled” shows what Max did.' },
        { id: 'V3305', type: 'name', skill: 'Noun or verb', s: 'Eli ran to the bench.', tags: 'n v x x n', word: 'bench',
          why: '“Bench” names a thing. A bench is a thing you sit on.' },
        { id: 'V3306', type: 'tap', skill: 'Find the verb', s: 'Hana pushes the cart to the gym.', tags: 'n v x n x x n', ask: 'v',
          why: '“Pushes” tells what Hana does.' },
        { id: 'V3307', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Mia pitched the ball to Ben.', tags: 'n v x n x n',
          choices: ['pitched', 'ball', 'Ben'], choiceTags: ['v', 'n', 'n'],
          why: '“Pitched” tells what Mia did.' },
        { id: 'V3308', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'The crowd ___ for the runners.',
          choices: ['cheered', 'lunchbox', 'noisy', 'happily'], choiceTags: ['v', 'n', 'adj', 'adv'],
          why: 'The crowd cheered for the runners. “Cheered” shows what the crowd did.' },
        { id: 'V3309', type: 'name', skill: 'Noun or verb', s: 'Dev skated around the rink.', tags: 'n v x x n', word: 'skated',
          why: '“Skated” tells what Dev did. Skated is an action, so “skated” is a verb.' },
        { id: 'V3310', type: 'tap', skill: 'Find the verb', s: 'Ella clapped and cheered at the game.', tags: 'n v x v x x n', ask: 'v',
          why: '“Clapped” and “cheered” both tell what Ella did.' }
      ]
    ]
  }
};
