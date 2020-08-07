import React from 'react';

// Layout Components
import TabNav from './Components/Tab';
import Main from './Components/common/Main';
import Header from './Components/common/Header';
import Footer from './Components/common/Footer';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Main>
      <TabNav className="container" />
    </Main>
    <Footer />
  </div>
);

export default App;
