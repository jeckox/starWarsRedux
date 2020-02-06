import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles(theme => ({
	nested: {
		paddingLeft: theme.spacing(4)
	},
	linked: {
		textDecoration: 'none',
		color: 'inherit'
	}
}));

const ListEpisode = ({episode}) => {
	const classes = useStyles();
	const {title, url} = episode;
	const thelink = `/Episodes/${url.replace('https://swapi.co/api/films/', '')}`;

	return (
		<ListItem button className={classes.nested} key={thelink}>
			<Link className={classes.linked} to={thelink}>
				<ListItemText primary={title} />
			</Link>
		</ListItem>
	);
};

ListEpisode.propTypes = {
	episode: PropTypes.object
};
export default ListEpisode;
