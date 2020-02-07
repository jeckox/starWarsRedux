import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Episode from '../episode';
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		overflow: 'auto',
		padding: '1%'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left'
	},
	title: {
		fontSize: '1.25rem',
		fontWeight: '700',
		margin: '5px'
	}
}));

const Layout = ({films}) => {
	const classes = useStyles();
	const pelis = films.map((film) => {
		return (<Grid item xs={12} sm={6} lg={3}
			key={film.episodeId}>
			<Episode key={film.episodeId} view="Card" episodeId={film.id} />
		</Grid>);
	});

	return (
		<div className={classes.root}>
			<Grid container spacing={3} className={classes.container}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Typography variant="h2" className={classes.title} color="inherit">
                            Episodes
						</Typography>
					</Paper>
				</Grid>
				{pelis}
			</Grid>
		</div>
	);
};

Layout.propTypes = {
	films: PropTypes.array
};
export default Layout;
