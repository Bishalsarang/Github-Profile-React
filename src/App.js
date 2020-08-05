import React from 'react';

// Layout Components
import Main from './shared/Main';
import Header from './shared/Header';
import Footer from './shared/Footer';

import './App.css';
import TabNav from './Components/Tab';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <TabNav className="container" />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
