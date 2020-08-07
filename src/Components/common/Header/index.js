import React from 'react';
import { GoMarkGithub } from 'react-icons/go';

import './style.css';

const Header = () => (
  <header className="Header">
    <a href="https://github.com" title="Github Logo">
      <GoMarkGithub className="logo" size="2em" />
    </a>
    <a href="https://github.com" title="Github Logo">
      <h1 className="title">Github</h1>
    </a>
  </header>
);

export default Header;
