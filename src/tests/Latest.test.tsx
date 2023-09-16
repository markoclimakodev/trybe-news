import { screen } from '@testing-library/dom'
import { vi } from 'vitest'
import { Latest } from '../pages/Latest'
import renderWithRouter from './helpers/renderWithRouter'
import { latestNews } from './mock/latestNews'

describe('Test the Latest page', () => {
  it('Verify that the "Latest" page renders news articles correctly', async () => {
    const { user } = renderWithRouter(<Latest />, { route: '/' })
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => latestNews,
    })
    const articles = await screen.findAllByRole('article')
    const favoriteBtn = await screen.findByTestId(latestNews[0].id)

    expect(articles).toHaveLength(6)

    await user.click(favoriteBtn)
    expect(favoriteBtn).toHaveClass('favorited')

    await user.click(favoriteBtn)
    expect(favoriteBtn).toHaveClass('unfavorited')
  })
})
