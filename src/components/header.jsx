import React from 'react';
import '../index.css';
import hamburger_icon from '../img/hamburger_icon.png';


const Header = () => (
  <header className="nav_header">
    <div className="logo">
      <a href="/">
        <img
          src={hamburger_icon}
          alt=""
        />
      </a>
      <a href="/">
        <span>Stackoverflow-Lite</span>
      </a>
      <div className="right_bar">
        <a href="/profile">
          <span>account</span>
        </a>
        <a href="/signup">
          <span>Signup</span>
        </a>
      </div>
    </div>
    <div className="clear" />
  </header>
);

export default Header;
