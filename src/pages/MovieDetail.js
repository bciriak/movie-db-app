import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Col, Image, Row } from 'antd'
import { setDetailMovie } from '../actions'
import FavoritesButton from '../components/FavoritesButton'

const MovieDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const movieID = useSelector((state) => state.movieReducer.movieID)
  const movie = useSelector((state) => state.movieReducer.movie)

  useEffect(() => {
    if (movieID) {
      dispatch(setDetailMovie(movieID))
    } else {
      return navigate('/')
    }
  }, [navigate, movie, dispatch, movieID])

  return (
    <>
      {movie && (
        <>
          <Row gutter={10}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Image src={movie.Poster} />
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <FavoritesButton movie={movie} />
              <div>
                <small>Title</small>
                <h2>
                  {movie.Title} ({movie.Year})
                </h2>
                <small>Actors</small>
                <p>{movie.Actors}</p>
                <small>Box Office</small>
                <p>
                  <b>{movie.BoxOffice}</b>
                </p>
                <small>Ratings</small>
                {movie.Ratings.map((rating, index) => (
                  <div key={index}>
                    {rating.Source}: <b>{rating.Value}</b>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ marginTop: '20px' }}>
              <small>Plot</small>
              <p>{movie.Plot}</p>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default MovieDetail
