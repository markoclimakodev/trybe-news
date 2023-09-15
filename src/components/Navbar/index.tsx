import { Category, CategoryContainer, Container } from './navbar.styles'

export const Navbar = () => {
  return (
    <Container>
      <CategoryContainer>
        <Category>
          <a href="/">Mais Recentes</a>
        </Category>
        <Category>
          <a href="/releases">Releases</a>
        </Category>
        <Category>
          <a href="/news">Notícias</a>
        </Category>
        <Category>
          <a href="/favorites">Favoritas</a>
        </Category>
      </CategoryContainer>
    </Container>
  )
}
