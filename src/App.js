import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Private from './components/Private/Private.js';

class App extends Component {
  render() {
    return (      
        <HashRouter>
          <div>
              <Route component={ Login } path='/' exact />
              <Route component={ Private } path='/private'/>
            </div>
          </HashRouter>      
    );
  }
}

export default App;
