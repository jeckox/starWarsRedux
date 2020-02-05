import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
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

const Layout = ({character, episodes}) => {
	const {name, height, gender, mass, hairColor, skinColor, eyeColor, films} = character;
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClick = React.useCallback(() => {
		setOpen(!open);
	}, [setOpen, open]);
	const renderMovies = () => {
		return films.map(element => {
			const theText = episodes.find((episode)=>episode.url === element);

			return theText ? (<ListItem button className={classes.nested} key={element}>
				<Link className={classes.linked} to={'/Episodes/' + theText.url.replace('https://swapi.co/api/films/', '')}><ListItemText primary={theText.title} /></Link>
			</ListItem>) : null;
		});
	};
	const movies = episodes.length ? renderMovies() : undefined;

	return (
		<div className={classes.root}>
			<Grid container spacing={3} className={classes.container}>
				<Grid item xs={12} >
					<Paper className={classes.paper}>
						<Typography variant="h2" className={classes.title} color="inherit">
							{name}
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4} lg={4}>
					<Paper className={classes.paper}>
						<List dense={true}>
							<ListItem>
								<ListItemText
									primary="Height"
									secondary={height}
								/>
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText
									primary="Gender"
									secondary={gender}
								/>
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText
									primary="Mass"
									secondary={mass}
								/>
							</ListItem>
						</List>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4} lg={4}>
					<Paper className={classes.paper}>
						<List dense={true}>
							<ListItem>
								<ListItemText
									primary="Hair"
									secondary={hairColor}
								/>
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText
									primary="Skin"
									secondary={skinColor}
								/>
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText
									primary="Eyes"
									secondary={eyeColor}
								/>
							</ListItem>
						</List>
					</Paper>
				</Grid>
				{movies &&
					<Grid item xs={12} sm={4} lg={4}>
						<Paper className={classes.paper}>

							<List dense={true}>
								<ListItem button onClick={handleClick}>
									<ListItemText primary="Films" />
									{open ? <ExpandLess /> : <ExpandMore />}
								</ListItem>
								<Collapse in={open} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										{movies}
									</List>
								</Collapse>
							</List>
						</Paper>
					</Grid>
				}
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

Layout.propTypes = {
	character: PropTypes.object,
	episodes: PropTypes.array
};
export default Layout;
