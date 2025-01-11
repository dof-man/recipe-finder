import React from 'react';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <h2>🍳 Recipe Finder</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#favorites">Favorites</a></li>
        <li><a href="#shopping-list">Shopping List</a></li>
      </ul>
      <button onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;