import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import App from '../App'
import renderWithRouter from './helpers/renderWithRouter'
import { latestNews } from './mock/latestNews'
import { mockFetch } from './mock/mockFetch'

describe('Test the Latest page', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(mockFetch)
    renderWithRouter(<App />, { route: '/' })
  })

  it('Tests if the articles is rendered', async () => {
    const articles = await screen.findAllByRole('article')
    expect(articles).toHaveLength(6)
  })

  it('Tests if the user can favorite and unfavorite an article', async () => {
    const favoriteBtn = await screen.findByTestId(latestNews.items[0].id)
    await userEvent.click(favoriteBtn)
    expect(favoriteBtn).toHaveClass('favorited')

    await userEvent.click(favoriteBtn)
    expect(favoriteBtn).toHaveClass('unfavorited')
  })
})
