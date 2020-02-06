import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

import * as actions from '../../store/actions';
import Loader from '../common/Loader/Loader';
import DetailCharacter from './DetailCharacter';

import './Character.css';

const findCharacter = (id, characters)=> characters.find((element) => id === element.url);

class Charactes extends Component {
	componentDidMount() {
		const nameUrl = this.props.people ? this.props.people : ('https://swapi.co/api/people/' + this.props.match.params.characterId + '/');
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

		let element = <Loader size={10} />;

		const nameurl = this.props.people ? this.props.people : ('https://swapi.co/api/people/' + this.props.match.params.characterId.replace('/', '') + '/');
		const charra = this.props.characters;
		const characterPeople = findCharacter(nameurl, charra);

		if (characterPeople) {
			element = (view !== 'mini') ? <DetailCharacter character={characterPeople} episodes={this.props.episodes} /> : this.renderMini(characterPeople);
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
	characterId: PropTypes.string,
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
