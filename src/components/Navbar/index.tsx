import { useContext, useEffect, useState } from 'react'
import { apiEndPoint } from '../../api'
import { NewsContext } from '../../context/NewsContext'
import { useNewsFetch } from '../../hooks/useNewsFetch'
import { Category, CategoryContainer, Container } from './navbar.styles'
import { ClickType } from './types'

export const Navbar = () => {
  const { handleNews } = useContext(NewsContext)
  const [newsType, setNewsType] = useState('latest')
  const news = useNewsFetch(apiEndPoint[newsType])

  const handleNewsType = ({ currentTarget }: ClickType) => {
    const { id } = currentTarget
    setNewsType(id)
  }

  useEffect(() => {
    handleNews(news)
  }, [handleNews, news])

  return (
    <Container>
      <CategoryContainer>
        <Category>
          <button onClick={handleNewsType} type="button" id="latest">
            Mais Recentes
          </button>
        </Category>
        <Category>
          <button onClick={handleNewsType} type="button" id="release">
            Releases
          </button>
        </Category>
        <Category>
          <button onClick={handleNewsType} type="button" id="news">
            Notícias
          </button>
        </Category>
        <Category>
          <button onClick={handleNewsType} type="button" id="favorites">
            Favoritas
          </button>
        </Category>
      </CategoryContainer>
    </Container>
  )
}
