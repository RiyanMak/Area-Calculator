import React from 'react';
import './Header.css'; // Importing CSS

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Use PascalCase here</h1>
      <nav>
        <a href="#about">Use PascalCase here</a>
      </nav>
    </header>
  );
};

export default Header;