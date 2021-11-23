import * as actionTypes from '../Types';

export const GetMovieList = (params) => ({
  type: actionTypes.GET_MOVIE_LIST,
  params
});

export const SetMovieList = (result) => ({
  type: actionTypes.SET_MOVIE_LIST,
  result
});
