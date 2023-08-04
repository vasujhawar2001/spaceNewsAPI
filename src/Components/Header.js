// Header.js
import React from 'react';
import space from '../assets/space.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>Space News Hub</h1>
          <h3 className="subtitle">Explore the Universe</h3>
        </div>
        <div className="header-image"> 
          <img src={space} alt="Space Background" />
          </div>
      </div>
    </header>
  );
};

export default Header;
