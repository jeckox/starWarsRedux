import * as actions from '../actions';

const initialState = {
	characters: []
};

const charactersDataRecevied = (state, action) => {
	const data = {
		...action.data,
		films: action.data.films.map((film)=>film.replace('https://swapi.co/api/films/', '')[0]),
		hairColor: action.data.hair_color,
		skinColor: action.data.skin_color,
		eyeColor: action.data.eye_color
	};

	if (![data].length) {
		return state;
	}
	return {
		...state,
		characters: [...state.characters, data]
	};
};

const handlers = {
	[actions.CHARACTERS_RECEIVED]: charactersDataRecevied
};

export default (state = initialState, action) => {
	const handler = handlers[action.type];

	if (typeof handler === 'undefined') {
		return state;
	}
	return handler(state, action);
};
