import React from 'react';
import './Header.css'; // Importing CSS

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>STUFF</h1>
      <nav>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;