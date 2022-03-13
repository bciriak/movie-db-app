import { useState } from 'react'
import { Col, Input, Row } from 'antd'
import MovieList from '../components/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../actions'

const { Search } = Input

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movieReducer.all)

  const onSearch = async () => {
    setIsLoading(true)
    dispatch(getMovies(searchValue))
    setIsLoading(false)
  }

  return (
    <>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 8, offset: 8 }}
        >
          <Search
            className="search-input"
            placeholder="Movie title"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            loading={isLoading}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '50px' }}>
        <Col
          md={{ span: 22, offset: 1 }}
          lg={{ span: 18, offset: 3 }}
          xl={{ span: 14, offset: 5 }}
        >
          <MovieList movies={movies} />
        </Col>
      </Row>
    </>
  )
}

export default Home
