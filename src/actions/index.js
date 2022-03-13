import {
  ADD_TO_FAVORITES_STARTED,
  GET_FAVORITES_STARTED,
  GET_MOVIES_REQUESTED,
  SET_DETAIL_MOVIE_ID,
  SET_DETAIL_MOVIE_STARTED,
  REMOVE_FROM_FAVORITES_STARTED,
  UNSET_DETAIL_MOVIE,
} from './types'

export const getMovies = (searchTerm) => {
  return {
    type: GET_MOVIES_REQUESTED,
    payload: searchTerm,
  }
}

export const setDetailMovieID = (movieID) => {
  return {
    type: SET_DETAIL_MOVIE_ID,
    payload: movieID,
  }
}

export const setDetailMovie = (movieID) => {
  return {
    type: SET_DETAIL_MOVIE_STARTED,
    payload: movieID,
  }
}

export const unsetDetailMovie = () => {
  return {
    type: UNSET_DETAIL_MOVIE,
  }
}

export const addToFavorites = (movie) => {
  return {
    type: ADD_TO_FAVORITES_STARTED,
    payload: movie,
  }
}

export const removeFromFavorites = (movieID) => {
  return {
    type: REMOVE_FROM_FAVORITES_STARTED,
    payload: movieID,
  }
}

export const getFavoritesFromStorage = () => {
  return {
    type: GET_FAVORITES_STARTED,
  }
}
