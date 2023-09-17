import { screen } from '@testing-library/dom'
import { describe, vi } from 'vitest'
import App from '../App'
import renderWithRouter from './helpers/renderWithRouter'
import { mockFetch } from './mock/mockFetch'

describe('Test the Header Component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(mockFetch)
  })
  it('Test the logo and heading of the Header', () => {
    renderWithRouter(<App />, { route: '/' })
    screen.getByTestId('app-logo')
    screen.getByRole('heading', { name: /trybe news ibge/i })
  })
})
