/* ═══════════════════════════════════════════════════════
   PARTS OF SPEECH HQ — ADJECTIVES (key adj, id letter J)
   Basics only (Marcos 10/27/2026): an adjective describes a noun; an adjective
   tells what kind or how many. No comparing (-er / -est), no "which one".
   "Describe" is taught on the first card. Mr. O's sheet rule: we do not count
   a, an, or the as adjectives (tagged x everywhere).
   Theme: animals, food, colors, weather. Adjectives sit right before the noun.
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
        { words: ['three', 'ten', 'several', 'many', 'few'], tag: 'adj' },
        { p: 'A number tells how many: two, three, ten.' },
        { p: '“Several,” “many,” and “few” tell how many, too.' },
        { sent: 'Three ducks ate several crumbs.', tags: 'adj n v adj n', show: ['adj', 'n'],
          say: 'How many ducks? Three. How many crumbs? Several.' },
        { sent: 'A few frogs hopped onto two logs.', tags: 'x adj n v x adj n', show: ['adj', 'n'],
          say: 'How many frogs? A few. How many logs? Two.' }
      ] },
      { title: 'How to Find the Adjective', blocks: [
        { rows: [['1', 'Find the noun.'], ['2', 'Ask: What kind? How many?'], ['3', 'The word that answers is the adjective.']] },
        { sent: 'Zoe fed two hungry goats.', tags: 'n v adj adj n', show: ['adj', 'n'],
          say: 'The noun is “goats.” How many goats? Two. What kind of goats? Hungry.' },
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
          why: '“Green” tells what kind of frog. Green is a color.' },
        { id: 'J1102', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['fluffy', 'kitchen', 'jumped', 'carrot'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: '“Fluffy” tells what kind, like a fluffy kitten.' },
        { id: 'J1103', type: 'tap', skill: 'Find the adjective', s: 'Grace ate ten grapes for lunch.', tags: 'n v adj n x n', ask: 'adj',
          why: '“Ten” tells how many grapes.' },
        { id: 'J1104', type: 'sort', skill: 'What kind or how many', s: 'The brown bear caught a big fish.', tags: 'x adj n v x adj n',
          word: 'brown', answer: 'what kind', why: '“Brown” is a color. “Brown” tells what kind of bear.' },
        { id: 'J1105', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Omar sipped hot soup in the kitchen.', tags: 'n v adj n x x n',
          choices: ['hot', 'soup', 'sipped', 'kitchen'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: '“Hot” tells what kind of soup.' },
        { id: 'J1106', type: 'tap', skill: 'Find the adjective', s: 'Several bees landed on the yellow flowers.', tags: 'adj n v x x adj n', ask: 'adj',
          why: '“Several” tells how many bees. “Yellow” tells what kind of flowers.' }
      ]
    ]
  },

  /* ── PRACTICE: Remember card, then 10 questions × 2 versions ── */
  practice: {
    cards: [
      { title: 'Remember: Adjectives', blocks: [
        { term: 'adjective', means: 'a word that describes a noun', ex: 'An adjective tells what kind or how many.' },
        { words: ['soft', 'green', 'sweet', 'two', 'many'], tag: 'adj' },
        { sent: 'Two brown cows ate fresh grass.', tags: 'adj adj n v adj n', show: ['adj', 'n'] },
        { tip: 'Find the noun. Ask: What kind? How many?' },
        { p: 'We do not count a, an, or the.' }
      ] }
    ],
    versions: [
      [
        { id: 'J2101', type: 'tap', skill: 'Find the adjective', s: 'The hungry fox dug in the snow.', tags: 'x adj n v x x n', ask: 'adj',
          why: '“Hungry” tells what kind of fox.' },
        { id: 'J2102', type: 'tap', skill: 'Find the adjective', s: 'Nia baked six muffins for the class.', tags: 'n v adj n x x n', ask: 'adj',
          why: '“Six” tells how many muffins.' },
        { id: 'J2103', type: 'sort', skill: 'What kind or how many', s: 'Leo wore blue boots in the rain.', tags: 'n v adj n x x n',
          word: 'blue', answer: 'what kind', why: '“Blue” is a color. “Blue” tells what kind of boots.' },
        { id: 'J2104', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'The ___ kitten slept on a pillow.',
          choices: ['furry', 'spoons', 'ran', 'under'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: '“Furry” tells what kind of kitten.' },
        { id: 'J2105', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Rosa poured cold milk into a cup.', tags: 'n v adj n x x n',
          choices: ['cold', 'milk', 'poured', 'cup'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: '“Cold” tells what kind of milk.' },
        { id: 'J2106', type: 'tap', skill: 'Find the adjective', s: 'Many clouds floated over Bridgeport.', tags: 'adj n v x n', ask: 'adj',
          why: '“Many” tells how many clouds.' },
        { id: 'J2107', type: 'name', skill: 'Name the part of speech', s: 'Mateo ate a crunchy carrot.', tags: 'n v x adj n', word: 'crunchy',
          why: '“Crunchy” tells what kind of carrot. “Crunchy” is an adjective.' },
        { id: 'J2108', type: 'sort', skill: 'What kind or how many', s: 'Ana counted four bugs on a leaf.', tags: 'n v adj n x x n',
          word: 'four', answer: 'how many', why: '“Four” is a number. “Four” tells how many bugs.' },
        { id: 'J2109', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Jamal fed ___ ducks at the pond.',
          choices: ['three', 'shoes', 'swam', 'into'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: '“Three” tells how many ducks.' },
        { id: 'J2110', type: 'tap', skill: 'Find the adjective', s: 'Sofia found a pink crab on the sand.', tags: 'n v x adj n x x n', ask: 'adj',
          why: '“Pink” tells what kind of crab.' }
      ],
      [
        { id: 'J2201', type: 'tap', skill: 'Find the adjective', s: 'A gray squirrel buried nuts in the yard.', tags: 'x adj n v n x x n', ask: 'adj',
          why: '“Gray” tells what kind of squirrel.' },
        { id: 'J2202', type: 'tap', skill: 'Find the adjective', s: 'Ben ate two tacos and a pear.', tags: 'n v adj n x x n', ask: 'adj',
          why: '“Two” tells how many tacos.' },
        { id: 'J2203', type: 'sort', skill: 'What kind or how many', s: 'Priya drank sweet lemonade at the park.', tags: 'n v adj n x x n',
          word: 'sweet', answer: 'what kind', why: '“Sweet” tells what kind of lemonade.' },
        { id: 'J2204', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'A ___ wind shook the trees.',
          choices: ['cold', 'apples', 'sang', 'with'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: '“Cold” tells what kind of wind.' },
        { id: 'J2205', type: 'name', skill: 'Name the part of speech', s: 'The white owl hooted at the moon.', tags: 'x adj n v x x n', word: 'owl',
          why: 'An owl is a living thing. “Owl” is a noun.' },
        { id: 'J2206', type: 'tap', skill: 'Find the adjective', s: 'Ten ants carried crumbs to the hill.', tags: 'adj n v n x x n', ask: 'adj',
          why: '“Ten” tells how many ants.' },
        { id: 'J2207', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['sunny', 'umbrella', 'laughed', 'pencil'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: '“Sunny” tells what kind, like a sunny day.' },
        { id: 'J2208', type: 'sort', skill: 'What kind or how many', s: 'Kai watched many seals on the rocks.', tags: 'n v adj n x x n',
          word: 'many', answer: 'how many', why: '“Many” tells how many seals.' },
        { id: 'J2209', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Zoe picked ___ strawberries for a snack.',
          choices: ['juicy', 'forks', 'drank', 'under'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: '“Juicy” tells what kind of strawberries.' },
        { id: 'J2210', type: 'tap', skill: 'Find the adjective', s: 'Mateo stomped in the muddy puddles.', tags: 'n v x x adj n', ask: 'adj',
          why: '“Muddy” tells what kind of puddles.' }
      ]
    ]
  },

  /* ── REVIEW: Remember card, then 10 questions × 3 versions (75% passes) ── */
  review: {
    cards: [
      { title: 'Remember: Adjectives', blocks: [
        { term: 'adjective', means: 'a word that describes a noun', ex: 'An adjective tells what kind or how many.' },
        { words: ['tiny', 'cold', 'sour', 'five', 'several'], tag: 'adj' },
        { sent: 'Four pink pigs rolled in the mud.', tags: 'adj adj n v x x n', show: ['adj', 'n'] },
        { tip: 'Find the noun. Ask: What kind? How many?' },
        { p: 'We do not count a, an, or the.' }
      ] }
    ],
    versions: [
      [
        { id: 'J3101', type: 'tap', skill: 'Find the adjective', s: 'A tiny snail crawled up the wall.', tags: 'x adj n v x x n', ask: 'adj',
          why: '“Tiny” tells what kind of snail.' },
        { id: 'J3102', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['hungry', 'pillow', 'galloped', 'teacher'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: '“Hungry” tells what kind, like a hungry dog.' },
        { id: 'J3103', type: 'tap', skill: 'Find the adjective', s: 'Grace shared eight cookies with Nia.', tags: 'n v adj n x n', ask: 'adj',
          why: '“Eight” tells how many cookies.' },
        { id: 'J3104', type: 'sort', skill: 'What kind or how many', s: 'Luis caught two crabs at the beach.', tags: 'n v adj n x x n',
          word: 'two', answer: 'how many', why: '“Two” is a number. “Two” tells how many crabs.' },
        { id: 'J3105', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Rosa wore a ___ coat in the snow.',
          choices: ['warm', 'lemons', 'swam', 'with'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: '“Warm” tells what kind of coat.' },
        { id: 'J3106', type: 'name', skill: 'Name the part of speech', s: 'Priya tasted the spicy salsa.', tags: 'n v x adj n', word: 'spicy',
          why: '“Spicy” tells what kind of salsa. “Spicy” is an adjective.' },
        { id: 'J3107', type: 'tap', skill: 'Find the adjective', s: 'Several geese flew over the gray lake.', tags: 'adj n v x x adj n', ask: 'adj',
          why: '“Several” tells how many geese. “Gray” tells what kind of lake.' },
        { id: 'J3108', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Jamal munched a salty pretzel.', tags: 'n v x adj n',
          choices: ['salty', 'pretzel', 'munched'], choiceTags: ['adj', 'n', 'v'],
          why: '“Salty” tells what kind of pretzel.' },
        { id: 'J3109', type: 'name', skill: 'Name the part of speech', s: 'The black cat napped on a soft rug.', tags: 'x adj n v x x adj n', word: 'napped',
          why: '“Napped” tells what the cat did. “Napped” is a verb.' },
        { id: 'J3110', type: 'tap', skill: 'Find the adjective', s: 'Ana tossed fresh berries in a bowl.', tags: 'n v adj n x x n', ask: 'adj',
          why: '“Fresh” tells what kind of berries.' }
      ],
      [
        { id: 'J3201', type: 'tap', skill: 'Find the adjective', s: 'A brown horse trotted across the field.', tags: 'x adj n v x x n', ask: 'adj',
          why: '“Brown” tells what kind of horse.' },
        { id: 'J3202', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['crunchy', 'giraffe', 'giggled', 'library'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: '“Crunchy” tells what kind, like a crunchy apple.' },
        { id: 'J3203', type: 'tap', skill: 'Find the adjective', s: 'Maya baked nine pancakes for breakfast.', tags: 'n v adj n x n', ask: 'adj',
          why: '“Nine” tells how many pancakes.' },
        { id: 'J3204', type: 'sort', skill: 'What kind or how many', s: 'Ben petted the soft bunny at the farm.', tags: 'n v x adj n x x n',
          word: 'soft', answer: 'what kind', why: '“Soft” tells what kind of bunny.' },
        { id: 'J3205', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'Leo held a ___ umbrella in the storm.',
          choices: ['yellow', 'turtles', 'ran', 'from'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: '“Yellow” is a color. “Yellow” tells what kind of umbrella.' },
        { id: 'J3206', type: 'name', skill: 'Name the part of speech', s: 'Sofia hugged the fluffy lamb.', tags: 'n v x adj n', word: 'lamb',
          why: 'A lamb is a living thing. “Lamb” is a noun.' },
        { id: 'J3207', type: 'tap', skill: 'Find the adjective', s: 'Three robins sang in the warm sun.', tags: 'adj n v x x adj n', ask: 'adj',
          why: '“Three” tells how many robins. “Warm” tells what kind of sun.' },
        { id: 'J3208', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Kai stirred the thick oatmeal.', tags: 'n v x adj n',
          choices: ['thick', 'oatmeal', 'stirred', 'Kai'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: '“Thick” tells what kind of oatmeal.' },
        { id: 'J3209', type: 'name', skill: 'Name the part of speech', s: 'The wet dog shook in the rain.', tags: 'x adj n v x x n', word: 'wet',
          why: '“Wet” tells what kind of dog. “Wet” is an adjective.' },
        { id: 'J3210', type: 'tap', skill: 'Find the adjective', s: 'Zoe saw a purple butterfly in the garden.', tags: 'n v x adj n x x n', ask: 'adj',
          why: '“Purple” tells what kind of butterfly.' }
      ],
      [
        { id: 'J3301', type: 'tap', skill: 'Find the adjective', s: 'A noisy seagull grabbed a cracker.', tags: 'x adj n v x n', ask: 'adj',
          why: '“Noisy” tells what kind of seagull.' },
        { id: 'J3302', type: 'mc', skill: 'Pick the adjective', ask: 'adj',
          choices: ['tiny', 'mitten', 'sneezed', 'basket'], choiceTags: ['adj', 'n', 'v', 'n'],
          why: '“Tiny” tells what kind, like a tiny bug.' },
        { id: 'J3303', type: 'tap', skill: 'Find the adjective', s: 'Omar peeled four oranges at the park.', tags: 'n v adj n x x n', ask: 'adj',
          why: '“Four” tells how many oranges.' },
        { id: 'J3304', type: 'sort', skill: 'What kind or how many', s: 'Grace found a few worms in the dirt.', tags: 'n v x adj n x x n',
          word: 'few', answer: 'how many', why: '“Few” tells how many worms.' },
        { id: 'J3305', type: 'fill', skill: 'Complete the sentence', ask: 'adj', s: 'The ___ sun melted the snowman.',
          choices: ['hot', 'carrots', 'ate', 'over'], choiceTags: ['adj', 'n', 'v', 'x'],
          why: '“Hot” tells what kind of sun.' },
        { id: 'J3306', type: 'name', skill: 'Name the part of speech', s: 'Luis chased a green lizard.', tags: 'n v x adj n', word: 'chased',
          why: '“Chased” tells what Luis did. “Chased” is a verb.' },
        { id: 'J3307', type: 'tap', skill: 'Find the adjective', s: 'Two sleepy foxes hid under the bush.', tags: 'adj adj n v x x n', ask: 'adj',
          why: '“Two” tells how many foxes. “Sleepy” tells what kind of foxes.' },
        { id: 'J3308', type: 'mc', skill: 'Find the adjective', ask: 'adj', s: 'Leo licked a sour lemon.', tags: 'n v x adj n',
          choices: ['sour', 'lemon', 'licked'], choiceTags: ['adj', 'n', 'v'],
          why: '“Sour” tells what kind of lemon.' },
        { id: 'J3309', type: 'name', skill: 'Name the part of speech', s: 'Kai wore a fuzzy hat in the snow.', tags: 'n v x adj n x x n', word: 'fuzzy',
          why: '“Fuzzy” tells what kind of hat. “Fuzzy” is an adjective.' },
        { id: 'J3310', type: 'tap', skill: 'Find the adjective', s: 'Ana watched the stormy sky.', tags: 'n v x adj n', ask: 'adj',
          why: '“Stormy” tells what kind of sky.' }
      ]
    ]
  }
};
