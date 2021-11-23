import { takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from "../Types";

import {
  ListGenre,
} from "./genreSagas";

import {
  ListMovie
} from "./movieSagas"

function* watchGenre() {
  yield all([
    takeEvery(actionTypes.GET_GENRE_LIST, ListGenre)
  ]);
}

function* watchMovie() {
  yield all([
    takeEvery(actionTypes.GET_MOVIE_LIST, ListMovie)
  ]);
}



export function* rootSaga() {
  yield all([
    fork(watchGenre),
    fork(watchMovie)
  ])
}