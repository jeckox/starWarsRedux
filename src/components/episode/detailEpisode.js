import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import Character from './../character';
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		overflow: 'auto',
		padding: '1%'
	},
	button: {
		margin: theme.spacing(1)
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left'
	},
	nested: {
		paddingLeft: theme.spacing(4)
	},
	title: {
		fontSize: '1.25rem',
		fontWeight: '700',
		margin: '5px'
	},
	linked: {
		textDecoration: 'none',
		color: 'inherit'
	}
}));

const renderCharacters = (charactersData) => charactersData.map((theCharacter) => <Character people={theCharacter} key={theCharacter} view="mini" />);
const DetailEpisode = ({episode}) => {
	const classes = useStyles();
	const {title, episodeId, director, producer, releaseDate, openingCrawl, characters} = episode;

	return (
		<div className={classes.root}>
			<Grid container spacing={3} className={classes.container}>
				<Grid item xs={12} >
					<Paper className={classes.paper}>
						<Typography variant="h2" className={classes.title} color="inherit">
							{title}
						</Typography>
					</Paper>
				</Grid>
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
						<Typography variant="body1" >
							{renderCharacters(characters)}
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Link to="/">
							<Button
								variant="contained"
								color="primary"
								size="small"
								edge="start"
								className={classes.button}
								startIcon={<ArrowBackIosRoundedIcon />}>
								Back to Episodes
							</Button>
						</Link>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

DetailEpisode.propTypes = {
	episode: PropTypes.object
};
export default DetailEpisode;
