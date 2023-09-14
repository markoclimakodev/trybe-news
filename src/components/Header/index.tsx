import { Logo } from './Logo'
import { HeaderContainer, Heading } from './header.styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Heading>TRYBE NEWS</Heading>
    </HeaderContainer>
  )
}
