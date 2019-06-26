import React, { Component } from 'react';
import Episodes from './components/episodes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Star Wars</h1>
        <Episodes/>
      </div>
    );
  }
}

export default App;
