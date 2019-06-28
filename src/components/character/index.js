import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../../store/actions";
import {  withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Character.css'
const ColorCircularProgress = withStyles({
    root: {
        color: '#00DA9C',
    },
})(CircularProgress);
const findCharacter =( id,characters )=>{
    let exist = "false";
    characters.map(element => {
        if(id == element.url){
            exist = element;
        }
    });
    return exist;
}

class Charactes extends Component {
    renderMini(theCharacter){
        const urlTo = '/Character/' + theCharacter.url.replace('https://swapi.co/api/people/', '');
        return <div className="people-element"><Link to={urlTo}><Chip label={theCharacter.name} clickable /></Link></div>
    };
    renderFull(theCharacter) {

        return <div>{theCharacter.name}</div>;
    };
    componentDidMount() {
        const nameUrl = this.props.people ? this.props.people : ('https://swapi.co/api/people/' + this.props.match.params.idCharacter + '/');
        const existElement = findCharacter(nameUrl, this.props.characters);
        if (existElement == "false"){
            this.props.onLoad(nameUrl);
        }

    }
    render() {
        const view = this.props.view ? this.props.view : 'full';
        let element = <ColorCircularProgress size={10} thickness={5} />;

        const nameurl = this.props.people ? this.props.people : ('https://swapi.co/api/people/' + this.props.match.params.idCharacter.replace('/', '') + '/');
        const charra = this.props.characters;
        const characterPeople = findCharacter(nameurl, charra);

        if (characterPeople != "false") {
            element = (view != 'mini') ? this.renderFull( characterPeople ) : this.renderMini( characterPeople )
        }
        return (
            <div className="people-element">{element}</div>
        );
    }
}


const mapState = (state, ownProps) => {
    const {
        characters
    } = state.characters;
    return {
        characters
    };
};

const mapDispatch = dispatch => ({
    onLoad: ( page ) =>
        dispatch({
            type: actions.FETCH_CHARACTERS,
            id: page
        })
});

export default connect(
    mapState,
    mapDispatch
)(Charactes);
