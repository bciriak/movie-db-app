import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavoritesFromStorage } from '../actions'
import MovieList from '../components/MovieList'

const FavoriteMovies = () => {
  const dispatch = useDispatch()
  const favoriteMovies = useSelector((state) => state.movieReducer.favorites)

  useEffect(() => {
    dispatch(getFavoritesFromStorage())
  }, [dispatch])

  return (
    <>
      {favoriteMovies && (
        <div>
          <MovieList movies={favoriteMovies} favoritesList={true} />
        </div>
      )}
    </>
  )
}

export default FavoriteMovies
