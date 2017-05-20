import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Doodle from './Doodle'
import Info from './Info'
import Skills from './Skills'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Doodle/>
        <Info/>
      </div>
    );
  }
}

export default App;
