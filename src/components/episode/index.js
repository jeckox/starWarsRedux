import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import * as actions from '../../store/actions';

import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import DetailEpisode from './detailEpisode';

const ColorCircularProgress = withStyles({
	root: {
		color: '#00DA9C'
	}
})(CircularProgress);

const existEpisode = (props) => {
	const {episodes} = props;
	const {episodeId} = props.match.params;
	const urlEpisode = 'https://swapi.co/api/films/' + episodeId + '/';

	return episodes.find((episode) => urlEpisode === episode.url);
};

class Episode extends Component {
	componentDidMount() {
		const {episodeId} = this.props.match.params;
		const episode = existEpisode(this.props);

		if (!episode) {
			this.props.onLoad(episodeId);
		}
	}
	render() {
		const episode = existEpisode(this.props);
		const component = episode ? <DetailEpisode episode={episode} /> : <ColorCircularProgress size={10} thickness={5} />;

		return (component);
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
	idEpisode: PropTypes.string,
	onLoad: PropTypes.func,
	match: PropTypes.object,
	episodes: PropTypes.array
};
export default connect(
	mapState,
	mapDispatch
)(Episode);
