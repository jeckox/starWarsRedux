import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ColorCircularProgress = withStyles({
	root: {
		color: '#00DA9C'
	}
})(CircularProgress);

const Loader = ({size}) =>{
	return (
		<ColorCircularProgress size={size} thickness={5} />
	);
};

Loader.propTypes = {
	size: PropTypes.number
};
export default Loader;
