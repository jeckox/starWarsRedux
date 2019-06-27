import * as actions from "../actions";

const initialState = {
    films: []
};


const filmDataRecevied = (state, action) => {
    const data = action.data;
    if (!data.length) return state;

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
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};