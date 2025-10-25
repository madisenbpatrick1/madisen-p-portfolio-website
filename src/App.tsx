import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Routes>
    </HashRouter>
  );
}

export default App;
