import * as actions from '../actions';
import {getIdFromURL} from '../../utils/links';

const initialState = {
	films: []
};


const filmsDataRecevied = (state, action) => {
	const data = action.data.map(item => {
		return {
			...item,
			episodeId: item.episode_id,
			releaseDate: item.release_date,
			openingCrawl: item.opening_crawl,
			id: getIdFromURL(item.url),
			characters: item.characters.map((character)=>getIdFromURL(character))
		};
	});

	if (!data.length) {
		return state;
	}
	data.sort((a, b) => (a.episodeId > b.episodeId) ? 1 : -1);

	return {
		...state,
		films: data
	};
};
const filmDataRecevied = (state, action) => {
	const data = action.data;

	if (!data) {
		return state;
	}
	const newFilm = {
		...data,
		episodeId: data.episode_id,
		releaseDate: data.release_date,
		openingCrawl: data.opening_crawl,
		id: getIdFromURL(data.url),
		characters: data.characters.map((character)=>getIdFromURL(character))
	};
	const newState = [...state.films, newFilm];

	newState.sort((a, b) => (a.episodeId > b.episodeId) ? 1 : -1);

	return {
		...state,
		films: newState
	};
};

const handlers = {
	[actions.FILMS_RECEIVED]: filmsDataRecevied,
	[actions.FILM_RECEIVED]: filmDataRecevied
};

export default (state = initialState, action) => {
	const handler = handlers[action.type];

	if (typeof handler === 'undefined') {
		return state;
	}
	return handler(state, action);
};
