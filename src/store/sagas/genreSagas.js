import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';


export function* ListGenre(action) {
  const params = action.params;

  try {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49`;

    const response = yield axios.get(url, {
      headers: {
        accept: 'application/json'
      },
      params: params
    })

    yield put(actions.SetGenreList(response.data))
  } catch (err) {
    yield put(actions.SetGenreList(err.response.data))
  }
}

