import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Character from './../character'

const useStyles = makeStyles({
    card: {
        display:"inline-block",
        margin: 10,
        verticalAlign: 'top'
    },
});
const character = ( characterData )=>{
    return characterData.map((theCharacter) =>{
        return <Character people={theCharacter} key="characterData" view="mini"/>
    })
}
const episode = ( theFilm ) => {
    const classes = useStyles();
    const title = theFilm.theFilm.title;
    const episodeId = theFilm.theFilm.episode_id;
    const episode = "Episode " + theFilm.theFilm.episode_id;
    const director = theFilm.theFilm.director;
    const characters = theFilm.theFilm.characters;
    return (
        <Card className={classes.card} key={episodeId}>
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
                    {character(characters)}
                </CardContent>
            </CardActions>
        </Card>
    );;
}

export default episode;
