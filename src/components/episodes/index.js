import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Episode from '../episode'
import './Episodes.css'

const renderEpisodes = films => {
    const pelis = films.map((film) => {
        return <div className='episodes-content'><Episode theFilm={film} key={film.episode_id}></Episode></div>
    });
    return (
        <div>
            <h2>Episodes</h2>
            {pelis}
        </div>
    )
};

class Episodes extends Component {
    componentDidMount(){
        this.props.onLoad();
    }
    render() {
        const {films} = this.props;
        return (
            renderEpisodes(films)
        );
    }
}


const mapState = (state, ownProps) => {
    const {
        films
    } = state.episodes;
    return {
        films
    };
};

const mapDispatch = dispatch => ({
    onLoad: () =>
        dispatch({
            type: actions.FETCH_FILMS
        })
});

export default connect(
    mapState,
    mapDispatch
)(Episodes);
