import { useState } from 'react'
import omdbAxios from '../utils/axiosConfig'
import { Col, Input, Row } from 'antd'
import MovieList from '../components/MovieList'

const { Search } = Input

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])

  const onSearch = async () => {
    setIsLoading(true)
    const response = await omdbAxios(``, {
      params: { s: searchValue },
    })
    setMovies(response.data.Search)
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
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
          <MovieList movies={movies} />
        </Col>
      </Row>
    </>
  )
}

export default Home
