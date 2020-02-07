import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions';
import DetailCharacter from './DetailCharacter';
import Loader from '../common/Loader/Loader';
import MiniCharacter from './MiniCharacter';
import {findElement} from '../../utils/find';

class Charactes extends Component {
	componentDidMount() {
		const characterId = this.props.people ? this.props.people : this.props.match.params.characterId;
		const existElement = findElement(characterId, this.props.characters);

		if (!existElement) {
			this.props.onLoad(characterId);
		}
	}

	render() {
		const {view} = this.props;
		const characterId = this.props.people ? this.props.people : this.props.match.params.characterId;
		const characterPeople = findElement(characterId, this.props.characters);

		return (
			<Fragment>
				{ (!characterPeople) &&
					<Loader size={10} />
				}
				{ (characterPeople && !view) &&
					<DetailCharacter character={characterPeople} episodes={this.props.episodes} />
				}
				{ (characterPeople && view) &&
					<MiniCharacter character={characterPeople} />
				}
			</Fragment>
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
