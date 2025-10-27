# NATO Alphabet Test

A React-based interactive NATO alphabet testing application designed for training and entertainment. Players are tested on their knowledge of the NATO phonetic alphabet with real-world aviation examples.

## Features

### 🎯 Core Functionality
- **Multi-player Support**: Add multiple participants and track individual scores
- **Random Question Generation**: Questions are randomly generated to ensure variety
- **Real-world Examples**: Includes aircraft registration numbers, airport codes, names, and airline callsigns
- **Scoring System**: Points awarded based on character count (1 point per character)
- **Skip Functionality**: Players can skip difficult questions (counts as incorrect)

### 📝 Question Types
1. **Spelling Questions**: 
   - Shows NATO words like "Juliet Alpha Bravo"
   - Players must identify what they spell ("JAB")
   - Points equal to number of characters

2. **Real-world Examples**:
   - Aircraft numbers (TC-ABC, TC-JKL, etc.)
   - Airport codes (LAX, JFK, IST, etc.)
   - Human names (John, Mary, David, etc.)
   - Airline callsigns (Speedbird, Delta, etc.)

### 🎮 Game Flow
1. **Setup Phase**: Add participant names
2. **Configuration**: Set number of questions per participant
3. **Testing Phase**: Random participant selection with shuffled questions
4. **Results**: Final scores with rankings

## Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/mirzaaghazadeh/Nato-Alphabet-Test
   cd Nato-Alphabet-Test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3001`
   - The app will automatically reload when you make changes

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Usage

### Starting a Test

1. **Add Participants**
   - Enter participant names one by one
   - Click "Add Participant" or press Enter
   - Remove participants if needed using the "Remove" button
   - Click "Continue to Question Setup" when done

2. **Configure Questions**
   - Set the number of questions per participant (1-50)
   - Review the total number of questions
   - Click "Start Test" to begin

3. **During the Test**
   - Current participant is displayed at the top
   - Question type and points are shown
   - Click "Correct", "Incorrect", or "Skip"
   - Scores are updated in real-time
   - Participants are randomly selected for each question

4. **View Results**
   - Final scores are displayed with rankings
   - Winner is highlighted at the top
   - Click "Start New Test" to play again

## Scoring System

- **1 point per character** in the answer
- Example: "Juliet Alpha Bravo" → "JAB" = 3 points
- Example: "TC-ABC" → 5 points
- **Skip = Incorrect**: No points awarded for skipped questions
- **Real-world questions**: Points based on actual character count

## Technical Details

### Technology Stack
- **React 18**: Modern React with hooks
- **CSS3**: Responsive design with flexbox/grid
- **JavaScript ES6+**: Modern JavaScript features
- **Create React App**: Development and build tooling

### Project Structure
```
nato-alphabet-test/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── NatoTest.js
│   │   ├── ParticipantSetup.js
│   │   └── QuestionSetup.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── natoAlphabet.js
├── .gitignore
├── package.json
└── README.md
```

### Key Components

- **App.js**: Main application controller
- **ParticipantSetup.js**: Participant management interface
- **QuestionSetup.js**: Question configuration interface
- **NatoTest.js**: Core testing logic and UI
- **natoAlphabet.js**: NATO alphabet data and question generation

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy learning the NATO alphabet!** 🎉