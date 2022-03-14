import { useDispatch } from 'react-redux'
// import { useState, useEffect } from 'react'
import { Card, Col, Image, List, Row } from 'antd'
// import { StarOutlined, StarTwoTone } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import {
  // addToFavorites,
  // removeFromFavorites,
  setDetailMovieID,
  unsetDetailMovie,
} from '../actions'
import FavoritesButton from './FavoritesButton'
// import { toast } from 'react-toastify'

const MovieList = ({ movies }) => {
  const dispatch = useDispatch()
  // const [favoriteIDs, setFavoriteIDs] = useState([])
  //
  // useEffect(() => {
  //   setFavoriteIDs(Object.keys(JSON.parse(localStorage.getItem('favorites'))))
  // }, [])
  //
  // const renderToggleFavoriteButton = (movie) => {
  //   const isFavorite = favoriteIDs.includes(movie.imdbID)
  //
  //   if (isFavorite) {
  //     return <StarTwoTone onClick={() => handleRemoveFavorite(movie)} />
  //   } else {
  //     return <StarOutlined onClick={() => handleAddFavorite(movie)} />
  //   }
  // }
  //
  // const handleAddFavorite = (movie) => {
  //   setFavoriteIDs((prevState) => [...prevState, movie.imdbID])
  //   dispatch(addToFavorites(movie))
  //   toast.success(
  //     <p>
  //       <b>{movie.Title}</b> added to favorites!
  //     </p>
  //   )
  // }
  //
  // const handleRemoveFavorite = ({ imdbID, Title }) => {
  //   const filteredFavoriteIDs = favoriteIDs.filter((id) => id !== imdbID)
  //   setFavoriteIDs(filteredFavoriteIDs)
  //   dispatch(removeFromFavorites(imdbID))
  //   toast.info(
  //     <p>
  //       <b>{Title}</b> was removed from favorites!
  //     </p>
  //   )
  // }

  const handleMovieDetail = (movieID) => {
    dispatch(unsetDetailMovie())
    dispatch(setDetailMovieID(movieID))
  }

  return (
    <>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={movies}
        renderItem={(movie) => (
          <List.Item>
            <Card>
              <Row>
                <Col md={{ span: 12 }}>
                  <Image src={movie.Poster} />
                </Col>
                <Col className="movie-details" md={{ span: 12 }}>
                  <FavoritesButton movie={movie} />
                  <div>
                    <small>Title:</small>
                    <NavLink
                      onClick={() => handleMovieDetail(movie.imdbID)}
                      to="/movie"
                    >
                      <b>{movie.Title}</b>
                    </NavLink>
                    <small>Release Year:</small>
                    <b>{movie.Year}</b>
                  </div>
                  <div className="imdb-link">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.imdb.com/title/${movie.imdbID}`}
                    >
                      IMDB Link
                    </a>
                  </div>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}

export default MovieList
