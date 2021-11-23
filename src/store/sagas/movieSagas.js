import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';


export function* ListMovie(action) {
  const params = action.params;

  try {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1`;

    const response = yield axios.get(url, {
      headers: {
        accept: 'application/json'
      },
      params: params
    })

    yield put(actions.SetMovieList(response.data))
  } catch (err) {
    yield put(actions.SetMovieList(err.response.data))
  }
}

