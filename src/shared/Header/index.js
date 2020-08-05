import React from 'react';
import { GoMarkGithub } from 'react-icons/go';

import './style.css';

const Header = () => {
  return (
    <header className="Header">
      <GoMarkGithub className="logo" size="2em" />
      <h1 className="title">Github</h1>
    </header>
  );
};

export default Header;
