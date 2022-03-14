import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Button, Col, Input, Row } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import MovieList from '../components/MovieList'
import { getMovies } from '../actions'

const { Search } = Input

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movieReducer.all)
  const error = useSelector((state) => state.movieReducer.error)

  const onSearch = async () => {
    setIsLoading(true)
    setCurrentPage(1)
    dispatch(getMovies(searchValue, 1))
    setIsLoading(false)
  }

  const handlePagination = (direction) => {
    let page
    setIsLoading(true)
    if (direction === 'next') {
      page = currentPage + 1
    } else if (direction === 'prev' && currentPage > 1) {
      page = currentPage - 1
    } else {
      page = 1
    }

    setCurrentPage(page)
    dispatch(getMovies(searchValue, page))
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
          {error && <Alert message={error} type="error" />}
          {movies.length > 0 && (
            <div className="pagination">
              <Button
                type="primary"
                shape="round"
                onClick={() => handlePagination('prev')}
                icon={<LeftOutlined />}
              />
              <Button
                type="primary"
                shape="round"
                onClick={() => handlePagination('next')}
                icon={<RightOutlined />}
              />
            </div>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Home
