import { FeaturedNews } from './components/FeaturedNews'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { News } from './components/News/index'

function App() {
  return (
    <>
      <Header />
      <FeaturedNews />
      <Navbar />
      <News />
    </>
  )
}

export default App
