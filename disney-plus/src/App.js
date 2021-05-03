import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header/Header'
import Routes from './components/routes'
import { Router } from 'react-router';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
