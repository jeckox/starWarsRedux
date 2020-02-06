import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import createStore from './store';
import {Provider} from 'react-redux';
import Header from './components/common/Header/Header';
import Home from './components/Home';
import Episode from './components/episode';
import Character from './components/character';
const store = createStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Header />
				<BrowserRouter>
					<Route exact path="/" component={Home} />
					<Route exact path="/Episodes/:episodeId" component={Episode} view="Detail" />
					<Route path="/Character/:characterId" view="Detail" component={Character} />
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
