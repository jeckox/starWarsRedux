import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';
import {findElement} from '../../utils/find';
import PropTypes from 'prop-types';

import Loader from '../common/Loader/Loader';
import DetailEpisode from './DetailEpisode';
import ListEpisode from './ListEpisode';
import CardEpisode from './CardEpisode';

class Episode extends Component {
	componentDidMount() {
		const {episodeId} = this.props.match ? this.props.match.params : this.props;
		const episode = findElement(episodeId, this.props.episodes);

		if (!episode) {
			this.props.onLoad(episodeId);
		}
	}
	render() {
		const {episodeId} = this.props.match ? this.props.match.params : this.props;
		const episode = findElement(episodeId, this.props.episodes);
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
