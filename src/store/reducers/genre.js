import * as actionTypes from '../Types';
import { updateState } from '../../utils/updateState';

const initialState = {
  genreList: []
}

const listGenre = (state, action) => {
  return updateState(state, {
    genreList: action.result.genres,
  });
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GENRE_LIST:
      return listGenre(state, action)
    default:
      return state;
  }
}


