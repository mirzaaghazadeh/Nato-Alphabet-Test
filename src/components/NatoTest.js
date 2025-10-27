import React, { useState, useEffect } from 'react';
import { NATO_ALPHABET, getRandomQuestion, shuffleArray } from '../natoAlphabet';

const NatoTest = ({ participants, questionsPerUser, onTestComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentParticipantIndex, setCurrentParticipantIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [scores, setScores] = useState({});
  const [questionQueue, setQuestionQueue] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isTestComplete, setIsTestComplete] = useState(false);

  useEffect(() => {
    // Initialize scores
    const initialScores = {};
    participants.forEach(participant => {
      initialScores[participant] = 0;
    });
    setScores(initialScores);

    // Create question queue with shuffled participants
    const queue = [];
    participants.forEach(participant => {
      for (let i = 0; i < questionsPerUser; i++) {
        queue.push(participant);
      }
    });
    setQuestionQueue(shuffleArray(queue));
    
    // Set first question
    setCurrentQuestion(getRandomQuestion());
  }, [participants, questionsPerUser]);

  const handleAnswer = (isCorrect) => {
    const currentParticipant = questionQueue[currentQuestionIndex];
    
    if (isCorrect) {
      // Award points based on question type
      setScores(prev => ({
        ...prev,
        [currentParticipant]: prev[currentParticipant] + currentQuestion.points
      }));
    }
    
    // Mark question as answered
    setAnsweredQuestions(prev => [...prev, {
      participant: currentParticipant,
      question: currentQuestion,
      correct: isCorrect
    }]);
    
    // Move to next question
    if (currentQuestionIndex < questionQueue.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setCurrentQuestion(getRandomQuestion());
    } else {
      setIsTestComplete(true);
    }
  };

  const handleSkip = () => {
    handleAnswer(false); // Skip counts as incorrect
  };

  const getCurrentParticipant = () => {
    return questionQueue[currentQuestionIndex] || '';
  };

  if (isTestComplete) {
    return (
      <div className="test-results">
        <h2>Test Complete!</h2>
        <div className="final-scores">
          <h3>Final Scores:</h3>
          {Object.entries(scores)
            .sort(([,a], [,b]) => b - a)
            .map(([participant, score]) => (
              <div key={participant} className="score-item">
                <span>{participant}:</span>
                <span className="score">{score} points</span>
              </div>
            ))}
        </div>
        <button onClick={() => onTestComplete(scores)} className="finish-button">
          Finish Test
        </button>
      </div>
    );
  }

  if (!currentQuestion || questionQueue.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="nato-test">
      <div className="test-header">
        <h2>NATO Alphabet Test</h2>
        <div className="progress">
          Question {currentQuestionIndex + 1} of {questionQueue.length}
        </div>
      </div>
      
      <div className="current-participant">
        <h3>Current Participant: {getCurrentParticipant()}</h3>
      </div>
      
      <div className="question-display">
        <div className="display-item">
          {currentQuestion.type === 'spelling' && (
            <div className="spelling-display">
              <h4>What do these NATO words spell?</h4>
              <div className="nato-words">{currentQuestion.question}</div>
              <div className="points">Points: {currentQuestion.points}</div>
            </div>
          )}
          {currentQuestion.type === 'realworld' && (
            <div className="realworld-display">
              <h4>How would you spell this using NATO alphabet?</h4>
              <div className="category">Category: {currentQuestion.category}</div>
              <div className="realworld-text">{currentQuestion.question}</div>
              <div className="points">Points: {currentQuestion.points}</div>
            </div>
          )}
        </div>
        
        <div className="answer-buttons">
          <button 
            onClick={() => handleAnswer(true)}
            className="correct-button"
          >
            Correct
          </button>
          <button 
            onClick={() => handleAnswer(false)}
            className="incorrect-button"
          >
            Incorrect
          </button>
          <button 
            onClick={handleSkip}
            className="skip-button"
          >
            Skip
          </button>
        </div>
      </div>
      
      <div className="current-scores">
        <h4>Current Scores:</h4>
        {Object.entries(scores).map(([participant, score]) => (
          <div key={participant} className="current-score">
            {participant}: {score}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NatoTest;