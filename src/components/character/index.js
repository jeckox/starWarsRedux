import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Chip from '@material-ui/core/Chip';

const findCharacter =( id,characters )=>{
    let exist = false;
    console.info('........');
    console.info(id);
    console.info(characters);
    console.info('........');
    characters.map(element => {
        console.info(id + ' - ' + element.url);
        if(id == element.url){
            exist = element;
        }
    });
    console.info(exist);
    return exist;
}

class Charactes extends Component {

    componentDidMount() {
        //this.props.onLoad();
        if (findCharacter(this.props.people, this.props.characters) == false){
            this.props.onLoad(this.props.people);
        }

    }
    render() {
       // const { characters } = findCharacter(this.props.people, this.props.characters);
        //const elementCh = characters ? <Chip label={characters.name} component="a" href="#chip" clickable /> : <span></span>
        //console.info(this.props.characters);
        return (
            <p>nm</p>
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
