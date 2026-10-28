/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — NOUNS (key "noun", ids N…)
   Basics only (Marcos 10/27/2026: "lets focus on the basics of each"):
   a noun names a person, place, thing, or idea. Names (Maya, Bridgeport)
   are nouns that name a person or a place. An animal is a living thing.
   Sentence theme: school, family, and places around town.
   Format and rules: tools/CONTENT-SPEC.md · check: node tools/check-pos.js noun
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.noun = {

  /* ── LEARN: lesson cards, then a 6-question check ── */
  learn: {
    cards: [
      { title: 'Every Word Has a Job', blocks: [
        { p: 'In a sentence, words do different jobs. We call each job a part of speech.' },
        { p: 'The first job we learn is the noun.' },
        { term: 'noun', means: 'a word that names a person, place, thing, or idea' },
        { words: ['Dad', 'library', 'pencil', 'kindness'], tag: 'n' },
        { p: 'Little words like a, the, to, and at have other jobs. We skip little words here.' }
      ] },
      { title: 'A Noun Can Name a Person', blocks: [
        { words: ['teacher', 'doctor', 'baby', 'Grandpa', 'sister'], tag: 'n' },
        { p: 'A name is a noun too. Maya, Luis, and Ana are nouns.' },
        { sent: 'Maya helped the teacher.', tags: 'n v x n', show: 'n', say: 'Maya is a person. A teacher is a person.' }
      ] },
      { title: 'Common and Proper Nouns', blocks: [
        { term: 'common noun', means: 'a word for any person, place, or thing: girl, city, school' },
        { term: 'proper noun', means: 'the name of one special person, place, or thing: Maria, Bridgeport' },
        { p: 'A proper noun starts with a capital letter.' },
        { sent: 'Maria lives in Bridgeport.', tags: 'n v x n', show: 'n', say: 'Maria and Bridgeport are proper nouns.' },
        { tip: 'Names are nouns too, just like girl and city.' }
      ] },
      { title: 'A Noun Can Name a Place', blocks: [
        { p: 'A place is where you can go.' },
        { words: ['school', 'park', 'library', 'beach', 'kitchen', 'Bridgeport'], tag: 'n' },
        { p: 'Bridgeport is a proper noun. Bridgeport names a city.' },
        { sent: 'Leo swam at the beach.', tags: 'n v x x n', show: 'n', say: 'A beach is a place.' }
      ] },
      { title: 'A Noun Can Name a Thing', blocks: [
        { words: ['pencil', 'ball', 'backpack', 'apple', 'bike'], tag: 'n' },
        { p: 'An animal is a thing too. A dog, a frog, and a bird are living things.' },
        { sent: 'Rosa dropped an apple.', tags: 'n v x n', show: 'n', say: 'An apple is a thing.' }
      ] },
      { title: 'A Noun Can Name an Idea', blocks: [
        { p: 'An idea is something you think or feel.' },
        { p: 'You cannot touch an idea.' },
        { words: ['joy', 'love', 'kindness', 'courage', 'happiness', 'friendship', 'pride'], tag: 'n' },
        { p: 'Courage means being brave.' },
        { sent: 'Jamal showed kindness to a new friend.', tags: 'n v n x x adj n', show: 'n', say: 'Kindness is an idea.' }
      ] },
      { title: 'Find the Noun in a Sentence', blocks: [
        { p: 'A sentence can have more than one noun.' },
        { sent: 'Grandma cooked rice in the kitchen.', tags: 'n v n x x n', show: 'n',
          say: 'Grandma is a person. Rice is a thing. A kitchen is a place.' },
        { tip: 'Ask: Does the word name a person, place, thing, or idea?' },
        { tip: 'A noun often comes after a, an, or the.' }
      ] },
      { title: 'Is the Word a Noun?', blocks: [
        { good: 'The word “library” is a noun.', why: 'A library is a place.' },
        { good: 'The word “friendship” is a noun.', why: 'Friendship is an idea.' },
        { bad: 'The word “giggled” is not a noun.', why: '“Giggled” does not name a person, place, thing, or idea.' },
        { tip: 'Ask: Does the word name a person, place, thing, or idea?' }
      ] }
    ],
    versions: [
      [
        { id: 'N1101', type: 'tap', skill: 'Find the noun', s: 'The teacher smiled.', tags: 'x n v', ask: 'n',
          why: 'A teacher is a person.' },
        { id: 'N1102', type: 'mc', skill: 'Pick the noun', ask: 'n',
          choices: ['kitchen', 'sleepy', 'swam', 'softly'], choiceTags: ['n', 'adj', 'v', 'adv'],
          why: 'A kitchen is a place. You cook in a kitchen.' },
        { id: 'N1103', type: 'tap', skill: 'Find the noun', s: 'Luis ran to the park.', tags: 'n v x x n', ask: 'n',
          why: 'Luis is a person. A park is a place.' },
        { id: 'N1104', type: 'yesno', skill: 'Noun or not', ask: 'n', word: 'kindness', tag: 'n', answer: 'yes',
          why: 'Kindness is an idea. You cannot touch kindness.' },
        { id: 'N1105', type: 'tap', skill: 'Find the noun', s: 'Nia packed a big backpack.', tags: 'n v x adj n', ask: 'n',
          why: 'Nia is a person. A backpack is a thing.' },
        { id: 'N1106', type: 'mc', skill: 'Find the noun', ask: 'n', s: 'Omar ate a warm muffin.', tags: 'n v x adj n',
          choices: ['muffin', 'ate', 'warm'], choiceTags: ['n', 'v', 'adj'],
          why: 'A muffin is a thing you can eat.' }
      ]
    ]
  },

  /* ── PRACTICE: one Remember card, then 10 questions (2 versions) ── */
  practice: {
    cards: [
      { title: 'Remember: Nouns', blocks: [
        { p: 'A noun names a person, place, thing, or idea.' },
        { words: ['sister', 'beach', 'pencil', 'joy'], tag: 'n' },
        { p: 'A name is a proper noun. A proper noun starts with a capital letter.' },
        { tip: 'Ask: Does the word name a person, place, thing, or idea?' },
        { tip: 'A noun often comes after a, an, or the.' }
      ] }
    ],
    versions: [
      [
        { id: 'N2101', type: 'tap', skill: 'Find the noun', s: 'The student found a book.', tags: 'x n v x n', ask: 'n',
          why: 'A student is a person. A book is a thing.' },
        { id: 'N2102', type: 'sort', skill: 'Person, place, thing, or idea', word: 'neighbor', answer: 'a person',
          why: 'A neighbor is a person. A neighbor lives next door.' },
        { id: 'N2103', type: 'tap', skill: 'Find the noun', s: 'Luis showed great kindness.', tags: 'n v adj n', ask: 'n',
          why: 'Luis is a person. Kindness is an idea.' },
        { id: 'N2104', type: 'mc', skill: 'Pick the noun', ask: 'n',
          choices: ['notebook', 'shiny', 'sneezed', 'softly'], choiceTags: ['n', 'adj', 'v', 'adv'],
          why: 'A notebook is a thing. You write in a notebook.' },
        { id: 'N2105', type: 'sort', skill: 'Person, place, thing, or idea', word: 'playground', answer: 'a place',
          why: 'A playground is a place. Kids play at a playground.' },
        { id: 'N2106', type: 'tap', skill: 'Find the noun', s: 'The mayor cut a red ribbon and waved.', tags: 'x n v x adj n x v', ask: 'n',
          why: 'A mayor is a person. A ribbon is a thing.' },
        { id: 'N2107', type: 'fill', skill: 'Complete the sentence', ask: 'n', s: 'Grandma baked a ___ for Luis.',
          choices: ['cake', 'sad', 'gently', 'laughed'], choiceTags: ['n', 'adj', 'adv', 'v'],
          why: 'A cake is a thing. Grandma baked a cake.' },
        { id: 'N2108', type: 'sort', skill: 'Person, place, thing, or idea', word: 'friendship', answer: 'an idea',
          why: 'Friendship is an idea. You cannot touch friendship.' },
        { id: 'N2109', type: 'tap', skill: 'Find the noun', s: 'The bus stopped at the library.', tags: 'x n v x x n', ask: 'n',
          why: 'A bus is a thing. A library is a place.' },
        { id: 'N2110', type: 'yesno', skill: 'Noun or not', ask: 'n', word: 'shouted', tag: 'v', answer: 'no',
          why: 'Does “shouted” name a person, place, thing, or idea? No.' }
      ],
      [
        { id: 'N2201', type: 'tap', skill: 'Find the noun', s: 'Grandpa read a funny letter and laughed.', tags: 'n v x adj n x v', ask: 'n',
          why: 'Grandpa is a person. A letter is a thing.' },
        { id: 'N2202', type: 'sort', skill: 'Person, place, thing, or idea', word: 'cousin', answer: 'a person',
          why: 'A cousin is a person. Many kids play with a cousin.' },
        { id: 'N2203', type: 'tap', skill: 'Find the noun', s: 'Ana shouted with joy.', tags: 'n v x n', ask: 'n',
          why: 'Ana is a person. Joy is an idea.' },
        { id: 'N2204', type: 'mc', skill: 'Find the noun', ask: 'n', s: 'Leo carried a heavy box to class.', tags: 'n v x adj n x n',
          choices: ['box', 'carried', 'heavy'], choiceTags: ['n', 'v', 'adj'],
          why: 'A box is a thing you can carry.' },
        { id: 'N2205', type: 'sort', skill: 'Person, place, thing, or idea', word: 'umbrella', answer: 'a thing',
          why: 'An umbrella is a thing. You hold an umbrella in the rain.' },
        { id: 'N2206', type: 'tap', skill: 'Find the noun', s: 'The coach blew a whistle.', tags: 'x n v x n', ask: 'n',
          why: 'A coach is a person. A whistle is a thing.' },
        { id: 'N2207', type: 'fill', skill: 'Complete the sentence', ask: 'n', s: 'Mateo wore a ___ to school.',
          choices: ['jacket', 'tiny', 'loudly', 'sang'], choiceTags: ['n', 'adj', 'adv', 'v'],
          why: 'A jacket is a thing. Mateo wore a jacket.' },
        { id: 'N2208', type: 'sort', skill: 'Person, place, thing, or idea', word: 'courage', answer: 'an idea',
          why: 'Courage is an idea. Courage means being brave.' },
        { id: 'N2209', type: 'tap', skill: 'Find the noun', s: 'The baby splashed in the tub.', tags: 'x n v x x n', ask: 'n',
          why: 'A baby is a person. A tub is a thing.' },
        { id: 'N2210', type: 'yesno', skill: 'Noun or not', ask: 'n', word: 'park', tag: 'n', answer: 'yes',
          s: 'Zoe flew a kite at the park.', tags: 'n v x n x x n',
          why: 'A park is a place. You can go to a park.' }
      ]
    ]
  },

  /* ── REVIEW: one Remember card, then 10 questions (3 versions; 75% passes) ── */
  review: {
    cards: [
      { title: 'Remember: Nouns', blocks: [
        { p: 'A noun names a person, place, thing, or idea.' },
        { words: ['nurse', 'gym', 'blanket', 'kindness'], tag: 'n' },
        { p: 'A name is a proper noun. A proper noun starts with a capital letter.' },
        { tip: 'Ask: Does the word name a person, place, thing, or idea?' },
        { tip: 'A noun often comes after a, an, or the.' }
      ] }
    ],
    versions: [
      [
        { id: 'N3101', type: 'tap', skill: 'Find the noun', s: 'Jamal cleaned the classroom and smiled.', tags: 'n v x n x v', ask: 'n',
          why: 'Jamal is a person. A classroom is a place.' },
        { id: 'N3102', type: 'mc', skill: 'Pick the noun', ask: 'n',
          choices: ['ladder', 'fluffy', 'whispered', 'slowly'], choiceTags: ['n', 'adj', 'v', 'adv'],
          why: 'A ladder is a thing. You climb a ladder.' },
        { id: 'N3103', type: 'sort', skill: 'Person, place, thing, or idea', word: 'crayon', answer: 'a thing',
          why: 'A crayon is a thing. You color with a crayon.' },
        { id: 'N3104', type: 'tap', skill: 'Find the noun', s: 'The lifeguard showed courage.', tags: 'x n v n', ask: 'n',
          why: 'A lifeguard is a person. Courage is an idea.' },
        { id: 'N3105', type: 'fill', skill: 'Complete the sentence', ask: 'n', s: 'Priya borrowed a ___ from the library.',
          choices: ['book', 'noisy', 'soon', 'jumped'], choiceTags: ['n', 'adj', 'adv', 'v'],
          why: 'A book is a thing. Priya borrowed a book.' },
        { id: 'N3106', type: 'tap', skill: 'Find the noun', s: 'A farmer sold fresh corn.', tags: 'x n v adj n', ask: 'n',
          why: 'A farmer is a person. Corn is a thing.' },
        { id: 'N3107', type: 'sort', skill: 'Person, place, thing, or idea', word: 'bakery', answer: 'a place',
          why: 'A bakery is a place. You buy bread at a bakery.' },
        { id: 'N3108', type: 'mc', skill: 'Find the noun', ask: 'n', s: 'Ana found a tiny shell at the beach.', tags: 'n v x adj n x x n',
          choices: ['shell', 'found', 'tiny'], choiceTags: ['n', 'v', 'adj'],
          why: 'A shell is a thing you can find.' },
        { id: 'N3109', type: 'tap', skill: 'Find the noun', s: 'Mateo visited the zoo in Bridgeport.', tags: 'n v x n x n', ask: 'n',
          why: 'Mateo is a person. The zoo and Bridgeport are places.' },
        { id: 'N3110', type: 'yesno', skill: 'Noun or not', ask: 'n', word: 'hungry', tag: 'adj', answer: 'no',
          why: 'Does “hungry” name a person, place, thing, or idea? No.' }
      ],
      [
        { id: 'N3201', type: 'tap', skill: 'Find the noun', s: 'Dad flipped a big pancake and cheered.', tags: 'n v x adj n x v', ask: 'n',
          why: 'Dad is a person. A pancake is a thing.' },
        { id: 'N3202', type: 'sort', skill: 'Person, place, thing, or idea', word: 'principal', answer: 'a person',
          why: 'A principal is a person. A principal leads a school.' },
        { id: 'N3203', type: 'tap', skill: 'Find the noun', s: 'The winner smiled with pride.', tags: 'x n v x n', ask: 'n',
          why: 'A winner is a person. Pride is an idea.' },
        { id: 'N3204', type: 'mc', skill: 'Pick the noun', ask: 'n',
          choices: ['window', 'huge', 'clapped', 'loudly'], choiceTags: ['n', 'adj', 'v', 'adv'],
          why: 'A window is a thing. You look out a window.' },
        { id: 'N3205', type: 'tap', skill: 'Find the noun', s: 'Kai bought milk at the store.', tags: 'n v n x x n', ask: 'n',
          why: 'Kai is a person. Milk is a thing. A store is a place.' },
        { id: 'N3206', type: 'fill', skill: 'Complete the sentence', ask: 'n', s: 'Nia mailed a ___ to Grandpa.',
          choices: ['card', 'happy', 'softly', 'danced'], choiceTags: ['n', 'adj', 'adv', 'v'],
          why: 'A card is a thing. Nia mailed a card.' },
        { id: 'N3207', type: 'sort', skill: 'Person, place, thing, or idea', word: 'happiness', answer: 'an idea',
          why: 'Happiness is an idea. You feel happiness inside.' },
        { id: 'N3208', type: 'mc', skill: 'Find the noun', ask: 'n', s: 'Omar lost a warm mitten.', tags: 'n v x adj n',
          choices: ['mitten', 'lost', 'warm'], choiceTags: ['n', 'v', 'adj'],
          why: 'A mitten is a thing you wear.' },
        { id: 'N3209', type: 'tap', skill: 'Find the noun', s: 'A girl rang the shiny bell.', tags: 'x n v x adj n', ask: 'n',
          why: 'A girl is a person. A bell is a thing.' },
        { id: 'N3210', type: 'yesno', skill: 'Noun or not', ask: 'n', word: 'joy', tag: 'n', answer: 'yes',
          s: 'The new puppy brought joy to Rosa.', tags: 'x adj n v n x n',
          why: 'Joy is an idea. Joy is a happy feeling.' }
      ],
      [
        { id: 'N3301', type: 'tap', skill: 'Find the noun', s: 'The baby giggled.', tags: 'x n v', ask: 'n',
          why: 'A baby is a person.' },
        { id: 'N3302', type: 'sort', skill: 'Person, place, thing, or idea', word: 'museum', answer: 'a place',
          why: 'A museum is a place. You can see art at a museum.' },
        { id: 'N3303', type: 'tap', skill: 'Find the noun', s: 'The vet fed a hungry cat.', tags: 'x n v x adj n', ask: 'n',
          why: 'A vet is a person. A cat is a living thing.' },
        { id: 'N3304', type: 'mc', skill: 'Find the noun', ask: 'n', s: 'Sofia opened a shiny gift.', tags: 'n v x adj n',
          choices: ['gift', 'opened', 'shiny'], choiceTags: ['n', 'v', 'adj'],
          why: 'A gift is a thing you can open.' },
        { id: 'N3305', type: 'tap', skill: 'Find the noun', s: 'Grandma hugged Nia with love.', tags: 'n v n x n', ask: 'n',
          why: 'Grandma and Nia are people. Love is an idea.' },
        { id: 'N3306', type: 'sort', skill: 'Person, place, thing, or idea', word: 'sandwich', answer: 'a thing',
          why: 'A sandwich is a thing you eat.' },
        { id: 'N3307', type: 'fill', skill: 'Complete the sentence', ask: 'n', s: 'Leo sat on a ___ in the park.',
          choices: ['bench', 'hungry', 'slowly', 'ran'], choiceTags: ['n', 'adj', 'adv', 'v'],
          why: 'A bench is a thing. Leo sat on a bench.' },
        { id: 'N3308', type: 'tap', skill: 'Find the noun', s: 'Ben carried the flag to school.', tags: 'n v x n x n', ask: 'n',
          why: 'Ben is a person. A flag is a thing. A school is a place.' },
        { id: 'N3309', type: 'mc', skill: 'Pick the noun', ask: 'n',
          choices: ['pillow', 'sticky', 'yelled', 'quietly'], choiceTags: ['n', 'adj', 'v', 'adv'],
          why: 'A pillow is a thing. You sleep on a pillow.' },
        { id: 'N3310', type: 'yesno', skill: 'Noun or not', ask: 'n', word: 'Bridgeport', tag: 'n', answer: 'yes',
          why: 'Bridgeport is a city. A city is a place.' }
      ]
    ]
  }
};
