import { screen } from '@testing-library/dom'
import App from '../App'
import renderWithRouter from './helpers/renderWithRouter'

describe('Test the Navbar Component', () => {
  it('Verify the presence of navigation links', () => {
    renderWithRouter(<App />, { route: '/' })
    const navigationLinks = screen.getAllByRole('link')
    expect(navigationLinks).toHaveLength(4)
  })

  it('Verify that clicking on "Releases" redirects the user to the releases page', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' })
    const releasesLink = screen.getByRole('link', { name: /releases/i })

    await user.click(releasesLink)
    expect(window.location.pathname).toBe('/releases')
  })

  it('Verify that clicking on "Notícias" redirects the user to the news page', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' })
    const newsLink = screen.getByRole('link', { name: /notícias/i })

    await user.click(newsLink)
    expect(window.location.pathname).toBe('/news')
  })

  it('Verify that clicking on "Favoritas" redirects the user to the favorites page', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' })
    const favoriteLink = screen.getByRole('link', { name: /favoritas/i })

    await user.click(favoriteLink)
    expect(window.location.pathname).toBe('/favorites')
  })

  it('Verify that clicking on "Mais recentes" redirects the user to the / page', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' })
    const latestLink = screen.getByRole('link', { name: /mais recentes/i })

    await user.click(latestLink)
    expect(window.location.pathname).toBe('/')
  })
})
