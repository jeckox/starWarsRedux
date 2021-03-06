import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Layout from '../common/Layout/Layout';
import Character from '../character';
const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left'
	}
}));

const DetailEpisode = ({episode}) => {
	const classes = useStyles();
	const {title, episodeId, director, producer, releaseDate, openingCrawl, characters} = episode;

	return (
		<Layout title={title} link="/">
			<Grid item xs={12} sm={6} lg={3}>
				<Paper className={classes.paper}>
					<Typography variant="body1" >
						{`Episode ${episodeId}` }
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6} lg={3}>
				<Paper className={classes.paper}>
					<Typography variant="body1" >
						{`Director: ${director}` }
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6} lg={3}>
				<Paper className={classes.paper}>
					<Typography variant="body1" >
						{`Producer: ${producer}` }
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6} lg={3}>
				<Paper className={classes.paper}>
					<Typography variant="body1" >
						{`Release Date: ${releaseDate}` }
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} sm={12} lg={6}>
				<Paper className={classes.paper}>
					<Typography variant="body1" >
						{openingCrawl}
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} sm={12} lg={6}>
				<Paper className={classes.paper}>
					{characters.map((character) => <Character people={character} key={character} view="mini" />)}
				</Paper>
			</Grid>
		</Layout>
	);
};

DetailEpisode.propTypes = {
	episode: PropTypes.object
};
export default DetailEpisode;
