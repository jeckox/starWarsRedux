import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	app: {
		background: '#272b30'
	},
	title: {
		fontSize: '1.25rem',
		fontWeight: '500'
	}
}));
const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.app}>
					<Typography variant="h1" className={classes.title} color="inherit" align="center">
                        Star Wars
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
