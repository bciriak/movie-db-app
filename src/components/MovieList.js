import { Card, Col, Image, List, Row } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const MovieList = ({ movies }) => {
  const handleAddFavorite = () => {
    console.log('handle favorite')
  }

  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={movies}
      renderItem={(movie) => (
        <List.Item>
          <Card>
            <Row>
              <Col span={12}>
                <Image width={150} src={movie.Poster} />
              </Col>
              <Col className="movie-details" span={12}>
                <StarOutlined onClick={handleAddFavorite} />
                <div>
                  <small>Title:</small>
                  <NavLink to="movie">
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
