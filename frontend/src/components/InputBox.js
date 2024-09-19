import React, { useState } from 'react';
import { FaPaperclip, FaCamera, FaFileAlt } from 'react-icons/fa';
import '../styles/InputBox.css'; 

const InputBox = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="input-container">
      <div className="input-icons">
        <FaPaperclip className="icon" title="Attach a file" />
        <FaCamera className="icon" title="Attach a photo" />
        <FaFileAlt className="icon" title="Attach a document" />
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="input-box"
      />
      <button onClick={handleSend} className="send-button">Send</button>
    </div>
  );
};

export default InputBox;
