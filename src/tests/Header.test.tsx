import { screen } from '@testing-library/dom'
import App from '../App'
import renderWithRouter from './helpers/renderWithRouter'

describe('Test the Header Component', () => {
  it('Test the logo and heading of the Header', () => {
    renderWithRouter(<App />, { route: '/' })
    screen.getByTestId('app-logo')
    screen.getByRole('heading', { name: /trybe news ibge/i })
  })
})
