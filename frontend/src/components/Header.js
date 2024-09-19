import React from 'react';
import { FaPhone, FaVideo } from 'react-icons/fa';

const Header = ({ selectedUser }) => {
  return (
    <div className="chat-header">
      <div className="header-left">
        <img
          src={selectedUser ? selectedUser.avatar : 'path/to/default-avatar.png'}
          alt="User Avatar"
          className="header-avatar"
        />
        <div className="header-name">
          {selectedUser ? selectedUser.name : 'Select a user to start chatting'}
        </div>
      </div>
      <div className="header-right">
        <FaPhone className="header-icon" />
        <FaVideo className="header-icon" />
      </div>
    </div>
  );
};

export default Header;
