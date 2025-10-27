import React, { useState } from 'react';
import ParticipantSetup from './components/ParticipantSetup';
import QuestionSetup from './components/QuestionSetup';
import NatoTest from './components/NatoTest';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState('participants'); // 'participants', 'questions', 'test', 'results'
  const [participants, setParticipants] = useState([]);
  const [questionsPerUser, setQuestionsPerUser] = useState(0);
  const [finalScores, setFinalScores] = useState({});

  const handleParticipantsSet = (participantList) => {
    setParticipants(participantList);
    setCurrentStep('questions');
  };

  const handleQuestionsSet = (questionCount) => {
    setQuestionsPerUser(questionCount);
    setCurrentStep('test');
  };

  const handleTestComplete = (scores) => {
    setFinalScores(scores);
    setCurrentStep('results');
  };

  const handleRestart = () => {
    setCurrentStep('participants');
    setParticipants([]);
    setQuestionsPerUser(0);
    setFinalScores({});
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'participants':
        return (
          <ParticipantSetup 
            onParticipantsSet={handleParticipantsSet}
          />
        );
      case 'questions':
        return (
          <QuestionSetup 
            participants={participants}
            onQuestionsSet={handleQuestionsSet}
          />
        );
      case 'test':
        return (
          <NatoTest 
            participants={participants}
            questionsPerUser={questionsPerUser}
            onTestComplete={handleTestComplete}
          />
        );
      case 'results':
        return (
          <div className="final-results">
            <h1>NATO Alphabet Test - Final Results</h1>
            <div className="results-container">
              <h2>Participants: {participants.length}</h2>
              <h2>Questions per participant: {questionsPerUser}</h2>
              <div className="final-scores-display">
                <h3>Final Rankings:</h3>
                {Object.entries(finalScores)
                  .sort(([,a], [,b]) => b - a)
                  .map(([participant, score], index) => (
                    <div key={participant} className="ranking-item">
                      <div className="rank">#{index + 1}</div>
                      <div className="name">{participant}</div>
                      <div className="score">{score} points</div>
                    </div>
                  ))}
              </div>
            </div>
            <button onClick={handleRestart} className="restart-button">
              Start New Test
            </button>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="app">
      <div className="container">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default App;