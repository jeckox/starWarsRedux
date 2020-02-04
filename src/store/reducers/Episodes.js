import * as actions from '../actions';

const initialState = {
	films: []
};


const filmDataRecevied = (state, action) => {
	const data = action.data.map(item => {
		return {
			...item,
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

const handlers = {
	[actions.FILMS_RECEIVED]: filmDataRecevied
};

export default (state = initialState, action) => {
	const handler = handlers[action.type];

	if (typeof handler === 'undefined') {
		return state;
	}
	return handler(state, action);
};
