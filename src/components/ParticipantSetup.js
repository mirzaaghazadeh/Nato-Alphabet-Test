import React, { useState } from 'react';

const ParticipantSetup = ({ onParticipantsSet }) => {
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([]);

  const addParticipant = () => {
    if (participantName.trim()) {
      const newParticipants = [...participants, participantName.trim()];
      setParticipants(newParticipants);
      setParticipantName('');
    }
  };

  const removeParticipant = (index) => {
    const newParticipants = participants.filter((_, i) => i !== index);
    setParticipants(newParticipants);
  };

  const handleSubmit = () => {
    if (participants.length > 0) {
      onParticipantsSet(participants);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addParticipant();
    }
  };

  return (
    <div className="participant-setup">
      <h2>Setup Participants</h2>
      <div className="input-group">
        <input
          type="text"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter participant name"
          className="participant-input"
        />
        <button onClick={addParticipant} className="add-button">
          Add Participant
        </button>
      </div>
      
      {participants.length > 0 && (
        <div className="participants-list">
          <h3>Participants ({participants.length}):</h3>
          <ul>
            {participants.map((name, index) => (
              <li key={index} className="participant-item">
                <span>{name}</span>
                <button 
                  onClick={() => removeParticipant(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button 
            onClick={handleSubmit}
            className="start-button"
            disabled={participants.length === 0}
          >
            Continue to Question Setup
          </button>
        </div>
      )}
    </div>
  );
};

export default ParticipantSetup;