import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import * as actions from '../../store/actions';

import DetailEpisode from './DetailEpisode';
import ListEpisode from './ListEpisode';
import CardEpisode from './CardEpisode';
import Loader from '../common/Loader/Loader';
const existEpisode = (props) => {
	const {episodes} = props;
	const {episodeId} = props.match ? props.match.params : props;
	const urlEpisode = 'https://swapi.co/api/films/' + episodeId + '/';

	return episodes.find((episode) => urlEpisode === episode.url);
};

class Episode extends Component {
	componentDidMount() {
		const {episodeId} = this.props.match ? this.props.match.params : this.props;
		const episode = existEpisode(this.props);

		if (!episode) {
			this.props.onLoad(episodeId);
		}
	}
	render() {
		const episode = existEpisode(this.props);
		const {view} = this.props;

		return (
			<Fragment>
				{ (!episode) &&
					<Loader />
				}
				{ (episode && !view) &&
					<DetailEpisode episode={episode} />
				}
				{ (episode && view === 'List') &&
					<ListEpisode episode={episode} />
				}
				{ (episode && view === 'Card') &&
					<CardEpisode episode={episode} />
				}
			</Fragment>
		);
	}
}

const mapState = (state) => {
	return {
		episodes: state.episodes.films
	};
};

const mapDispatch = dispatch => ({
	onLoad: (page) =>
		dispatch({
			type: actions.FETCH_FILMS,
			id: page
		})
});

Episode.propTypes = {
	episodes: PropTypes.array,
	match: PropTypes.object,
	onLoad: PropTypes.func,
	view: PropTypes.string
};
export default connect(
	mapState,
	mapDispatch
)(Episode);
