import omdbAxios from '../../utils/axiosConfig'

export const fetchMovies = async ({ searchTerm, pageNo }) => {
  try {
    const response = await omdbAxios({
      params: { s: searchTerm, page: pageNo },
    })

    if (response.data.Error) {
      throw new Error(response.data.Error)
    }

    return response.data.Search
  } catch (e) {
    throw e
  }
}

export const addMovieToStorage = (movie) => {
  try {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    favorites[movie.imdbID] = movie
    localStorage.setItem('favorites', JSON.stringify(favorites))
  } catch (e) {
    console.log(e)
  }
}

export const removeMovieFromStorage = (movieID) => {
  try {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    delete favorites[movieID]
    localStorage.setItem('favorites', JSON.stringify(favorites))
  } catch (e) {
    console.log(e)
  }
}

export const fetchMovie = async (movieID) => {
  try {
    const response = await omdbAxios({
      params: { i: movieID },
    })
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const fetchFavoritesFromStorage = () => {
  try {
    let localFavorites = JSON.parse(localStorage.getItem('favorites'))
    if (!localFavorites) {
      return {}
    } else {
      return localFavorites
    }
  } catch (e) {
    console.log(e)
  }
}
