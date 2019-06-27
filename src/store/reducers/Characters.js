import * as actions from "../actions";

const initialState = {
    characters: [],
    charactersHistory: []
};


const charactersDataRecevied = (state, action) => {
    const data = action.data;
    let newData = [];
    //if (!data.length) return state;
    newData = data;
    console.info(newData);
    console.info(state.characters);
    console.info('-------');
    return {
        ...state,
        characters: [newData, ...state.characters]
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