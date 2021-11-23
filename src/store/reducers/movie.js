import * as actionTypes from '../Types';
import { updateState } from '../../utils/updateState';

const initialState = {
  movieList: []
}

const listMovie = (state, action) => {
  return updateState(state, {
    movieList: action.result.results,
  });
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIE_LIST:
      return listMovie(state, action)
    default:
      return state;
  }
}


