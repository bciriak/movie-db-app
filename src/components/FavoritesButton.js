import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { StarOutlined, StarTwoTone } from '@ant-design/icons'
import { toast } from 'react-toastify'
import { addToFavorites, removeFromFavorites } from '../actions'

const FavoritesButton = ({ movie }) => {
  const dispatch = useDispatch()
  const [favoriteIDs, setFavoriteIDs] = useState([])

  useEffect(() => {
    setFavoriteIDs(Object.keys(JSON.parse(localStorage.getItem('favorites'))))
  }, [])

  const renderToggleFavoriteButton = (m) => {
    const isFavorite = favoriteIDs.includes(m.imdbID)

    if (isFavorite) {
      return <StarTwoTone onClick={() => handleRemoveFavorite(m)} />
    } else {
      return <StarOutlined onClick={() => handleAddFavorite(m)} />
    }
  }

  const handleAddFavorite = (m) => {
    setFavoriteIDs((prevState) => [...prevState, m.imdbID])
    dispatch(addToFavorites(m))
    toast.success(
      <p>
        <b>{m.Title}</b> added to favorites!
      </p>
    )
  }

  const handleRemoveFavorite = ({ imdbID, Title }) => {
    const filteredFavoriteIDs = favoriteIDs.filter((id) => id !== imdbID)
    setFavoriteIDs(filteredFavoriteIDs)
    dispatch(removeFromFavorites(imdbID))
    toast.info(
      <p>
        <b>{Title}</b> was removed from favorites!
      </p>
    )
  }

  return renderToggleFavoriteButton(movie)
}

export default FavoritesButton
