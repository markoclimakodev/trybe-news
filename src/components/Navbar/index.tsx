import { Category, CategoryContainer, Container } from './navbar.styles'

export const Navbar = () => {
  return (
    <Container>
      <CategoryContainer>
        <Category>
          <a href="#mais-recentes">Mais Recentes</a>
        </Category>
        <Category>
          <a href="#releases">Releases</a>
        </Category>
        <Category>
          <a href="#noticias">Notícias</a>
        </Category>
        <Category>
          <a href="#favoritas">Favoritas</a>
        </Category>
      </CategoryContainer>
    </Container>
  )
}
