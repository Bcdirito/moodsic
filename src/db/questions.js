const questions = [
  {
    id: 0,
    title: 'Which of these colors are you vibing with?',
    images: [],
    choices: {
      Blue: 'sadGirlHour',
      Yellow: 'sunshineAndLollipops',
      Red: 'boogieShoes',
      Pink: 'girlPower',
      Black: 'apocalypseMeow',
      Rainbow: 'what',
      Gold: 'oldiesAndGoodies'
    }
  },
  {
    id: 1,
    title: 'What image do you see?',
    images: ['inkblot.jpg'],
    choices: {
      'Gliding Lizard': 'apocalypseMeow',
      Otter: 'sunshineAndLollipops',
      'Coat of Arms': 'girlPower',
      'X-ray': 'sadGirlHour',
      Butterfly: 'oldiesAndGoodies',
      Tree: 'boogieShoes',
      'Panther on a Rock': 'what'
    }
  },
  {
    id: 2,
    title: 'What do you want to do right now?',
    images: [],
    choices: {
      'Crush the Patriarchy': 'girlPower',
      'Frolic in the Garden': 'sunshineAndLollipops',
      'Feel the Rain': 'sadGirlHour',
      'Become a Muppet': 'what',
      'Prepare to Land on Mars': 'apocalypseMeow',
      'Get Down and Dance': 'boogieShoes'
    }
  },
  {
    id: 3,
    title: 'White type of cat are you?',
    images: [
      'sandCat.png',
      'bombayCat.png',
      'pussInBoots.png',
      'grumpyCat.png',
      'nala.png',
      'dancingCat.png',
      'garfield.png'
    ],
    choices: {
      'Sand Cat': 'sunshineAndLollipops',
      'Bombay Cat': 'sadGirlHour',
      'Puss in Boots': 'what',
      'Grumpy Cat': 'apocalypseNow',
      Nala: 'girlPower',
      'Dancing Cat': 'boogieShoes',
      Garfield: 'oldiesAndGoodies'
    }
  },
  {
    id: 4,
    title: "Quick you've become a flavor - pick one!",
    images: [],
    choices: {
      Sweet: 'sunshineAndLollipops',
      Sour: 'boogieShoes',
      Salty: 'sadGirlHour',
      Spicy: 'girlPower',
      Savory: 'oldiesAndGoodies',
      Bland: 'what',
      Bitter: 'apocalypseMeow'
    }
  }
]

module.exports = questions
