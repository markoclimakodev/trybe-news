import { screen } from '@testing-library/dom'
import { vi } from 'vitest'
import { News } from '../pages/News'
import renderWithRouter from './helpers/renderWithRouter'
import { news } from './mock/news'

describe('Test the News page', () => {
  it('Verify that the "News" page renders news articles correctly', async () => {
    const { user } = renderWithRouter(<News />, { route: '/news' })
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => news,
    })
    const articles = await screen.findAllByRole('article')
    const favoriteBtn = await screen.findByTestId(news[0].id)
    const loadMoreNewsBtn = screen.getByRole('button', {
      name: /mais notícias/i,
    })

    expect(articles).toHaveLength(20)

    await user.click(favoriteBtn)
    expect(favoriteBtn).toHaveClass('favorited')

    await user.click(favoriteBtn)
    expect(favoriteBtn).toHaveClass('unfavorited')

    await user.click(loadMoreNewsBtn)
    expect(await screen.findAllByRole('article')).toHaveLength(40)
  })
})
