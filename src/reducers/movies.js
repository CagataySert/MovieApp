import { FETCH_MOVIES, FETCH_MOVIES_ERROR } from '../actions/movies';

const initialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: payload
            };
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
}
