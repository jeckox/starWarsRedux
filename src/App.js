import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import createStore from './store';
import {Provider} from 'react-redux';
import Header from './components/header';
import Episodes from './components/episodes';
import Episode from './components/episode';
import Character from './components/character';
const store = createStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Header />
				<BrowserRouter>
					<Route exact path="/" component={Episodes} />
					<Route path="/Character/:idCharacter" component={Character} />
					<Route path="/Episodes/:episodeId" component={Episode} />
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
