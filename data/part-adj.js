/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — ADJECTIVES (key adj, id letter J)
   Basics only (Marcos 10/27/2026): an adjective describes a noun; an adjective
   tells what kind or how many. No comparing (-er / -est), no "which one".
   "Describe" is taught on the first card. Mr. O's sheet rule: we do not count
   a, an, or the as adjectives (tagged x everywhere), so no "a few" anywhere.
   Theme: animals, food, colors, weather. Adjectives sit right before the noun.
   No -y trick (critique 10/27): in every Practice and Review version the right
   adjective in pick-a-word mostly has no -y (soft, huge, proud, tall, gentle),
   and wrong choices and tap sentences carry -y NOUNS (puppy, pony, penny, city).
   Each `why` models the routine: "The noun is “frog”. What kind of frog? Green."
   Format and rules: tools/CONTENT-SPEC.md · check: node tools/check-pos.js adj
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.adj = {

  /* ── LEARN: 6 cards, then a 6-question check ── */
  learn: {
    cards: [
      { title: 'Describe Means to Tell About', blocks: [
        { term: 'describe', means: 'to tell what a person, place, or thing is like', ex: 'You can describe your shoes: red, new, muddy.' },
        { p: 'Describe a puppy: soft, brown, sleepy.' },
        { p: 'Describe an apple: red, sweet, crunchy.' },
        { p: 'Describe the weather: cold, windy, gray.' },
        { p: 'Describe a frog: green, small, wet.' },
        { tip: 'To describe a thing, tell what the thing is like.' }
      ] },
      { title: 'An Adjective Describes a Noun', blocks: [
        { term: 'adjective', means: 'a word that describes a noun', ex: 'Soft, green, and sweet are adjectives.' },
        { sent: 'The fluffy puppy chewed a red ball.', tags: 'x adj n v x adj n', show: ['adj', 'n'],
          say: '“Fluffy” describes the puppy. “Red” describes the ball.' },
        { sent: 'Maya ate a sweet plum.', tags: 'n v x adj n', show: ['adj', 'n'], say: '“Sweet” describes the plum.' },
        { sent: 'A cold wind blew across the beach.', tags: 'x adj n v x x n', show: ['adj', 'n'], say: '“Cold” describes the wind.' },
        { sent: 'Grace hugged a gentle horse.', tags: 'n v x adj n', show: ['adj', 'n'], say: '“Gentle” describes the horse.' },
        { p: 'An adjective often comes just before the noun.' }
      ] },
      { title: 'An Adjective Can Tell What Kind', blocks: [
        { p: 'Many adjectives tell what kind.' },
        { words: ['red', 'tiny', 'soft', 'sweet', 'muddy'], tag: 'adj' },
        { p: '“Red” tells a color. “Tiny” tells a size.' },
        { p: '“Soft” tells what a thing feels like. “Sweet” tells what a food tastes like.' },
        { p: '“Muddy” tells what a thing looks like.' },
        { sent: 'The tiny mouse nibbled sweet cheese.', tags: 'x adj n v adj n', show: ['adj', 'n'],
          say: 'What kind of mouse? Tiny. What kind of cheese? Sweet.' }
      ] },
      { title: 'An Adjective Can Tell How Many', blocks: [
        { p: 'Some adjectives tell how many.' },
        { words: ['two', 'three', 'ten', 'several', 'many'], tag: 'adj' },
        { p: 'A number tells how many. “Several” and “many” tell how many, too.' },
        { sent: 'Three ducks ate several crumbs.', tags: 'adj n v adj n', show: ['adj', 'n'],
          say: 'How many ducks? Three. How many crumbs? Several.' },
        { sent: 'Many frogs hopped onto two logs.', tags: 'adj n v x adj n', show: ['adj', 'n'],
          say: 'How many frogs? Many. How many logs? Two.' }
      ] },
      { title: 'How to Find the Adjective', blocks: [
        { rows: [['1', 'Find the noun.'], ['2', 'Ask: What kind? How many?'], ['3', 'The word that answers is the adjective.']] },
        { sent: 'Zoe fed two hungry goats.', tags: 'n v adj adj n', show: ['adj', 'n'],
          say: 'The noun is “goats”. How many goats? Two. What kind of goats? Hungry.' },
        { tip: 'We do not count a, an, or the as adjectives.' },
        { sent: 'A gray cloud covered the sun.', tags: 'x adj n v x n', show: 'adj',
          say: '“A” and “the” do not count. “Gray” tells what kind of cloud.' }
      ] },
      { title: 'Adjective or Not?', blocks: [
        { sent: 'Kai picked a juicy peach.', tags: 'n v x adj n', show: ['adj', 'n'] },
        { good: 'The word “juicy” is an adjective.', why: '“Juicy” tells what kind of peach.' },
        { bad: 'The word “peach” is not an adjective.', why: '“Peach” is a noun. A peach is a thing.' },
        { bad: 'The word “picked” is not an adjective.', why: '“Picked” is a verb. “Picked” shows an action.' },
        { bad: 'The word “a” is not an adjective.', why: 'We do not count a, an, or the.' }
      ] }
    ],
    versions: [
      [
        { id: 'J1101', type: 'tap', skill: 'Find the adjective', s: 'Luis found a green frog by the pond.', tags: 'n v x adj n x x n', ask: 'adj',
          why: 'The noun is “frog”. What kind of frog? Green.' },
        { id: 'J1102', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['soft', 'puppy', 'jumped', 'kitchen'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'What kind of pillow? A soft pillow.' },
        { id: 'J1103', type: 'tap', skill: 'Find the adjective', s: 'Grace ate ten grapes for lunch.', tags: 'n v adj n x n', ask: 'adj',
          why: 'How many grapes? Ten.' },
        { id: 'J1104', type: 'sort', skill: 'What kind or how many', s: 'The brown bear caught a big fish.', tags: 'x adj n v x adj n',
          word: 'brown', answer: 'what kind', why: 'What kind of bear? Brown. A color tells what kind.' },
        { id: 'J1105', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Omar sipped hot soup in the kitchen.', tags: 'n v adj n x x n',
          choices: ['hot', 'soup', 'sipped', 'kitchen'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'The noun is “soup”. What kind of soup? Hot.' },
        { id: 'J1106', type: 'tap', skill: 'Find the adjective', s: 'Several bees landed on the yellow flowers.', tags: 'adj n v x x adj n', ask: 'adj',
          why: 'How many bees? Several. What kind of flowers? Yellow.' }
      ]
    ]
  },

  /* ── PRACTICE: Remember card, then 10 questions × 2 versions ── */
  practice: {
    cards: [
      { title: 'Remember: Adjectives', blocks: [
        { term: 'adjective', means: 'a word that describes a noun' },
        { p: 'An adjective tells what kind or how many.' },
        { words: ['soft', 'green', 'sweet', 'two', 'many'], tag: 'adj' },
        { sent: 'Two brown cows ate fresh grass.', tags: 'adj adj n v adj n', show: ['adj', 'n'] },
        { tip: 'Find the noun. Ask: What kind? How many?' },
        { p: 'We do not count a, an, or the.' }
      ] }
    ],
    versions: [
      [
        { id: 'J2101', type: 'tap', skill: 'Find the adjective', s: 'A white pony rolled in the snow.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'The noun is “pony”. What kind of pony? White.' },
        { id: 'J2102', type: 'tap', skill: 'Find the adjective', s: 'Nia baked six muffins for the class.', tags: 'n v adj n x x n', ask: 'adj',
          why: 'How many muffins? Six.' },
        { id: 'J2103', type: 'sort', skill: 'What kind or how many', s: 'Leo wore blue boots in the rain.', tags: 'n v adj n x x n',
          word: 'blue', answer: 'what kind', why: 'What kind of boots? Blue. A color tells what kind.' },
        { id: 'J2104', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'The ___ kitten slept on a pillow.',
          choices: ['furry', 'penny', 'ran', 'under'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'The noun is “kitten”. What kind of kitten? Furry.' },
        { id: 'J2105', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'The baby drank cold milk from a cup.', tags: 'x n v adj n x x n',
          choices: ['cold', 'baby', 'drank', 'milk'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'The noun is “milk”. What kind of milk? Cold.' },
        { id: 'J2106', type: 'tap', skill: 'Find the adjective', s: 'Many clouds floated over Bridgeport.', tags: 'adj n v x n', ask: 'adj',
          why: 'How many clouds? Many.' },
        { id: 'J2107', type: 'name', skill: 'Name the part of speech', s: 'Mateo ate a crunchy carrot.', tags: 'n v x adj n', word: 'crunchy',
          why: 'The noun is “carrot”. What kind of carrot? Crunchy.' },
        { id: 'J2108', type: 'sort', skill: 'What kind or how many', s: 'Ana counted four bugs on a leaf.', tags: 'n v adj n x x n',
          word: 'four', answer: 'how many', why: 'How many bugs? Four. A number tells how many.' },
        { id: 'J2109', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Jamal fed ___ ducks at the pond.',
          choices: ['three', 'bunny', 'swam', 'into'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'How many ducks? Three.' },
        { id: 'J2110', type: 'tap', skill: 'Find the adjective', s: 'Sofia found a pink crab on the sand.', tags: 'n v x adj n x x n', ask: 'adj',
          why: 'The noun is “crab”. What kind of crab? Pink.' }
      ],
      [
        { id: 'J2201', type: 'tap', skill: 'Find the adjective', s: 'A gray monkey swung from the tree.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'The noun is “monkey”. What kind of monkey? Gray.' },
        { id: 'J2202', type: 'tap', skill: 'Find the adjective', s: 'Ben ate two tacos and a pear.', tags: 'n v adj n x x n', ask: 'adj',
          why: 'How many tacos? Two.' },
        { id: 'J2203', type: 'sort', skill: 'What kind or how many', s: 'Priya drank sweet lemonade at the park.', tags: 'n v adj n x x n',
          word: 'sweet', answer: 'what kind', why: 'What kind of lemonade? Sweet. “Sweet” tells what the lemonade tastes like.' },
        { id: 'J2204', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'A ___ wind shook the trees.',
          choices: ['cold', 'donkey', 'sang', 'with'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'The noun is “wind”. What kind of wind? Cold.' },
        { id: 'J2205', type: 'name', skill: 'Name the part of speech', s: 'The shy puppy hid under the bed.', tags: 'x adj n v x x n', word: 'puppy',
          why: 'A puppy is a living thing. “Shy” tells what kind of puppy.' },
        { id: 'J2206', type: 'tap', skill: 'Find the adjective', s: 'Ten ants carried crumbs to the hill.', tags: 'adj n v n x x n', ask: 'adj',
          why: 'How many ants? Ten.' },
        { id: 'J2207', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['huge', 'penny', 'laughed', 'pencil'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'What kind of whale? A huge whale.' },
        { id: 'J2208', type: 'sort', skill: 'What kind or how many', s: 'Kai watched many seals on the rocks.', tags: 'n v adj n x x n',
          word: 'many', answer: 'how many', why: 'How many seals? Many. “Many” means a lot of seals.' },
        { id: 'J2209', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Zoe picked ___ strawberries for a snack.',
          choices: ['juicy', 'pony', 'drank', 'under'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'The noun is “strawberries”. What kind of strawberries? Juicy.' },
        { id: 'J2210', type: 'tap', skill: 'Find the adjective', s: 'Mateo stomped in the muddy puddles.', tags: 'n v x x adj n', ask: 'adj',
          why: 'The noun is “puddles”. What kind of puddles? Muddy.' }
      ]
    ]
  },

  /* ── REVIEW: Remember card, then 10 questions × 3 versions (75% passes) ── */
  review: {
    cards: [
      { title: 'Remember: Adjectives', blocks: [
        { term: 'adjective', means: 'a word that describes a noun' },
        { p: 'An adjective tells what kind or how many.' },
        { words: ['tiny', 'cold', 'sour', 'five', 'several'], tag: 'adj' },
        { sent: 'Four pink pigs rolled in the mud.', tags: 'adj adj n v x x n', show: ['adj', 'n'] },
        { tip: 'Find the noun. Ask: What kind? How many?' },
        { p: 'We do not count a, an, or the.' }
      ] }
    ],
    versions: [
      [
        { id: 'J3101', type: 'tap', skill: 'Find the adjective', s: 'A tiny snail crawled up the daisy.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'The noun is “snail”. What kind of snail? Tiny.' },
        { id: 'J3102', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['proud', 'pony', 'galloped', 'teacher'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'What kind of dad? A proud dad.' },
        { id: 'J3103', type: 'tap', skill: 'Find the adjective', s: 'Grace shared eight cookies with Nia.', tags: 'n v adj n x n', ask: 'adj',
          why: 'How many cookies? Eight.' },
        { id: 'J3104', type: 'sort', skill: 'What kind or how many', s: 'Luis caught two crabs at the beach.', tags: 'n v adj n x x n',
          word: 'two', answer: 'how many', why: 'How many crabs? Two. A number tells how many.' },
        { id: 'J3105', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Rosa wore a ___ coat in the snow.',
          choices: ['warm', 'lemons', 'swam', 'with'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'The noun is “coat”. What kind of coat? Warm.' },
        { id: 'J3106', type: 'name', skill: 'Name the part of speech', s: 'Priya tasted the spicy salsa.', tags: 'n v x adj n', word: 'spicy',
          why: 'The noun is “salsa”. What kind of salsa? Spicy.' },
        { id: 'J3107', type: 'tap', skill: 'Find the adjective', s: 'Several geese flew over the gray lake.', tags: 'adj n v x x adj n', ask: 'adj',
          why: 'How many geese? Several. What kind of lake? Gray.' },
        { id: 'J3108', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'A hungry turkey pecked the corn.', tags: 'x adj n v x n',
          choices: ['hungry', 'turkey', 'pecked', 'corn'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'The noun is “turkey”. What kind of turkey? Hungry.' },
        { id: 'J3109', type: 'name', skill: 'Name the part of speech', s: 'The black cat napped on a soft rug.', tags: 'x adj n v x x adj n', word: 'napped',
          why: 'What did the cat do? The cat napped.' },
        { id: 'J3110', type: 'tap', skill: 'Find the adjective', s: 'The baby held a fresh peach.', tags: 'x n v x adj n', ask: 'adj',
          why: 'The noun is “peach”. What kind of peach? Fresh.' }
      ],
      [
        { id: 'J3201', type: 'tap', skill: 'Find the adjective', s: 'A brown horse trotted across the field.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'The noun is “horse”. What kind of horse? Brown.' },
        { id: 'J3202', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['tall', 'daisy', 'giggled', 'library'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'What kind of tree? A tall tree.' },
        { id: 'J3203', type: 'tap', skill: 'Find the adjective', s: 'Maya baked nine pancakes for breakfast.', tags: 'n v adj n x n', ask: 'adj',
          why: 'How many pancakes? Nine.' },
        { id: 'J3204', type: 'sort', skill: 'What kind or how many', s: 'Ben petted the soft bunny at the farm.', tags: 'n v x adj n x x n',
          word: 'soft', answer: 'what kind', why: 'What kind of bunny? Soft. “Soft” tells what the bunny feels like.' },
        { id: 'J3205', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Leo held a ___ umbrella in the storm.',
          choices: ['yellow', 'turtles', 'ran', 'from'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'The noun is “umbrella”. What kind of umbrella? Yellow.' },
        { id: 'J3206', type: 'name', skill: 'Name the part of speech', s: 'Sofia washed the muddy pony.', tags: 'n v x adj n', word: 'pony',
          why: 'A pony is a living thing. “Muddy” tells what kind of pony.' },
        { id: 'J3207', type: 'tap', skill: 'Find the adjective', s: 'Three robins sang in the warm sun.', tags: 'adj n v x x adj n', ask: 'adj',
          why: 'How many robins? Three. What kind of sun? Warm.' },
        { id: 'J3208', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Kai stirred lumpy gravy in a pot.', tags: 'n v adj n x x n',
          choices: ['lumpy', 'gravy', 'stirred', 'pot'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'The noun is “gravy”. What kind of gravy? Lumpy.' },
        { id: 'J3209', type: 'name', skill: 'Name the part of speech', s: 'The wet dog shook in the rain.', tags: 'x adj n v x x n', word: 'wet',
          why: 'The noun is “dog”. What kind of dog? Wet.' },
        { id: 'J3210', type: 'tap', skill: 'Find the adjective', s: 'Zoe saw a purple butterfly in the garden.', tags: 'n v x adj n x x n', ask: 'adj',
          why: 'The noun is “butterfly”. What kind of butterfly? Purple.' }
      ],
      [
        { id: 'J3301', type: 'tap', skill: 'Find the adjective', s: 'A noisy seagull flew over the city.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'The noun is “seagull”. What kind of seagull? Noisy.' },
        { id: 'J3302', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['gentle', 'city', 'sneezed', 'basket'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'What kind of hug? A gentle hug.' },
        { id: 'J3303', type: 'tap', skill: 'Find the adjective', s: 'Omar peeled four oranges at the park.', tags: 'n v adj n x x n', ask: 'adj',
          why: 'How many oranges? Four.' },
        { id: 'J3304', type: 'sort', skill: 'What kind or how many', s: 'Grace found several worms in the dirt.', tags: 'n v adj n x x n',
          word: 'several', answer: 'how many', why: 'How many worms? Several. “Several” means some worms, but not a lot.' },
        { id: 'J3305', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'The ___ sun melted the snowman.',
          choices: ['hot', 'puppy', 'ate', 'over'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'The noun is “sun”. What kind of sun? Hot.' },
        { id: 'J3306', type: 'name', skill: 'Name the part of speech', s: 'Luis chased a green lizard.', tags: 'n v x adj n', word: 'chased',
          why: 'What did Luis do? Luis chased a lizard.' },
        { id: 'J3307', type: 'tap', skill: 'Find the adjective', s: 'Two sleepy foxes hid under the bush.', tags: 'adj adj n v x x n', ask: 'adj',
          why: 'How many foxes? Two. What kind of foxes? Sleepy.' },
        { id: 'J3308', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Leo licked a sour candy.', tags: 'n v x adj n',
          choices: ['sour', 'candy', 'licked'], choiceTags: ['adj', 'n', 'v'],
          why: 'The noun is “candy”. What kind of candy? Sour.' },
        { id: 'J3309', type: 'name', skill: 'Name the part of speech', s: 'Kai wore a red hat to the game.', tags: 'n v x adj n x x n', word: 'red',
          why: 'The noun is “hat”. What kind of hat? Red.' },
        { id: 'J3310', type: 'tap', skill: 'Find the adjective', s: 'Ana watched the stormy sky.', tags: 'n v x adj n', ask: 'adj',
          why: 'The noun is “sky”. What kind of sky? Stormy.' }
      ]
    ]
  }
};
