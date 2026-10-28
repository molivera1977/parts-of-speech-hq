/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — ADJECTIVES (key adj, id letter J)
   Basics only (Marcos 10/27/2026): an adjective describes a noun; an adjective
   tells what kind or how many. No comparing (-er / -est), no "which one".
   "Describe" is taught on the first card. Mr. O's sheet rule: a, an, and the are
   never adjectives here. They are "glue words" (Mr. O 10/28; taught on Nouns
   card 1), tagged x everywhere, so no "a few" anywhere. "Several" and "many" are
   taught on card 4 before any question uses them (specialist M9, 10/28).
   Theme: animals, food, colors, weather. Adjectives sit right before the noun.
   No -y trick (critique 10/27): in every Practice and Review version the right
   adjective in pick-a-word mostly has no -y (soft, huge, proud, tall, gentle),
   and wrong choices and tap sentences carry -y NOUNS (puppy, pony, penny, city).
   Each `why` models the routine and names the answer (specialist H1, 10/28):
   "Look at the noun “frog.” What kind of frog? Green. “Green” is the adjective."
   Never "The noun is …": the note before it may have just called the picked word a noun.
   Format and rules: tools/CONTENT-SPEC.md · check: node tools/check-pos.js adj
═══════════════════════════════════════════════════════ */
window.POS_SETS = window.POS_SETS || {};
window.POS_SETS.adj = {

  /* ── LEARN: 6 cards, then a 6-question check ── */
  learn: {
    cards: [
      { title: 'A Word to Know', blocks: [
        { term: 'describe', means: 'to tell what a person, place, or thing is like', ex: 'A puppy can be soft, brown, and sleepy.' },
        { p: 'An apple can be red, sweet, and crunchy.' },
        { p: 'The weather can be cold, windy, and gray.' },
        { p: 'A frog can be green, small, and wet.' }
      ] },
      { title: 'Meet the Adjective', blocks: [
        { term: 'adjective', means: 'a word that describes a noun' },
        { sent: 'The fluffy puppy chewed a red ball.', tags: 'x adj n v x adj n', show: ['adj', 'n'],
          say: '“Fluffy” describes the puppy. “Red” describes the ball. Both words are adjectives.' },
        { sent: 'A cold wind blew across the beach.', tags: 'x adj n v x x n', show: ['adj', 'n'], say: '“Cold” is the adjective. “Cold” describes the wind.' },
        { p: 'An adjective often comes just before the noun.' }
      ] },
      { title: 'An Adjective Can Tell What Kind', blocks: [
        { words: ['red', 'tiny', 'soft', 'sweet', 'muddy'], tag: 'adj' },
        { p: '“Red” is a color word. “Tiny” is a size word.' },
        { p: '“Soft” tells what a thing feels like. “Sweet” tells what a food tastes like.' },
        { p: '“Muddy” tells what a thing looks like.' },
        { sent: 'The tiny mouse nibbled sweet cheese.', tags: 'x adj n v adj n', show: ['adj', 'n'],
          say: 'What kind of mouse? Tiny. What kind of cheese? Sweet. “Tiny” and “sweet” are adjectives.' }
      ] },
      { title: 'An Adjective Can Tell How Many', blocks: [
        { words: ['two', 'three', 'ten', 'several', 'many'], tag: 'adj' },
        { p: 'A number in front of a noun tells how many.' },
        { p: '“Several” means more than two, but not a lot. “Many” means a lot.' },
        { sent: 'Three ducks ate several crumbs.', tags: 'adj n v adj n', show: ['adj', 'n'],
          say: 'How many ducks? Three. How many crumbs? Several. “Three” and “several” are adjectives.' },
        { sent: 'Many frogs hopped onto two logs.', tags: 'adj n v x adj n', show: ['adj', 'n'],
          say: 'How many frogs? Many. How many logs? Two. “Many” and “two” are adjectives.' }
      ] },
      { title: 'How to Find the Adjective', blocks: [
        { rows: [['1', 'Find a noun.'], ['2', 'Ask yourself: What kind? How many?'], ['3', 'The word that answers is the adjective.']] },
        { sent: 'Zoe fed two hungry goats.', tags: 'n v adj adj n', show: ['adj', 'n'],
          say: 'Look at the noun “goats.” How many goats? Two. What kind of goats? Hungry. “Two” and “hungry” are adjectives.' },
        { tip: '“A,” “an,” and “the” are glue words. A glue word is never the answer here.' },
        { sent: 'A gray cloud covered the sun.', tags: 'x adj n v x n', show: 'adj',
          say: 'Look at the noun “cloud.” What kind of cloud? Gray. “Gray” is the adjective.' }
      ] },
      { title: 'Adjective or Not?', blocks: [
        { sent: 'Kai picked a juicy peach.', tags: 'n v x adj n', show: ['adj', 'n'] },
        { good: 'The word “juicy” is an adjective.', why: '“Juicy” tells what kind of peach.' },
        { bad: 'The word “peach” is not an adjective.', why: '“Peach” is a noun. A peach is a thing.' },
        { bad: 'The word “picked” is not an adjective.', why: '“Picked” is a verb. “Picked” shows an action.' },
        { bad: 'The word “a” is not the adjective.', why: '“A” is a glue word. A glue word is never the answer here.' }
      ] }
    ],
    versions: [
      [
        { id: 'J1101', type: 'tap', skill: 'Find the adjective', s: 'Luis found a green frog by the pond.', tags: 'n v x adj n x x n', ask: 'adj',
          why: 'Look at the noun “frog.” What kind of frog? Green. “Green” is the adjective.' },
        { id: 'J1102', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['soft', 'puppy', 'jumped', 'kitchen'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'A pillow can be soft. “Soft” is the adjective.' },
        { id: 'J1103', type: 'tap', skill: 'Find the adjective', s: 'Grace ate ten grapes for lunch.', tags: 'n v adj n x n', ask: 'adj',
          why: 'Look at the noun “grapes.” How many grapes? Ten. “Ten” is the adjective.' },
        { id: 'J1104', type: 'sort', skill: 'What kind or how many', s: 'The brown bear caught a big fish.', tags: 'x adj n v x adj n',
          word: 'brown', answer: 'what kind', why: 'What kind of bear? Brown. A color word tells what kind.' },
        { id: 'J1105', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Omar sipped hot soup in the kitchen.', tags: 'n v adj n x x n',
          choices: ['hot', 'soup', 'sipped', 'kitchen'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'Look at the noun “soup.” What kind of soup? Hot. “Hot” is the adjective.' },
        { id: 'J1106', type: 'tap', skill: 'Find the adjective', s: 'Several bees landed on the yellow flowers.', tags: 'adj n v x x adj n', ask: 'adj',
          why: 'Look at the nouns. How many bees? Several. What kind of flowers? Yellow. “Several” and “yellow” are adjectives.' }
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
        { sent: 'Two brown cows ate fresh grass.', tags: 'adj adj n v adj n', show: ['adj', 'n'],
          say: '“Two,” “brown,” and “fresh” are adjectives.' },
        { tip: 'Find a noun. Ask yourself: What kind? How many?' },
        { p: '“A,” “an,” and “the” are glue words. A glue word is never the answer here.' }
      ] }
    ],
    versions: [
      [
        { id: 'J2101', type: 'tap', skill: 'Find the adjective', s: 'A white pony rolled in the snow.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'Look at the noun “pony.” What kind of pony? White. “White” is the adjective.' },
        { id: 'J2102', type: 'tap', skill: 'Find the adjective', s: 'Nia baked six muffins for the class.', tags: 'n v adj n x x n', ask: 'adj',
          why: 'Look at the noun “muffins.” How many muffins? Six. “Six” is the adjective.' },
        { id: 'J2103', type: 'sort', skill: 'What kind or how many', s: 'Leo wore blue boots in the rain.', tags: 'n v adj n x x n',
          word: 'blue', answer: 'what kind', why: 'What kind of boots? Blue. A color word tells what kind.' },
        { id: 'J2104', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'The ___ kitten slept on a pillow.',
          choices: ['furry', 'penny', 'ran', 'under'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'Look at the noun “kitten.” What kind of kitten? Furry. “Furry” is the adjective.' },
        { id: 'J2105', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'The baby drank cold milk from a cup.', tags: 'x n v adj n x x n',
          choices: ['cold', 'baby', 'drank', 'milk'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'Look at the noun “milk.” What kind of milk? Cold. “Cold” is the adjective.' },
        { id: 'J2106', type: 'tap', skill: 'Find the adjective', s: 'Many clouds floated over Bridgeport.', tags: 'adj n v x n', ask: 'adj',
          why: 'Look at the noun “clouds.” How many clouds? Many. “Many” is the adjective.' },
        { id: 'J2107', type: 'name', skill: 'Name the part of speech', s: 'Mateo ate a crunchy carrot.', tags: 'n v x adj n', word: 'crunchy',
          why: 'Look at the noun “carrot.” What kind of carrot? Crunchy.' },
        { id: 'J2108', type: 'sort', skill: 'What kind or how many', s: 'Ana counted four bugs on a leaf.', tags: 'n v adj n x x n',
          word: 'four', answer: 'how many', why: 'How many bugs? Four. A number tells how many.' },
        { id: 'J2109', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Jamal fed ___ ducks at the pond.',
          choices: ['three', 'bunny', 'swam', 'into'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'Look at the noun “ducks.” How many ducks? Three. “Three” is the adjective.' },
        { id: 'J2110', type: 'tap', skill: 'Find the adjective', s: 'Sofia found a pink crab on the sand.', tags: 'n v x adj n x x n', ask: 'adj',
          why: 'Look at the noun “crab.” What kind of crab? Pink. “Pink” is the adjective.' }
      ],
      [
        { id: 'J2201', type: 'tap', skill: 'Find the adjective', s: 'A gray monkey swung from the tree.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'Look at the noun “monkey.” What kind of monkey? Gray. “Gray” is the adjective.' },
        { id: 'J2202', type: 'tap', skill: 'Find the adjective', s: 'Ben ate two tacos and a pear.', tags: 'n v adj n x x n', ask: 'adj',
          why: 'Look at the noun “tacos.” How many tacos? Two. “Two” is the adjective.' },
        { id: 'J2203', type: 'sort', skill: 'What kind or how many', s: 'Priya drank sweet lemonade at the park.', tags: 'n v adj n x x n',
          word: 'sweet', answer: 'what kind', why: 'What kind of lemonade? Sweet. “Sweet” tells what the lemonade tastes like.' },
        { id: 'J2204', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'A ___ wind shook the trees.',
          choices: ['cold', 'donkey', 'sang', 'with'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'Look at the noun “wind.” What kind of wind? Cold. “Cold” is the adjective.' },
        { id: 'J2205', type: 'name', skill: 'Name the part of speech', s: 'The shy puppy hid under the bed.', tags: 'x adj n v x x n', word: 'puppy',
          why: 'A puppy is a living thing. “Shy” tells what kind of puppy.' },
        { id: 'J2206', type: 'tap', skill: 'Find the adjective', s: 'Ten ants carried crumbs to the hill.', tags: 'adj n v n x x n', ask: 'adj',
          why: 'Look at the noun “ants.” How many ants? Ten. “Ten” is the adjective.' },
        { id: 'J2207', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['huge', 'penny', 'laughed', 'pencil'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'A whale can be huge. “Huge” is the adjective.' },
        { id: 'J2208', type: 'sort', skill: 'What kind or how many', s: 'Kai watched many seals on the rocks.', tags: 'n v adj n x x n',
          word: 'many', answer: 'how many', why: 'How many seals? Many. “Many” means a lot of seals.' },
        { id: 'J2209', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Zoe picked ___ strawberries for a snack.',
          choices: ['juicy', 'pony', 'drank', 'under'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'Look at the noun “strawberries.” What kind of strawberries? Juicy. “Juicy” is the adjective.' },
        { id: 'J2210', type: 'tap', skill: 'Find the adjective', s: 'Mateo stomped in the muddy puddles.', tags: 'n v x x adj n', ask: 'adj',
          why: 'Look at the noun “puddles.” What kind of puddles? Muddy. “Muddy” is the adjective.' }
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
        { sent: 'Four pink pigs rolled in the mud.', tags: 'adj adj n v x x n', show: ['adj', 'n'],
          say: '“Four” and “pink” are adjectives.' },
        { tip: 'Find a noun. Ask yourself: What kind? How many?' },
        { p: '“A,” “an,” and “the” are glue words. A glue word is never the answer here.' }
      ] }
    ],
    versions: [
      [
        { id: 'J3101', type: 'tap', skill: 'Find the adjective', s: 'A tiny snail crawled up the daisy.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'Look at the noun “snail.” What kind of snail? Tiny. “Tiny” is the adjective.' },
        { id: 'J3102', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['proud', 'pony', 'galloped', 'teacher'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'A dad can be proud. “Proud” is the adjective.' },
        { id: 'J3103', type: 'tap', skill: 'Find the adjective', s: 'Grace shared eight cookies with Nia.', tags: 'n v adj n x n', ask: 'adj',
          why: 'Look at the noun “cookies.” How many cookies? Eight. “Eight” is the adjective.' },
        { id: 'J3104', type: 'sort', skill: 'What kind or how many', s: 'Luis caught two crabs at the beach.', tags: 'n v adj n x x n',
          word: 'two', answer: 'how many', why: 'How many crabs? Two. A number tells how many.' },
        { id: 'J3105', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Rosa wore a ___ coat in the snow.',
          choices: ['warm', 'lemons', 'swam', 'with'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'Look at the noun “coat.” What kind of coat? Warm. “Warm” is the adjective.' },
        { id: 'J3106', type: 'name', skill: 'Name the part of speech', s: 'Priya tasted the spicy salsa.', tags: 'n v x adj n', word: 'spicy',
          why: 'Look at the noun “salsa.” What kind of salsa? Spicy.' },
        { id: 'J3107', type: 'tap', skill: 'Find the adjective', s: 'Several geese flew over the gray lake.', tags: 'adj n v x x adj n', ask: 'adj',
          why: 'Look at the nouns. How many geese? Several. What kind of lake? Gray. “Several” and “gray” are adjectives.' },
        { id: 'J3108', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'A hungry turkey pecked the corn.', tags: 'x adj n v x n',
          choices: ['hungry', 'turkey', 'pecked', 'corn'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'Look at the noun “turkey.” What kind of turkey? Hungry. “Hungry” is the adjective.' },
        { id: 'J3109', type: 'name', skill: 'Name the part of speech', s: 'The black cat napped on a soft rug.', tags: 'x adj n v x x adj n', word: 'napped',
          why: 'What did the cat do? The cat napped.' },
        { id: 'J3110', type: 'tap', skill: 'Find the adjective', s: 'The baby held a fresh peach.', tags: 'x n v x adj n', ask: 'adj',
          why: 'Look at the noun “peach.” What kind of peach? Fresh. “Fresh” is the adjective.' }
      ],
      [
        { id: 'J3201', type: 'tap', skill: 'Find the adjective', s: 'A brown horse trotted across the field.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'Look at the noun “horse.” What kind of horse? Brown. “Brown” is the adjective.' },
        { id: 'J3202', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['tall', 'daisy', 'giggled', 'library'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'A tree can be tall. “Tall” is the adjective.' },
        { id: 'J3203', type: 'tap', skill: 'Find the adjective', s: 'Maya baked nine pancakes for breakfast.', tags: 'n v adj n x n', ask: 'adj',
          why: 'Look at the noun “pancakes.” How many pancakes? Nine. “Nine” is the adjective.' },
        { id: 'J3204', type: 'sort', skill: 'What kind or how many', s: 'Ben petted the soft bunny at the farm.', tags: 'n v x adj n x x n',
          word: 'soft', answer: 'what kind', why: 'What kind of bunny? Soft. “Soft” tells what the bunny feels like.' },
        { id: 'J3205', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Leo held a ___ umbrella in the storm.',
          choices: ['yellow', 'turtles', 'ran', 'from'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'Look at the noun “umbrella.” What kind of umbrella? Yellow. “Yellow” is the adjective.' },
        { id: 'J3206', type: 'name', skill: 'Name the part of speech', s: 'Sofia washed the muddy pony.', tags: 'n v x adj n', word: 'pony',
          why: 'A pony is a living thing. “Muddy” tells what kind of pony.' },
        { id: 'J3207', type: 'tap', skill: 'Find the adjective', s: 'Three robins sang in the warm sun.', tags: 'adj n v x x adj n', ask: 'adj',
          why: 'Look at the nouns. How many robins? Three. What kind of sun? Warm. “Three” and “warm” are adjectives.' },
        { id: 'J3208', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Kai stirred lumpy gravy in a pot.', tags: 'n v adj n x x n',
          choices: ['lumpy', 'gravy', 'stirred', 'pot'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'Look at the noun “gravy.” What kind of gravy? Lumpy. “Lumpy” is the adjective.' },
        { id: 'J3209', type: 'name', skill: 'Name the part of speech', s: 'The wet dog shook in the rain.', tags: 'x adj n v x x n', word: 'wet',
          why: 'Look at the noun “dog.” What kind of dog? Wet.' },
        { id: 'J3210', type: 'tap', skill: 'Find the adjective', s: 'Zoe saw a purple beetle in the garden.', tags: 'n v x adj n x x n', ask: 'adj',
          why: 'Look at the noun “beetle.” What kind of beetle? Purple. “Purple” is the adjective.' }
      ],
      [
        { id: 'J3301', type: 'tap', skill: 'Find the adjective', s: 'A noisy seagull flew over the city.', tags: 'x adj n v x x n', ask: 'adj',
          why: 'Look at the noun “seagull.” What kind of seagull? Noisy. “Noisy” is the adjective.' },
        { id: 'J3302', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['gentle', 'city', 'sneezed', 'basket'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: 'A hug can be gentle. “Gentle” is the adjective.' },
        { id: 'J3303', type: 'tap', skill: 'Find the adjective', s: 'Omar peeled four oranges at the park.', tags: 'n v adj n x x n', ask: 'adj',
          why: 'Look at the noun “oranges.” How many oranges? Four. “Four” is the adjective.' },
        { id: 'J3304', type: 'sort', skill: 'What kind or how many', s: 'Grace found several worms in the dirt.', tags: 'n v adj n x x n',
          word: 'several', answer: 'how many', why: 'How many worms? Several. “Several” means more than two worms, but not a lot.' },
        { id: 'J3305', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'The ___ sun melted the snowman.',
          choices: ['hot', 'puppy', 'ate', 'over'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: 'Look at the noun “sun.” What kind of sun? Hot. “Hot” is the adjective.' },
        { id: 'J3306', type: 'name', skill: 'Name the part of speech', s: 'Luis chased a green lizard.', tags: 'n v x adj n', word: 'chased',
          why: 'What did Luis do? Luis chased a lizard.' },
        { id: 'J3307', type: 'tap', skill: 'Find the adjective', s: 'Two sleepy foxes hid under the bush.', tags: 'adj adj n v x x n', ask: 'adj',
          why: 'Look at the noun “foxes.” How many foxes? Two. What kind of foxes? Sleepy. “Two” and “sleepy” are adjectives.' },
        { id: 'J3308', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Leo licked a sour candy.', tags: 'n v x adj n',
          choices: ['sour', 'candy', 'licked'], choiceTags: ['adj', 'n', 'v'],
          why: 'Look at the noun “candy.” What kind of candy? Sour. “Sour” is the adjective.' },
        { id: 'J3309', type: 'name', skill: 'Name the part of speech', s: 'Kai wore a red hat to the game.', tags: 'n v x adj n x x n', word: 'red',
          why: 'Look at the noun “hat.” What kind of hat? Red.' },
        { id: 'J3310', type: 'tap', skill: 'Find the adjective', s: 'Ana watched the stormy sky.', tags: 'n v x adj n', ask: 'adj',
          why: 'Look at the noun “sky.” What kind of sky? Stormy. “Stormy” is the adjective.' }
      ]
    ]
  }
};
