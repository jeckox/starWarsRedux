import * as actions from "../actions";

const initialState = {
    characters: []
};


const charactersDataRecevied = (state, action) => {
    const data = action.data;
    if (![data].length) return state;
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
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};