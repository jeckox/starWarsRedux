import React, { Component } from 'react';
import API from './../../store/api';
import axios from 'axios';
class Episodes extends Component {
    state = {
        films : []
    }
    componentDidMount(){
        //console.info(API.getFilms());
        axios.get('https://swapi.co/api/films').then(res => {
            const films = res.results;
            this.setState({ films });
        });
    }
    render() {
        return (
            <p>Episodes</p>
        );
    }
}
export default Episodes;
