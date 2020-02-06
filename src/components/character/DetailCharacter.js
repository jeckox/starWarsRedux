import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import Layout from '../common/Layout/Layout';
import Episode from '../episode';
const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left'
	}
}));

const DetailCharacter = ({character}) => {
	const {name, height, gender, mass, hairColor, skinColor, eyeColor, films} = character;
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClick = React.useCallback(() => {
		setOpen(!open);
	}, [setOpen, open]);

	return (
		<Layout title={name} link="/">
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

			<Grid item xs={12} sm={4} lg={4}>
				<Paper className={classes.paper}>

					<List dense={true}>
						<ListItem button onClick={handleClick}>
							<ListItemText primary="Films" />
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{films.map(element => <Episode key={element} view="List" episodeId={element} />)}
							</List>
						</Collapse>
					</List>
				</Paper>
			</Grid>

		</Layout>
	);
};

DetailCharacter.propTypes = {
	character: PropTypes.object
};
export default DetailCharacter;
