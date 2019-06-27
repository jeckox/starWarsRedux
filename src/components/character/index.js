import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Chip from '@material-ui/core/Chip';

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

    componentDidMount() {

        const existElement = findCharacter(this.props.people, this.props.characters);
        if (existElement == "false"){
            this.props.onLoad(this.props.people);
        }

    }
    render() {
        const nameurl = this.props.people;
        const charra = this.props.characters;
        const characterPeople = findCharacter(nameurl, charra);
        let element = <p>{nameurl}</p>;
        if (characterPeople != "false") {
            element = <Chip label={characterPeople.name} component="a" href="#chip" clickable />
        }
        return (
            element
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
