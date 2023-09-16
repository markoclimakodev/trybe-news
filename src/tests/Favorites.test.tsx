import { screen } from '@testing-library/dom'
import { Favorites } from '../pages/Favorites'
import renderWithRouter from './helpers/renderWithRouter'

describe('Test the Favorite page', () => {
  it('Verify that the "Favorite" page renders the text "nenhuma notícia favoritada"when no news are favorited ', async () => {
    renderWithRouter(<Favorites />, { route: '/favorites' })
    screen.getByRole('heading', { name: /nenhuma notícia favoritada\./i })
  })
})
