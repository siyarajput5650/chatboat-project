import React from 'react';
import userImage from '../assets/image-boy.png';
import botImage from '../assets/images-female.jpg';
import { Emoji } from 'emoji-mart';

const ChatMessage = ({ sender, text }) => {
  const profileImage = sender === 'user' ? userImage : botImage;

  return (
    <div className={`chat-message-container ${sender}`}>
      <img src={profileImage} alt={`${sender} profile`} className="profile-pic" />
      <div className={`chat-message ${sender}`}>
        {text.split(' ').map((word, index) => {
          if (word.startsWith(':') && word.endsWith(':')) {
            const emoji = word.slice(1, -1);
            return (
              <span key={index} className="emoji">
                <Emoji emoji={{ id: emoji, skin: 1 }} size={20} />
              </span>
            );
          }
          return <span key={index}>{word} </span>;
        })}
      </div>
    </div>
  );
};

export default ChatMessage;
