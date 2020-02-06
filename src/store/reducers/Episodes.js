import * as actions from '../actions';

const initialState = {
	films: []
};


const filmsDataRecevied = (state, action) => {
	const data = action.data.map(item => {
		return {
			...item,
			urlId: item.url.replace('https://swapi.co/api/films/', '')[0],
			episodeId: item.episode_id,
			openingCrawl: item.opening_crawl,
			releaseDate: item.release_date
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
		openingCrawl: data.opening_crawl,
		releaseDate: data.release_date
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
