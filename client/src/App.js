import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cicerowned coming soon...</h1>
        </header>
        <p className="App-intro">
          Getting ready for deployment on July 17th!
        </p>
      </div>
    );
  }
}

export default App;
