import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';
import Layout from './layoutEpisodes';

class Episodes extends Component {
	componentDidMount() {
		this.props.onLoad();
	}
	render() {
		const {films} = this.props;

		return (
			<Layout films={films} />
		);
	}
}

Episodes.propTypes = {
	onLoad: PropTypes.func,
	films: PropTypes.array
};

const mapState = (state) => {
	const {
		films
	} = state.episodes;

	return {
		films
	};
};

const mapDispatch = dispatch => ({
	onLoad: () =>
		dispatch({
			type: actions.FETCH_FILMS
		})
});

export default connect(
	mapState,
	mapDispatch
)(Episodes);
