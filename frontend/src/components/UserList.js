import React from 'react';

const UserList = ({ users, onSelectUser }) => {
  return (
    <ul className="user-list">
      {users.map((user, index) => (
        <li 
          key={index} 
          onClick={() => onSelectUser(user)} 
          className="user-list-item"
        >
          <img src={user.avatar} alt={`${user.name}'s Avatar`} className="user-avatar" />
          <div className="user-details">
            <span className="user-name">{user.name}</span>
            <span className="user-timestamp">12:30 PM</span> 
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
