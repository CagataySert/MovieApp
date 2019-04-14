import {
    NEW_MOVIE_PENDING,
    NEW_MOVIE_FULFILLED,
    NEW_MOVIE_REJECTED,

    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED,

    UPDATE_MOVIE_PENDING,
    UPDATE_MOVIE_FULFILLED,
    UPDATE_MOVIE_REJECTED
} from '../actions/newMovie';

const initialState = {
    fetching: false,
    error: {},
    done: false,
    movie: {
        fetching: false
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            };
        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            };
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false,
                error: payload
            };

        //FETCH_MOVIE
        case FETCH_MOVIE_PENDING:
            return {
                ...state,
                movie: {
                    fetching: true
                }
            };
        case FETCH_MOVIE_FULFILLED:
            return {
                ...state,
                movie: {
                    ...payload.movie,
                    fetching: false
                }
            };
        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                movie: {
                    fetching: false
                }
            };

        //UPDATE_MOVIE
        case UPDATE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            };
        case UPDATE_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            };
        case UPDATE_MOVIE_REJECTED:
            return {
                ...state,
                error: payload,
                fetching: false
            };
        default:
            return state;
    }
}
