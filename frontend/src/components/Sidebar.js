import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaEllipsisV } from 'react-icons/fa'; 
import UserList from './UserList';
import '../styles/Sidebar.css'; 

const Sidebar = ({ users, onSelectUser }) => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="header-options">
          <FaEllipsisV
            className="options-icon"
            onClick={handleMenuToggle}
          />
          {menuOpen && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <ul>
                <li>New Group</li>
                <li>New Broadcast</li>
                <li>Linked Devices</li>
                <li>Started Messages</li>
                <li>Payment</li>
                <li>Settings</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <UserList users={filteredUsers} onSelectUser={onSelectUser} />
    </div>
  );
};

export default Sidebar;
