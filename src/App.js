import React, { Component } from 'react';
import createStore from "./store";
import { Provider } from "react-redux";
import Episodes from './components/episodes'
import './App.css';
const store = createStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Star Wars</h1>
          <Episodes />
        </div>
      </Provider>
    );
  }
}

export default App;
