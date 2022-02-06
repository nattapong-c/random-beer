import * as TYPES from '../type/beer';


const infoState = {
    loading: false,
    error: null,
    info: null
};

const previousState = {
    previous: []
};

export const beerInfoReducer = (state = infoState, { type, payload }) => {
    switch (type) {
        case TYPES.RANDOM_BEER_REQ:
            return { ...state, loading: true };
        case TYPES.RANDOM_BEER_SUCCESS:
            return { ...state, loading: false, error: null, info: payload.data };
        case TYPES.RANDOM_BEER_FAIL:
            return { ...state, loading: false, error: payload, info: null };
        default:
            return state;
    }
}

export const beerPreviousReducer = (state = previousState, { type, payload }) => {
    switch (type) {
        case TYPES.ADD_BEER:
            return { ...state, previous: state.previous.concat([payload]) };
        case TYPES.POP_BEER:
            return { ...state, previous: state.previous.filter((p, index) => index < state.previous.length - 1) };
        // case TYPES.CLEAR_BEER:
        //     return { ...state, previous: [] };
        default:
            return state;
    }
}