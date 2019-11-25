import React from 'react';

import Router from './Router';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router />
    </React.Fragment>
  );
};

export default App;