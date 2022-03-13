import omdbAxios from '../../utils/axiosConfig'

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await omdbAxios({
      params: { s: searchTerm },
    })
    return response.data.Search
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const addMovieToStorage = (movie) => {
  let favorites = []
  try {
    let localFavorites = JSON.parse(localStorage.getItem('favorites'))
    if (!localFavorites) {
      favorites.push(movie)
    } else {
      favorites = [...localFavorites, movie]
    }
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
      return []
    } else {
      return localFavorites
    }
  } catch (e) {
    console.log(e)
  }
}
