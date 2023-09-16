import { screen } from '@testing-library/dom'
import { vi } from 'vitest'
import { Releases } from '../pages/Releases'
import renderWithRouter from './helpers/renderWithRouter'
import { releases } from './mock/releases'

describe('Test the Releases page', () => {
  it('Verify that the "Releases" page renders news articles correctly', async () => {
    const { user } = renderWithRouter(<Releases />, { route: '/releases' })
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => releases,
    })
    const articles = await screen.findAllByRole('article')
    const favoriteBtn = await screen.findByTestId(releases[0].id)
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
