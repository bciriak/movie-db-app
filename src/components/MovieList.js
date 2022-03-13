import { useDispatch } from 'react-redux'
import { Card, Col, Image, List, Row } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { addToFavorites, setDetailMovieID } from '../actions'

const MovieList = ({ movies }) => {
  const dispatch = useDispatch()

  const handleAddFavorite = (movie) => {
    dispatch(addToFavorites(movie))
  }

  const handleMovieDetail = (movieID) => {
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
                <StarOutlined onClick={() => handleAddFavorite(movie)} />
                <div>
                  <small>Title:</small>
                  <NavLink
                    onClick={() => handleMovieDetail(movie.imdbID)}
                    to="movie"
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
