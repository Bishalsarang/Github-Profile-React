import React from 'react';

// Layout Components
import Main from './shared/Main';
import Header from './shared/Header';
import Footer from './shared/Footer';

import './App.css';
import { fetchUser } from './Services/API';

const App = () => {
  const getUserInfo = () => {
    fetchUser('Bishalsarang').then((response) => console.log(response.data));
  };

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
