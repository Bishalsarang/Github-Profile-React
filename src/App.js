import React from 'react';

// Layout Components
import Main from './shared/Main';
import Header from './shared/Header';
import Footer from './shared/Footer';

import Profile from './Components/Profile';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Profile />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
