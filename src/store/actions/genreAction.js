import * as actionTypes from '../Types';

export const GetGenreList = (params) => ({
  type: actionTypes.GET_GENRE_LIST,
  params
});

export const SetGenreList = (result) => ({
  type: actionTypes.SET_GENRE_LIST,
  result
});
