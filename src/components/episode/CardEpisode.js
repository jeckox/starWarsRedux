import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Character from '../character';

const CardEpisode = ({episode}) => {
	const {title, episodeId, director, characters} = episode;
	const episodeNumber = 'Episode ' + episodeId;

	return (
		<Card key={episodeId}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{episodeNumber}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{director}
					</Typography>

				</CardContent>

			</CardActionArea>
			<CardActions>
				<CardContent>
					{characters.map((character) => <Character people={character} key={character} view="mini" />)}
				</CardContent>
			</CardActions>
		</Card>
	);
};

CardEpisode.propTypes = {
	episode: PropTypes.object
};
export default CardEpisode;
