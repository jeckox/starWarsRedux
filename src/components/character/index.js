import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import * as actions from '../../store/actions';

import {withStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from './layoutCharacter';

import './Character.css';
const ColorCircularProgress = withStyles({
	root: {
		color: '#00DA9C'
	}
})(CircularProgress);
const findCharacter = (id, characters)=> characters.find((element) => id === element.url);

class Charactes extends Component {
	componentDidMount() {
		const nameUrl = this.props.people ? this.props.people : ('https://swapi.co/api/people/' + this.props.match.params.idCharacter + '/');
		const existElement = findCharacter(nameUrl, this.props.characters);

		if (!existElement) {
			this.props.onLoad(nameUrl);
		}
	}
	renderMini(theCharacter) {
		const urlTo = '/Character/' + theCharacter.url.replace('https://swapi.co/api/people/', '');

		return <div className="people-element"><Link to={urlTo}><Chip label={theCharacter.name} clickable /></Link></div>;
	}

	render() {
		const view = this.props.view ? this.props.view : 'full';

		let element = <ColorCircularProgress size={10} thickness={5} />;

		const nameurl = this.props.people ? this.props.people : ('https://swapi.co/api/people/' + this.props.match.params.idCharacter.replace('/', '') + '/');
		const charra = this.props.characters;
		const characterPeople = findCharacter(nameurl, charra);

		if (characterPeople) {
			element = (view !== 'mini') ? <Layout character={characterPeople} episodes={this.props.episodes} /> : this.renderMini(characterPeople);
		}
		return (
			element
		);
	}
}


const mapState = (state) => {
	return {
		characters: state.characters.characters,
		episodes: state.episodes.films
	};
};

const mapDispatch = dispatch => ({
	onLoad: (page) =>
		dispatch({
			type: actions.FETCH_CHARACTERS,
			id: page
		})
});

Charactes.propTypes = {
	people: PropTypes.string,
	idCharacter: PropTypes.string,
	onLoad: PropTypes.func,
	match: PropTypes.object,
	view: PropTypes.string,
	characters: PropTypes.array,
	episodes: PropTypes.array
};
export default connect(
	mapState,
	mapDispatch
)(Charactes);
