import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { describe, vi } from 'vitest'
import App from '../App'
import renderWithRouter from './helpers/renderWithRouter'
import { mockFetch } from './mock/mockFetch'
import { news } from './mock/news'

describe('Test the News page', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(mockFetch)
    renderWithRouter(<App />, { route: '/news' })
  })

  it('Tests if the latest articles is rendered', async () => {
    const articles = await screen.findAllByRole('article')
    expect(articles).toHaveLength(20)
  })

  it('Tests if the user can favorite and unfavorite an article', async () => {
    const favoriteBtn = await screen.findByTestId(news.items[0].id)
    const loadMoreNewsBtn = screen.getByRole('button', {
      name: /mais notícias/i,
    })

    await userEvent.click(favoriteBtn)
    expect(favoriteBtn).toHaveClass('favorited')

    await userEvent.click(favoriteBtn)
    expect(favoriteBtn).toHaveClass('unfavorited')

    await userEvent.click(loadMoreNewsBtn)
    expect(await screen.findAllByRole('article')).toHaveLength(40)
  })
})
