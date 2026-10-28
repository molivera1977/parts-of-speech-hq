/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — ALL FOUR (key "all", ids A…)
   The last part: telling the four jobs apart in one sentence.
   Noun (N) names a person, place, thing, or idea · Verb (V) shows an action ·
   Adjective (ADJ) describes a noun (what kind? how many?) · Adverb (ADV)
   describes a verb (how? when? where?). Mirrors Mr. O's "Parts of Speech
   Cumulative Review" sheet (Find It · Sort It · Show What You Know · Write It)
   with all-new sentences. Theme: trips, the beach, the city, holidays, and the
   neighborhood. Contract: tools/CONTENT-SPEC.md · check: node tools/check-pos.js all
   10/27 after the expert critique: why lines model the kid's question; no surface
   tricks (right words without -ed / -y / -ly, adverbs off the end, noun taps that
   start with a little word); little words taught on card 1.
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.all = {
  learn: {
    cards: [
      { title: 'Four Jobs',
        blocks: [
          { p: 'Every word in a sentence has a job. Here are four jobs.' },
          { rows: [
            ['N',   'A noun names a person, place, thing, or idea. Mom, beach, and bus are nouns.'],
            ['V',   'A verb shows an action. Swam, ate, and rode are verbs.'],
            ['ADJ', 'An adjective describes a noun. Hot, sunny, and two are adjectives.'],
            ['ADV', 'An adverb describes a verb. Gently, soon, and here are adverbs.']
          ] },
          { p: 'Little words like a, the, to, and at have other jobs.' },
          { tip: 'N, V, ADJ, and ADV are short names for the four jobs.' }
        ] },
      { title: 'One Sentence, Four Jobs',
        blocks: [
          { p: 'One sentence can have all four jobs.' },
          { sent: 'The yellow taxi stopped suddenly.', tags: 'x adj n v adv', show: ['adj', 'n', 'v', 'adv'],
            say: '“Yellow” tells what kind of taxi. “Suddenly” tells how the taxi stopped.' },
          { sent: 'The noisy seagulls flew away.', tags: 'x adj n v adv', show: ['adj', 'n', 'v', 'adv'],
            say: '“Noisy” tells what kind of seagulls. “Away” tells where the seagulls flew.' },
          { sent: 'Three kids swam today.', tags: 'adj n v adv', show: ['adj', 'n', 'v', 'adv'],
            say: '“Three” tells how many kids. “Today” tells when the kids swam.' }
        ] },
      { title: 'How to Tell the Jobs Apart',
        blocks: [
          { rows: [
            ['1', 'Find the noun.'],
            ['2', 'Find the verb. Ask: what did the noun do?'],
            ['3', 'Find the adjective. Ask: what kind? how many?'],
            ['4', 'Find the adverb. Ask: how? when? where?']
          ] },
          { sent: 'Leo wrapped six gifts neatly.', tags: 'n v adj n adv', show: ['adj', 'n', 'v', 'adv'],
            say: '“Leo” and “gifts” are nouns. “Wrapped” tells what Leo did. “Six” tells how many gifts. “Neatly” tells how Leo wrapped the gifts.' },
          { tip: 'Many adverbs that tell how end in -ly.' }
        ] },
      { title: 'Check Each Word',
        blocks: [
          { p: 'Read the sentence “Leo ran outside.” Look at each word.' },
          { good: 'The word “Leo” is a noun.', why: '“Leo” names a person.' },
          { good: 'The word “outside” is an adverb.', why: '“Outside” tells where Leo ran.' },
          { bad: 'The word “ran” is not an adjective.', why: '“Ran” shows an action. “Ran” is a verb.' }
        ] }
    ],
    versions: [
      [
        { id: 'A1101', type: 'tap', skill: 'Find the noun', s: 'The captain waved from the boat.', tags: 'x n v x x n', ask: 'n',
          why: 'A captain is a person. A boat is a thing.' },
        { id: 'A1102', type: 'name', skill: 'Name the part of speech', s: 'Luis splashed in the warm ocean.', tags: 'n v x x adj n', word: 'splashed',
          why: 'What did Luis do? Luis splashed.' },
        { id: 'A1103', type: 'name', skill: 'Name the part of speech', s: 'Ana found a pink shell.', tags: 'n v x adj n', word: 'pink',
          why: 'The noun is “shell”. What kind of shell? Pink.' },
        { id: 'A1104', type: 'name', skill: 'Name the part of speech', s: 'The band slowly marched down the street.', tags: 'x n adv v x x n', word: 'slowly',
          why: 'How did the band march? Slowly.' },
        { id: 'A1105', type: 'tap', skill: 'Find the adjective', s: 'Mateo rode a shiny bike.', tags: 'n v x adj n', ask: 'adj',
          why: 'The noun is “bike”. What kind of bike? Shiny.' },
        { id: 'A1106', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Nia took a basket to the beach.', tags: 'n v x n x x n',
          choices: ['took', 'basket', 'beach'], choiceTags: ['v', 'n', 'n'],
          why: 'What did Nia do? Nia took a basket.' }
      ]
    ]
  },

  practice: {
    cards: [
      { title: 'Remember: Four Jobs',
        blocks: [
          { rows: [
            ['N',   'A noun names a person, place, thing, or idea. Mom, school, and kite are nouns.'],
            ['V',   'A verb shows an action. Ran, hopped, and ate are verbs.'],
            ['ADJ', 'An adjective describes a noun. An adjective tells what kind or how many. Big, wet, and five are adjectives.'],
            ['ADV', 'An adverb describes a verb. An adverb tells how, when, or where. Gently, soon, and here are adverbs.']
          ] },
          { tip: 'Find the noun and the verb first. Then ask: what kind? how many? how? when? where?' }
        ] }
    ],
    versions: [
      [
        { id: 'A2101', type: 'build', skill: 'Build a sentence', ask: 'adj', frame: 'The {adj} {n} {v} {adv}.',
          slots: [
            { tag: 'adj', choices: ['tiny', 'softly', 'swam'],    choiceTags: ['adj', 'adv', 'v'] },
            { tag: 'n',   choices: ['crab', 'sleepy', 'ran'],     choiceTags: ['n', 'adj', 'v'] },
            { tag: 'v',   choices: ['dug', 'sandy', 'gently'],    choiceTags: ['v', 'adj', 'adv'] },
            { tag: 'adv', choices: ['quickly', 'happy', 'towel'], choiceTags: ['adv', 'adj', 'n'] }
          ],
          why: 'How did the crab dig? Quickly. The sentence has all four jobs.' },
        { id: 'A2102', type: 'tap', skill: 'Find the noun', s: 'The lifeguard carried a heavy bucket.', tags: 'x n v x adj n', ask: 'n',
          why: 'A lifeguard is a person. A bucket is a thing.' },
        { id: 'A2103', type: 'name', skill: 'Name the part of speech', s: 'Jamal waited quietly for the train.', tags: 'n v adv x x n', word: 'quietly',
          why: 'How did Jamal wait? Quietly.' },
        { id: 'A2104', type: 'tap', skill: 'Find the verb', s: 'Two seagulls ate the bread.', tags: 'adj n v x n', ask: 'v',
          why: '“Ate” tells what the seagulls did.' },
        { id: 'A2105', type: 'name', skill: 'Name the part of speech', s: 'Sofia bought a soft towel.', tags: 'n v x adj n', word: 'soft',
          why: 'The noun is “towel”. What kind of towel? Soft.' },
        { id: 'A2106', type: 'tap', skill: 'Find the adverb', s: 'Kai and Zoe skated outside.', tags: 'n x n v adv', ask: 'adv',
          why: 'Where did Kai and Zoe skate? Outside.' },
        { id: 'A2107', type: 'name', skill: 'Name the part of speech', s: 'Yesterday Leo visited a museum.', tags: 'adv n v x n', word: 'museum',
          why: 'A museum is a place.' }
      ],
      [
        { id: 'A2201', type: 'build', skill: 'Build a sentence', ask: 'adj', frame: 'The {adj} {n} {v} {adv}.',
          slots: [
            { tag: 'adj', choices: ['bright', 'sadly', 'ate'],        choiceTags: ['adj', 'adv', 'v'] },
            { tag: 'n',   choices: ['fireworks', 'happy', 'sang'],    choiceTags: ['n', 'adj', 'v'] },
            { tag: 'v',   choices: ['burst', 'noisy', 'slowly'],      choiceTags: ['v', 'adj', 'adv'] },
            { tag: 'adv', choices: ['loudly', 'sunny', 'turkey'],     choiceTags: ['adv', 'adj', 'n'] }
          ],
          why: 'How did the fireworks burst? Loudly. The sentence has all four jobs.' },
        { id: 'A2202', type: 'tap', skill: 'Find the adjective', s: 'Rosa wore a warm hat to the parade.', tags: 'n v x adj n x x n', ask: 'adj',
          why: 'The noun is “hat”. What kind of hat? Warm.' },
        { id: 'A2203', type: 'name', skill: 'Name the part of speech', s: 'Grandpa carved the turkey.', tags: 'n v x n', word: 'carved',
          why: 'What did Grandpa do? Grandpa carved the turkey.' },
        { id: 'A2204', type: 'tap', skill: 'Find the noun', s: 'The twins rode the ferry.', tags: 'x n v x n', ask: 'n',
          why: 'Twins are people. A ferry is a boat. A boat is a thing.' },
        { id: 'A2205', type: 'name', skill: 'Name the part of speech', s: 'The neighbors happily cheered for the team.', tags: 'x n adv v x x n', word: 'happily',
          why: 'How did the neighbors cheer? Happily.' },
        { id: 'A2206', type: 'tap', skill: 'Find the verb', s: 'Priya sent a card to Grandma.', tags: 'n v x n x n', ask: 'v',
          why: 'What did Priya do? Priya sent a card.' },
        { id: 'A2207', type: 'name', skill: 'Name the part of speech', s: 'Six candles glowed on the cake.', tags: 'adj n v x x n', word: 'Six',
          why: 'The noun is “candles”. How many candles? Six.' }
      ]
    ]
  },

  review: {
    cards: [
      { title: 'Remember: Ask the Questions',
        blocks: [
          { rows: [
            ['N',   'A noun names a person, place, thing, or idea. Dad, school, and gift are nouns.'],
            ['V',   'A verb shows an action. Ask: what did the noun do? Swam, rode, and sang are verbs.'],
            ['ADJ', 'An adjective describes a noun. Ask: what kind? how many? Big, cold, and six are adjectives.'],
            ['ADV', 'An adverb describes a verb. Ask: how? when? where? Calmly, soon, and away are adverbs.']
          ] },
          { tip: 'Little words like a, the, to, and at have other jobs.' }
        ] }
    ],
    versions: [
      [
        { id: 'A3101', type: 'tap', skill: 'Find the noun', s: 'The young swimmer floated on a raft.', tags: 'x adj n v x x n', ask: 'n',
          why: 'A swimmer is a person. A raft is a thing.' },
        { id: 'A3102', type: 'name', skill: 'Name the part of speech', s: 'Hana followed a sandy path.', tags: 'n v x adj n', word: 'sandy',
          why: 'The noun is “path”. What kind of path? Sandy.' },
        { id: 'A3103', type: 'tap', skill: 'Find the verb', s: 'The bus crossed the bridge.', tags: 'x n v x n', ask: 'v',
          why: '“Crossed” tells what the bus did.' },
        { id: 'A3104', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['soon', 'museum', 'salty', 'swam'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Soon” tells when. Lunch starts soon.' },
        { id: 'A3105', type: 'name', skill: 'Name the part of speech', s: 'Dad bought popcorn at the movies.', tags: 'n v n x x n', word: 'popcorn',
          why: 'Popcorn is a thing. You can eat popcorn.' },
        { id: 'A3106', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Zoe built a ___ sandcastle.',
          choices: ['huge', 'slowly', 'dug', 'pencils'], choiceTags: ['adj', 'adv', 'v', 'n'],
          why: 'The noun is “sandcastle”. What kind of sandcastle? Huge.' },
        { id: 'A3107', type: 'tap', skill: 'Find the adjective', s: 'Jada took many pictures.', tags: 'n v adj n', ask: 'adj',
          why: 'The noun is “pictures”. How many pictures? Many.' },
        { id: 'A3108', type: 'name', skill: 'Name the part of speech', s: 'Ruby ran into the waves.', tags: 'n v x x n', word: 'ran',
          why: 'What did Ruby do? Ruby ran.' },
        { id: 'A3109', type: 'tap', skill: 'Find the adverb', s: 'The plane safely landed at the airport.', tags: 'x n adv v x x n', ask: 'adv',
          why: 'How did the plane land? Safely.' },
        { id: 'A3110', type: 'mc', skill: 'Find the noun', ask: 'n', s: 'The big crowd sang proudly.', tags: 'x adj n v adv',
          choices: ['crowd', 'big', 'sang', 'proudly'], choiceTags: ['n', 'adj', 'v', 'adv'],
          why: 'A crowd is a group of people.' },
        { id: 'A3111', type: 'name', skill: 'Name the part of speech', s: 'The tired kids napped upstairs.', tags: 'x adj n v adv', word: 'upstairs',
          why: 'Where did the kids nap? Upstairs.' },
        { id: 'A3112', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Omar ___ a kite at the beach.',
          choices: ['flew', 'sandy', 'softly', 'bucket'], choiceTags: ['v', 'adj', 'adv', 'n'],
          why: 'What did Omar do? Omar flew a kite.' }
      ],
      [
        { id: 'A3201', type: 'tap', skill: 'Find the adverb', s: 'Grandma softly hummed a song.', tags: 'n adv v x n', ask: 'adv',
          why: 'How did Grandma hum? Softly.' },
        { id: 'A3202', type: 'name', skill: 'Name the part of speech', s: 'Sam rode the bus to New Haven.', tags: 'n v x n x n n', word: 'bus',
          why: 'A bus is a thing.' },
        { id: 'A3203', type: 'tap', skill: 'Find the adjective', s: 'Dante baked a sweet pie.', tags: 'n v x adj n', ask: 'adj',
          why: 'The noun is “pie”. What kind of pie? Sweet.' },
        { id: 'A3204', type: 'name', skill: 'Name the part of speech', s: 'Aria wrapped a gift for Mom.', tags: 'n v x n x n', word: 'wrapped',
          why: 'What did Aria do? Aria wrapped a gift.' },
        { id: 'A3205', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['hungry', 'quickly', 'library', 'ran'], choiceTags: ['adj', 'adv', 'n', 'v'],
          why: '“Hungry” tells what kind. A hungry puppy wants food.' },
        { id: 'A3206', type: 'tap', skill: 'Find the noun', s: 'The children visited the zoo.', tags: 'x n v x n', ask: 'n',
          why: 'Children are people. A zoo is a place.' },
        { id: 'A3207', type: 'fill', skill: 'Complete the sentence', ask: 'n', s: 'Ben bought a ticket at the ___.',
          choices: ['station', 'sunny', 'loudly', 'jumped'], choiceTags: ['n', 'adj', 'adv', 'v'],
          why: 'A station is a place.' },
        { id: 'A3208', type: 'name', skill: 'Name the part of speech', s: 'Nia saw colorful balloons.', tags: 'n v adj n', word: 'colorful',
          why: 'The noun is “balloons”. What kind of balloons? Colorful.' },
        { id: 'A3209', type: 'tap', skill: 'Find the verb', s: 'Theo shoveled the snow.', tags: 'n v x n', ask: 'v',
          why: 'What did Theo do? Theo shoveled the snow.' },
        { id: 'A3210', type: 'name', skill: 'Name the part of speech', s: 'Yesterday Rosa called Grandma.', tags: 'adv n v n', word: 'Yesterday',
          why: 'When did Rosa call Grandma? Yesterday.' },
        { id: 'A3211', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Mateo made warm cocoa for Ana.', tags: 'n v adj n x n',
          choices: ['made', 'warm', 'cocoa', 'Ana'], choiceTags: ['v', 'adj', 'n', 'n'],
          why: 'What did Mateo do? Mateo made cocoa.' },
        { id: 'A3212', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'The taxi honked ___.',
          choices: ['loudly', 'yellow', 'street', 'parked'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: 'How did the taxi honk? Loudly.' }
      ],
      [
        { id: 'A3301', type: 'tap', skill: 'Find the verb', s: 'Elena drew red flowers.', tags: 'n v adj n', ask: 'v',
          why: 'What did Elena do? Elena drew flowers.' },
        { id: 'A3302', type: 'name', skill: 'Name the part of speech', s: 'Grandpa and Noah ate outside.', tags: 'n x n v adv', word: 'outside',
          why: 'Where did Grandpa and Noah eat? Outside.' },
        { id: 'A3303', type: 'tap', skill: 'Find the noun', s: 'The new neighbor rang the doorbell.', tags: 'x adj n v x n', ask: 'n',
          why: 'A neighbor is a person. A doorbell is a thing.' },
        { id: 'A3304', type: 'name', skill: 'Name the part of speech', s: 'Iris built a tall snowman.', tags: 'n v x adj n', word: 'tall',
          why: 'The noun is “snowman”. What kind of snowman? Tall.' },
        { id: 'A3305', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Leo ___ a pumpkin for Halloween.',
          choices: ['grew', 'sleepy', 'neatly', 'window'], choiceTags: ['v', 'adj', 'adv', 'n'],
          why: 'What did Leo do? Leo grew a pumpkin.' },
        { id: 'A3306', type: 'tap', skill: 'Find the adverb', s: 'Today Mia opened the gifts.', tags: 'adv n v x n', ask: 'adv',
          why: 'When did Mia open the gifts? Today.' },
        { id: 'A3307', type: 'mc', skill: 'Pick the noun', ask: 'n',
          choices: ['kitchen', 'happily', 'tiny', 'dug'], choiceTags: ['n', 'adv', 'adj', 'v'],
          why: 'A kitchen is a place.' },
        { id: 'A3308', type: 'name', skill: 'Name the part of speech', s: 'Rafi swept the porch.', tags: 'n v x n', word: 'swept',
          why: 'What did Rafi do? Rafi swept the porch.' },
        { id: 'A3309', type: 'tap', skill: 'Find the adjective', s: 'Hana picked five apples.', tags: 'n v adj n', ask: 'adj',
          why: 'The noun is “apples”. How many apples? Five.' },
        { id: 'A3310', type: 'name', skill: 'Name the part of speech', s: 'Amir walked to the library.', tags: 'n v x x n', word: 'library',
          why: 'A library is a place.' },
        { id: 'A3311', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'Sofia hugged Grandma tightly.', tags: 'n v n adv',
          choices: ['tightly', 'hugged', 'Grandma'], choiceTags: ['adv', 'v', 'n'],
          why: 'How did Sofia hug Grandma? Tightly.' },
        { id: 'A3312', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Ruby drank ___ cocoa.',
          choices: ['hot', 'slowly', 'sang', 'pillows'], choiceTags: ['adj', 'adv', 'v', 'n'],
          why: 'The noun is “cocoa”. What kind of cocoa? Hot.' }
      ]
    ]
  }
};
