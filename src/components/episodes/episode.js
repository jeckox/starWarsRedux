import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Character from '../character';


const renderCharacters = (characterData) => characterData.map((theCharacter) => <Character people={theCharacter} key={theCharacter} view="mini" />);
const episode = ({theFilm}) => {
	const {title, episodeId, director, characters} = theFilm;
	const episode = 'Episode ' + episodeId;

	return (
		<Card key={episodeId}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{episode}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{director}
					</Typography>

				</CardContent>

			</CardActionArea>
			<CardActions>
				<CardContent>
					{renderCharacters(characters)}
				</CardContent>
			</CardActions>
		</Card>
	);
};

episode.propTypes = {
	theFilm: PropTypes.object
};
export default episode;
