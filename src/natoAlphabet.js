export const NATO_ALPHABET = {
  'A': 'Alpha',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliet',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'X-ray',
  'Y': 'Yankee',
  'Z': 'Zulu'
};

export const NATO_WORDS = [
  'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel',
  'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa',
  'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey',
  'X-ray', 'Yankee', 'Zulu'
];

// Real-world examples that use NATO alphabet
export const REAL_WORLD_EXAMPLES = {
  aircraft: [
    'TC-ABC', 'TC-JKL', 'TC-XYZ', 'TC-ALP', 'TC-BRA', 'TC-CHA', 'TC-DEL',
    'TC-ECH', 'TC-FOX', 'TC-GOL', 'TC-HOT', 'TC-IND', 'TC-JUL', 'TC-KIL',
    'TC-LIM', 'TC-MIK', 'TC-NOV', 'TC-OSC', 'TC-PAP', 'TC-QUE', 'TC-ROM',
    'TC-SIE', 'TC-TAN', 'TC-UNI', 'TC-VIC', 'TC-WHI', 'TC-XRA', 'TC-YAN',
    'TC-ZUL'
  ],
  airports: [
    'LAX', 'JFK', 'LHR', 'CDG', 'AMS', 'FRA', 'MAD', 'BCN', 'MUC', 'ZUR',
    'ARN', 'CPH', 'OSL', 'HEL', 'WAW', 'PRG', 'BUD', 'VIE', 'BRU', 'DUB',
    'IST', 'ESB', 'SAW', 'AYT', 'ADB', 'BJV', 'DLM', 'GZT', 'KSY', 'NAV'
  ],
  names: [
    'John', 'Mary', 'David', 'Sarah', 'Michael', 'Emma', 'Robert', 'Lisa',
    'William', 'Jennifer', 'Richard', 'Linda', 'Joseph', 'Patricia', 'Thomas',
    'Barbara', 'Charles', 'Susan', 'Christopher', 'Jessica', 'Daniel', 'Dorothy',
    'Matthew', 'Nancy', 'Anthony', 'Karen', 'Mark', 'Betty', 'Donald', 'Helen'
  ],
  callsigns: [
    'Speedbird', 'Delta', 'American', 'United', 'Lufthansa', 'Air France',
    'British Airways', 'Emirates', 'Qatar', 'Turkish', 'KLM', 'Iberia',
    'SAS', 'Finnair', 'Austrian', 'Swiss', 'Alitalia', 'Aegean', 'Ryanair',
    'EasyJet', 'Wizz Air', 'Pegasus', 'SunExpress', 'Corendon', 'Onur Air'
  ]
};

export const getRandomNatoItem = () => {
  const letters = Object.keys(NATO_ALPHABET);
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return {
    letter: randomLetter,
    word: NATO_ALPHABET[randomLetter]
  };
};

export const getRandomRealWorldExample = () => {
  const categories = Object.keys(REAL_WORLD_EXAMPLES);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const examples = REAL_WORLD_EXAMPLES[randomCategory];
  const randomExample = examples[Math.floor(Math.random() * examples.length)];
  
  return {
    category: randomCategory,
    text: randomExample,
    natoSpelling: randomExample.split('').map(char => {
      const upperChar = char.toUpperCase();
      return NATO_ALPHABET[upperChar] || char;
    }).filter(item => item !== ' ' && item !== '-')
  };
};

export const getRandomQuestion = () => {
  const questionTypes = ['spelling', 'realworld'];
  const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
  
  switch (randomType) {
    case 'spelling':
      // Generate random word length between 2-5 characters
      const wordLength = Math.floor(Math.random() * 4) + 2; // 2-5 characters
      const letters = Object.keys(NATO_ALPHABET);
      const randomLetters = [];
      
      for (let i = 0; i < wordLength; i++) {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        randomLetters.push(randomLetter);
      }
      
      const natoWords = randomLetters.map(letter => NATO_ALPHABET[letter]);
      
      return {
        type: 'spelling',
        question: natoWords.join(' '),
        answer: randomLetters.join(''),
        points: wordLength
      };
    case 'realworld':
      const example = getRandomRealWorldExample();
      return {
        type: 'realworld',
        question: example.text,
        answer: example.natoSpelling,
        category: example.category,
        points: example.text.replace(/[^A-Za-z]/g, '').length
      };
    default:
      return getRandomQuestion();
  }
};

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};