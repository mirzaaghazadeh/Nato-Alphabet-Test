import React, { useState } from 'react';

const QuestionSetup = ({ participants, onQuestionsSet }) => {
  const [questionsPerUser, setQuestionsPerUser] = useState(5);

  const handleSubmit = () => {
    if (questionsPerUser > 0) {
      onQuestionsSet(questionsPerUser);
    }
  };

  const totalQuestions = participants.length * questionsPerUser;

  return (
    <div className="question-setup">
      <h2>Question Configuration</h2>
      <div className="participants-summary">
        <h3>Participants: {participants.length}</h3>
        <ul>
          {participants.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      
      <div className="question-config">
        <label htmlFor="question-count">
          Questions per participant:
        </label>
        <input
          id="question-count"
          type="number"
          min="1"
          max="50"
          value={questionsPerUser}
          onChange={(e) => setQuestionsPerUser(parseInt(e.target.value) || 1)}
          className="question-input"
        />
      </div>
      
      <div className="total-questions">
        <strong>Total questions: {totalQuestions}</strong>
      </div>
      
      <button onClick={handleSubmit} className="start-test-button">
        Start Test
      </button>
    </div>
  );
};

export default QuestionSetup;