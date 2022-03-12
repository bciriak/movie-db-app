import { Routes, Route } from 'react-router-dom'
import { FavoriteMovies, MovieDetail, Search, SharedLayout } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Search />} />
          <Route path="/movie" element={<MovieDetail />} />
          <Route path="/favorite-movies" element={<FavoriteMovies />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
