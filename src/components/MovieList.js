import { useDispatch } from 'react-redux'
import { Card, Col, Image, List, Row } from 'antd'
import { StarOutlined, StarTwoTone } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import {
  addToFavorites,
  removeFromFavorites,
  setDetailMovieID,
  unsetDetailMovie,
} from '../actions'
import { toast } from 'react-toastify'

const MovieList = ({ movies, favoritesList = false }) => {
  const dispatch = useDispatch()

  const renderToggleFavoriteButton = (movie) => {
    if (favoritesList) {
      return <StarTwoTone onClick={() => handleRemoveFavorite(movie)} />
    } else {
      return <StarOutlined onClick={() => handleAddFavorite(movie)} />
    }
  }

  const handleAddFavorite = (movie) => {
    dispatch(addToFavorites(movie))
    toast.success(
      <p>
        <b>{movie.Title}</b> added to favorites!
      </p>
    )
  }

  const handleRemoveFavorite = ({ imdbID, Title }) => {
    dispatch(removeFromFavorites(imdbID))
    toast.success(
      <p>
        <b>{Title}</b> was removed from favorites!
      </p>
    )
  }

  const handleMovieDetail = (movieID) => {
    dispatch(unsetDetailMovie())
    dispatch(setDetailMovieID(movieID))
  }

  return (
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
                {renderToggleFavoriteButton(movie)}
                {/*<StarOutlined onClick={() => handleAddFavorite(movie)} />*/}
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
  )
}

export default MovieList
