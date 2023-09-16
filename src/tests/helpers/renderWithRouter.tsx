import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { NewsProvider } from '../../context/NewsProvider'

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, '', route)

  return {
    user: userEvent.setup(),
    ...render(
      <BrowserRouter>
        <NewsProvider>{ui}</NewsProvider>
      </BrowserRouter>,
    ),
  }
}

export default renderWithRouter
