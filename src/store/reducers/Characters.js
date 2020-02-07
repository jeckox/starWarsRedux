import * as actions from '../actions';
import {getIdFromURL} from '../../utils/links';
const initialState = {
	characters: []
};

const charactersDataRecevied = (state, action) => {
	const data = {
		...action.data,
		eyeColor: action.data.eye_color,
		skinColor: action.data.skin_color,
		hairColor: action.data.hair_color,
		id: getIdFromURL(action.data.url),
		films: action.data.films.map((film)=>getIdFromURL(film))
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
