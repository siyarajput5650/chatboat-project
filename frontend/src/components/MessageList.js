
import React from 'react';
import ChatMessage from './ChatMessage';

const MessageList = ({ messages }) => {
    return (
        <div className="chat-messages">
            {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
            ))}
        </div>
    );
}

export default MessageList;
