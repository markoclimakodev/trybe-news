import { screen } from '@testing-library/dom'
import { vi } from 'vitest'
import App from '../App'
import renderWithRouter from './helpers/renderWithRouter'
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
    expect(articles).toHaveLength(11)
  })
})
