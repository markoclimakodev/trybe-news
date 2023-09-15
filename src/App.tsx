import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Favorites } from './pages/Favorites'
import { Latest } from './pages/Latest'
import { News } from './pages/News'
import { Releases } from './pages/Releases'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Latest />} />
          <Route path="/news" element={<News />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
