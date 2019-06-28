import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import createStore from "./store";
import { Provider } from "react-redux";
import Episodes from './components/episodes'
import Character from './components/character'
import './App.css';
const store = createStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Star Wars</h1>
        <BrowserRouter>
          <Route exact path="/" component={Episodes} />
          <Route path="/Character/:idCharacter" component={Character} />

        </BrowserRouter>
        
      </Provider>
    );
  }
}

export default App;
