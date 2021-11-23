import { combineReducers } from 'redux';

import genreReducer from './genre';
import movieReducer from './movie';

const rootReducer = combineReducers({
    genre: genreReducer,
    movie: movieReducer,
});

export default rootReducer;