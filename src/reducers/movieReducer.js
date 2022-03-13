import {
  ADD_TO_FAVORITES_ERROR,
  ADD_TO_FAVORITES_STARTED,
  ADD_TO_FAVORITES_SUCCESS,
  GET_FAVORITES_ERROR,
  GET_FAVORITES_STARTED,
  GET_FAVORITES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIES_REQUESTED,
  GET_MOVIES_SUCCESS,
  SET_DETAIL_MOVIE_ERROR,
  SET_DETAIL_MOVIE_ID,
  SET_DETAIL_MOVIE_STARTED,
  SET_DETAIL_MOVIE_SUCCESS,
} from '../actions/types'

const initialState = {
  all: [],
  movie: null,
  movieID: null,
  loading: false,
  favorites: [],
  error: null,
}

const movieReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_MOVIES_REQUESTED:
      return { ...state, loading: true }
    case GET_MOVIES_SUCCESS:
      return { ...state, loading: false, all: payload }
    case GET_MOVIES_ERROR:
      return { ...state, loading: false, error: payload }
    case SET_DETAIL_MOVIE_ID:
      return { ...state, movieID: payload }
    case SET_DETAIL_MOVIE_STARTED:
      return { ...state, loading: true }
    case SET_DETAIL_MOVIE_SUCCESS:
      return { ...state, loading: false, movie: payload }
    case SET_DETAIL_MOVIE_ERROR:
      return { ...state, loading: false, error: payload }
    case ADD_TO_FAVORITES_STARTED:
      return { ...state, loading: true }
    case ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        loading: false,
        favorites: [...state.favorites, payload],
      }
    case ADD_TO_FAVORITES_ERROR:
      return { ...state, loading: false, error: payload }
    case GET_FAVORITES_STARTED:
      return { ...state, loading: true }
    case GET_FAVORITES_SUCCESS:
      return { ...state, loading: false, favorites: payload }
    case GET_FAVORITES_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default movieReducer
