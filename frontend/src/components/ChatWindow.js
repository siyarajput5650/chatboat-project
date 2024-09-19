import React from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <ChatMessage key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};

export default ChatWindow;
