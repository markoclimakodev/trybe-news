import { screen } from '@testing-library/dom'
import { describe, vi } from 'vitest'
import App from '../App'
import renderWithRouter from './helpers/renderWithRouter'
import { ERROR_URL } from './mock/endpoints'
import { mockFetch, mockFetchFailed } from './mock/mockFetch'

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

describe('Tests API Error ', () => {
  it('Tests if the API throws a 400 error', async () => {
    global.fetch = vi.fn().mockImplementation(mockFetchFailed)
    const response = await fetch(ERROR_URL)
    expect(response.status).toBe(400)
  })
})
