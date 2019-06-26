import axios from 'axios'

const getFilms = async() => {
    axios.get('http https://swapi.co/api/films').then(res => {
        const films = res.results;
        return films;
    });
}
export default getFilms;