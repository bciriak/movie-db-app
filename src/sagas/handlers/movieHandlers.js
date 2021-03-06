import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchMovies,
  addMovieToStorage,
  fetchMovie,
  fetchFavoritesFromStorage,
  removeMovieFromStorage,
} from '../requests/movieRequests'
import {
  ADD_TO_FAVORITES_STARTED,
  ADD_TO_FAVORITES_SUCCESS,
  ADD_TO_FAVORITES_ERROR,
  GET_MOVIES_ERROR,
  GET_MOVIES_REQUESTED,
  GET_MOVIES_SUCCESS,
  SET_DETAIL_MOVIE_SUCCESS,
  SET_DETAIL_MOVIE_ERROR,
  SET_DETAIL_MOVIE_STARTED,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_ERROR,
  GET_FAVORITES_STARTED,
  REMOVE_FROM_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES_ERROR,
  REMOVE_FROM_FAVORITES_STARTED,
} from '../../actions/types'

function* handleGetMovies({ payload }) {
  try {
    const movies = yield call(fetchMovies, payload)
    yield put({ type: GET_MOVIES_SUCCESS, payload: movies })
  } catch (e) {
    yield put({ type: GET_MOVIES_ERROR, payload: e.message })
  }
}

function* handleAddMovieToFavorites({ payload }) {
  try {
    yield call(addMovieToStorage, payload)
    yield put({ type: ADD_TO_FAVORITES_SUCCESS, payload: payload })
  } catch (e) {
    yield put({ type: ADD_TO_FAVORITES_ERROR, payload: e.message })
  }
}

function* handleRemoveMovieFromFavorites({ payload }) {
  try {
    yield call(removeMovieFromStorage, payload)
    yield put({ type: REMOVE_FROM_FAVORITES_SUCCESS, payload: payload })
  } catch (e) {
    yield put({ type: REMOVE_FROM_FAVORITES_ERROR, payload: e.message })
  }
}

function* handleSetDetailMovie({ payload }) {
  try {
    const movie = yield call(fetchMovie, payload)
    yield put({ type: SET_DETAIL_MOVIE_SUCCESS, payload: movie })
  } catch (e) {
    yield put({ type: SET_DETAIL_MOVIE_ERROR, payload: e.message })
  }
}

function* handleGetFavorites() {
  try {
    const localFavorites = yield call(fetchFavoritesFromStorage)
    let favorites = []
    for (let key in localFavorites) {
      favorites.push(localFavorites[key])
    }
    yield put({ type: GET_FAVORITES_SUCCESS, payload: favorites })
  } catch (e) {
    yield put({ type: GET_FAVORITES_ERROR, payload: e.message })
  }
}

export function* moviesWatcher() {
  yield takeEvery(GET_MOVIES_REQUESTED, handleGetMovies)
  yield takeEvery(ADD_TO_FAVORITES_STARTED, handleAddMovieToFavorites)
  yield takeEvery(REMOVE_FROM_FAVORITES_STARTED, handleRemoveMovieFromFavorites)
  yield takeEvery(SET_DETAIL_MOVIE_STARTED, handleSetDetailMovie)
  yield takeEvery(GET_FAVORITES_STARTED, handleGetFavorites)
}

export default moviesWatcher
