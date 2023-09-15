import { Link } from 'react-router-dom'
import { Category, CategoryContainer, Container } from './navbar.styles'

export const Navbar = () => {
  return (
    <Container>
      <CategoryContainer>
        <Category>
          <Link to="/">Mais Recentes</Link>
        </Category>
        <Category>
          <Link to="/releases">Releases</Link>
        </Category>
        <Category>
          <Link to="/news">Notícias</Link>
        </Category>
        <Category>
          <Link to="/favorites">Favoritas</Link>
        </Category>
      </CategoryContainer>
    </Container>
  )
}
