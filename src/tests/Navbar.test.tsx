import { screen } from '@testing-library/dom'
import { describe, vi } from 'vitest'
import App from '../App'
import renderWithRouter from './helpers/renderWithRouter'
import { mockFetch } from './mock/mockFetch'

describe('Test the Navbar Component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(mockFetch)
  })

  it('Verify the presence of navigation links', () => {
    renderWithRouter(<App />, { route: '/' })

    const navigationLinks = screen.getAllByRole('link')
    expect(navigationLinks).toHaveLength(4)
  })

  it('Verify that clicking on "Releases" redirects the user to the releases page', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' })
    const releasesLink = screen.getByRole('link', { name: /releases/i })
    const newsLink = screen.getByRole('link', { name: /notícias/i })
    const favoriteLink = screen.getByRole('link', { name: /favoritas/i })

    await user.click(releasesLink)
    expect(window.location.pathname).toBe('/releases')

    await user.click(newsLink)
    expect(window.location.pathname).toBe('/news')

    await user.click(favoriteLink)
    expect(window.location.pathname).toBe('/favorites')
  })
})
