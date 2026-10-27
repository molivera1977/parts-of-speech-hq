/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — ALL FOUR (key "all", ids A…)
   The last part: telling the four jobs apart in one sentence.
   Noun (N) names a person, place, thing, or idea · Verb (V) shows an action ·
   Adjective (ADJ) describes a noun (what kind? how many?) · Adverb (ADV)
   describes a verb (how? when? where?). Mirrors Mr. O's "Parts of Speech
   Cumulative Review" sheet (Find It · Sort It · Show What You Know · Write It)
   with all-new sentences. Theme: trips, the beach, the city, holidays, and the
   neighborhood. Contract: tools/CONTENT-SPEC.md · check: node tools/check-pos.js all
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
            ['ADV', 'An adverb describes a verb. Gently, now, and here are adverbs.']
          ] },
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
        { id: 'A1101', type: 'tap', skill: 'Find the noun', s: 'Grandma waved from the boat.', tags: 'n v x x n', ask: 'n',
          why: '“Grandma” names a person. A boat is a thing.' },
        { id: 'A1102', type: 'name', skill: 'Name the part of speech', s: 'Luis splashed in the warm ocean.', tags: 'n v x x adj n', word: 'splashed',
          why: '“Splashed” shows an action. “Splashed” tells what Luis did.' },
        { id: 'A1103', type: 'name', skill: 'Name the part of speech', s: 'Ana found a pink shell.', tags: 'n v x adj n', word: 'pink',
          why: '“Pink” describes the shell. “Pink” tells what kind of shell.' },
        { id: 'A1104', type: 'name', skill: 'Name the part of speech', s: 'The band marched slowly.', tags: 'x n v adv', word: 'slowly',
          why: '“Slowly” tells how the band marched.' },
        { id: 'A1105', type: 'tap', skill: 'Find the adjective', s: 'Mateo rode a shiny bike.', tags: 'n v x adj n', ask: 'adj',
          why: '“Shiny” tells what kind of bike.' },
        { id: 'A1106', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Nia packed a bag for the trip.', tags: 'n v x n x x n',
          choices: ['packed', 'bag', 'trip'], choiceTags: ['v', 'n', 'n'],
          why: '“Packed” tells what Nia did. “Packed” shows an action.' }
      ]
    ]
  },

  practice: {
    cards: [
      { title: 'Remember: Four Jobs',
        blocks: [
          { rows: [
            ['N',   'A noun names a person, place, thing, or idea. Mom, park, and kite are nouns.'],
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
          why: 'Each box needs a word with the right job. A full sentence can have an adjective, a noun, a verb, and an adverb.' },
        { id: 'A2102', type: 'tap', skill: 'Find the noun', s: 'Omar carried a heavy bucket.', tags: 'n v x adj n', ask: 'n',
          why: '“Omar” names a person. A bucket is a thing.' },
        { id: 'A2103', type: 'name', skill: 'Name the part of speech', s: 'Jamal waited quietly for the train.', tags: 'n v adv x x n', word: 'quietly',
          why: '“Quietly” tells how Jamal waited.' },
        { id: 'A2104', type: 'tap', skill: 'Find the verb', s: 'Two seagulls grabbed the bread.', tags: 'adj n v x n', ask: 'v',
          why: '“Grabbed” tells what the seagulls did.' },
        { id: 'A2105', type: 'name', skill: 'Name the part of speech', s: 'Sofia bought a soft towel.', tags: 'n v x adj n', word: 'soft',
          why: '“Soft” tells what kind of towel.' },
        { id: 'A2106', type: 'tap', skill: 'Find the adverb', s: 'Kai and Zoe skated outside.', tags: 'n x n v adv', ask: 'adv',
          why: '“Outside” tells where Kai and Zoe skated.' },
        { id: 'A2107', type: 'name', skill: 'Name the part of speech', s: 'Leo visited a museum yesterday.', tags: 'n v x n adv', word: 'museum',
          why: 'A museum is a place. “Museum” is a noun.' }
      ],
      [
        { id: 'A2201', type: 'build', skill: 'Build a sentence', ask: 'adj', frame: 'The {adj} {n} {v} {adv}.',
          slots: [
            { tag: 'adj', choices: ['bright', 'sadly', 'ate'],        choiceTags: ['adj', 'adv', 'v'] },
            { tag: 'n',   choices: ['fireworks', 'happy', 'sang'],    choiceTags: ['n', 'adj', 'v'] },
            { tag: 'v',   choices: ['boomed', 'noisy', 'slowly'],     choiceTags: ['v', 'adj', 'adv'] },
            { tag: 'adv', choices: ['loudly', 'sunny', 'turkey'],     choiceTags: ['adv', 'adj', 'n'] }
          ],
          why: 'Each box needs a word with the right job. A full sentence can have an adjective, a noun, a verb, and an adverb.' },
        { id: 'A2202', type: 'tap', skill: 'Find the adjective', s: 'Rosa wore a warm hat to the parade.', tags: 'n v x adj n x x n', ask: 'adj',
          why: '“Warm” tells what kind of hat.' },
        { id: 'A2203', type: 'name', skill: 'Name the part of speech', s: 'Grandpa carved the turkey.', tags: 'n v x n', word: 'carved',
          why: '“Carved” tells what Grandpa did. “Carved” is an action.' },
        { id: 'A2204', type: 'tap', skill: 'Find the noun', s: 'Five friends rode the subway.', tags: 'adj n v x n', ask: 'n',
          why: '“Friends” names people. A subway is a thing.' },
        { id: 'A2205', type: 'name', skill: 'Name the part of speech', s: 'The neighbors cheered happily.', tags: 'x n v adv', word: 'happily',
          why: '“Happily” tells how the neighbors cheered.' },
        { id: 'A2206', type: 'tap', skill: 'Find the verb', s: 'Priya mailed a card to Grandma.', tags: 'n v x n x n', ask: 'v',
          why: '“Mailed” tells what Priya did.' },
        { id: 'A2207', type: 'name', skill: 'Name the part of speech', s: 'Six candles glowed on the cake.', tags: 'adj n v x x n', word: 'Six',
          why: '“Six” tells how many candles.' }
      ]
    ]
  },

  review: {
    cards: [
      { title: 'Remember: Ask the Questions',
        blocks: [
          { rows: [
            ['N',   'A noun names a person, place, thing, or idea. Dad, park, and gift are nouns.'],
            ['V',   'A verb shows an action. Ask: what did the noun do? Swam, rode, and sang are verbs.'],
            ['ADJ', 'An adjective describes a noun. Ask: what kind? how many? Big, cold, and six are adjectives.'],
            ['ADV', 'An adverb describes a verb. Ask: how? when? where? Calmly, soon, and away are adverbs.']
          ] },
          { tip: 'Many adverbs that tell how end in -ly. Gladly and proudly end in -ly.' }
        ] }
    ],
    versions: [
      [
        { id: 'A3101', type: 'tap', skill: 'Find the noun', s: 'Maya floated on a raft.', tags: 'n v x x n', ask: 'n',
          why: '“Maya” names a person. A raft is a thing.' },
        { id: 'A3102', type: 'name', skill: 'Name the part of speech', s: 'Hana followed a sandy path.', tags: 'n v x adj n', word: 'sandy',
          why: '“Sandy” tells what kind of path.' },
        { id: 'A3103', type: 'tap', skill: 'Find the verb', s: 'The bus crossed the bridge.', tags: 'x n v x n', ask: 'v',
          why: '“Crossed” tells what the bus did.' },
        { id: 'A3104', type: 'mc', skill: 'Pick the adverb', ask: 'adv',
          choices: ['gently', 'museum', 'salty', 'swam'], choiceTags: ['adv', 'n', 'adj', 'v'],
          why: '“Gently” tells how. Many adverbs that tell how end in -ly.' },
        { id: 'A3105', type: 'name', skill: 'Name the part of speech', s: 'Dad bought popcorn at the movies.', tags: 'n v n x x n', word: 'popcorn',
          why: 'Popcorn is a thing. Dad bought popcorn.' },
        { id: 'A3106', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Zoe built a ___ sandcastle.',
          choices: ['huge', 'slowly', 'dug', 'pencils'], choiceTags: ['adj', 'adv', 'v', 'n'],
          why: '“Huge” tells what kind of sandcastle.' },
        { id: 'A3107', type: 'tap', skill: 'Find the adjective', s: 'Jada took many pictures.', tags: 'n v adj n', ask: 'adj',
          why: '“Many” tells how many pictures.' },
        { id: 'A3108', type: 'name', skill: 'Name the part of speech', s: 'Ruby jumped over the waves.', tags: 'n v x x n', word: 'jumped',
          why: '“Jumped” tells what Ruby did. “Jumped” is an action.' },
        { id: 'A3109', type: 'tap', skill: 'Find the adverb', s: 'The plane landed safely.', tags: 'x n v adv', ask: 'adv',
          why: '“Safely” tells how the plane landed.' },
        { id: 'A3110', type: 'mc', skill: 'Find the noun', ask: 'n', s: 'The noisy crowd clapped loudly.', tags: 'x adj n v adv',
          choices: ['crowd', 'noisy', 'clapped', 'loudly'], choiceTags: ['n', 'adj', 'v', 'adv'],
          why: '“Crowd” names a group of people. “Crowd” is a noun.' },
        { id: 'A3111', type: 'name', skill: 'Name the part of speech', s: 'The tired kids napped upstairs.', tags: 'x adj n v adv', word: 'upstairs',
          why: '“Upstairs” tells where the kids napped.' },
        { id: 'A3112', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Omar ___ a kite at the beach.',
          choices: ['flew', 'sandy', 'softly', 'bucket'], choiceTags: ['v', 'adj', 'adv', 'n'],
          why: '“Flew” shows an action. Omar flew a kite at the beach.' }
      ],
      [
        { id: 'A3201', type: 'tap', skill: 'Find the adverb', s: 'Grandma hummed softly.', tags: 'n v adv', ask: 'adv',
          why: '“Softly” tells how Grandma hummed.' },
        { id: 'A3202', type: 'name', skill: 'Name the part of speech', s: 'Sam rode the train to Boston.', tags: 'n v x n x n', word: 'train',
          why: 'A train is a thing. “Train” is a noun.' },
        { id: 'A3203', type: 'tap', skill: 'Find the adjective', s: 'Dante baked a sweet pie.', tags: 'n v x adj n', ask: 'adj',
          why: '“Sweet” tells what kind of pie.' },
        { id: 'A3204', type: 'name', skill: 'Name the part of speech', s: 'Aria wrapped a gift for Mom.', tags: 'n v x n x n', word: 'wrapped',
          why: '“Wrapped” tells what Aria did.' },
        { id: 'A3205', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['hungry', 'quickly', 'library', 'ran'], choiceTags: ['adj', 'adv', 'n', 'v'],
          why: '“Hungry” tells what kind. A hungry dog wants food.' },
        { id: 'A3206', type: 'tap', skill: 'Find the noun', s: 'Malik visited the zoo.', tags: 'n v x n', ask: 'n',
          why: '“Malik” names a person. A zoo is a place.' },
        { id: 'A3207', type: 'fill', skill: 'Complete the sentence', ask: 'n', s: 'Ben bought a ticket at the ___.',
          choices: ['station', 'sunny', 'loudly', 'jumped'], choiceTags: ['n', 'adj', 'adv', 'v'],
          why: 'A station is a place. Ben bought a ticket at the station.' },
        { id: 'A3208', type: 'name', skill: 'Name the part of speech', s: 'Nia saw colorful balloons.', tags: 'n v adj n', word: 'colorful',
          why: '“Colorful” tells what kind of balloons.' },
        { id: 'A3209', type: 'tap', skill: 'Find the verb', s: 'Theo shoveled the snow.', tags: 'n v x n', ask: 'v',
          why: '“Shoveled” tells what Theo did.' },
        { id: 'A3210', type: 'name', skill: 'Name the part of speech', s: 'Rosa called Grandma yesterday.', tags: 'n v n adv', word: 'yesterday',
          why: '“Yesterday” tells when Rosa called Grandma.' },
        { id: 'A3211', type: 'mc', skill: 'Find the verb', ask: 'v', s: 'Mateo shared warm cocoa with Ana.', tags: 'n v adj n x n',
          choices: ['shared', 'warm', 'cocoa', 'Ana'], choiceTags: ['v', 'adj', 'n', 'n'],
          why: '“Shared” tells what Mateo did.' },
        { id: 'A3212', type: 'fill', skill: 'Complete the sentence', ask: 'adv', s: 'The taxi honked ___.',
          choices: ['loudly', 'yellow', 'street', 'parked'], choiceTags: ['adv', 'adj', 'n', 'v'],
          why: '“Loudly” tells how the taxi honked.' }
      ],
      [
        { id: 'A3301', type: 'tap', skill: 'Find the verb', s: 'Elena planted red flowers.', tags: 'n v adj n', ask: 'v',
          why: '“Planted” tells what Elena did.' },
        { id: 'A3302', type: 'name', skill: 'Name the part of speech', s: 'Grandpa and Noah ate outside.', tags: 'n x n v adv', word: 'outside',
          why: '“Outside” tells where Grandpa and Noah ate.' },
        { id: 'A3303', type: 'tap', skill: 'Find the noun', s: 'Ana rang the doorbell.', tags: 'n v x n', ask: 'n',
          why: '“Ana” names a person. A doorbell is a thing.' },
        { id: 'A3304', type: 'name', skill: 'Name the part of speech', s: 'Iris built a tall snowman.', tags: 'n v x adj n', word: 'tall',
          why: '“Tall” tells what kind of snowman.' },
        { id: 'A3305', type: 'fill', skill: 'Complete the sentence', ask: 'v', s: 'Leo ___ a pumpkin for Halloween.',
          choices: ['carved', 'sleepy', 'neatly', 'window'], choiceTags: ['v', 'adj', 'adv', 'n'],
          why: '“Carved” shows an action. Leo carved a pumpkin.' },
        { id: 'A3306', type: 'tap', skill: 'Find the adverb', s: 'The kids opened gifts today.', tags: 'x n v n adv', ask: 'adv',
          why: '“Today” tells when the kids opened gifts.' },
        { id: 'A3307', type: 'mc', skill: 'Pick the noun', ask: 'n',
          choices: ['neighbor', 'happily', 'tiny', 'dug'], choiceTags: ['n', 'adv', 'adj', 'v'],
          why: 'A neighbor is a person. “Neighbor” is a noun.' },
        { id: 'A3308', type: 'name', skill: 'Name the part of speech', s: 'Rafi swept the porch.', tags: 'n v x n', word: 'swept',
          why: '“Swept” tells what Rafi did.' },
        { id: 'A3309', type: 'tap', skill: 'Find the adjective', s: 'Hana picked five apples.', tags: 'n v adj n', ask: 'adj',
          why: '“Five” tells how many apples.' },
        { id: 'A3310', type: 'name', skill: 'Name the part of speech', s: 'Amir walked to the library.', tags: 'n v x x n', word: 'library',
          why: 'A library is a place. “Library” is a noun.' },
        { id: 'A3311', type: 'mc', skill: 'Find the adverb', ask: 'adv', s: 'Sofia hugged Grandma tightly.', tags: 'n v n adv',
          choices: ['tightly', 'hugged', 'Grandma'], choiceTags: ['adv', 'v', 'n'],
          why: '“Tightly” tells how Sofia hugged Grandma.' },
        { id: 'A3312', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Ruby drank ___ cocoa.',
          choices: ['hot', 'slowly', 'sang', 'pillows'], choiceTags: ['adj', 'adv', 'v', 'n'],
          why: '“Hot” tells what kind of cocoa.' }
      ]
    ]
  }
};
