import { useContext } from 'react'
import { NewsContext } from '../../context/NewsContext'
import { NewsItem } from '../../hooks/types'
import { NewsCard } from './NewsCard'
import { Container } from './newcard.styles'

export const News = () => {
  const { news } = useContext(NewsContext)

  return (
    <Container>
      {news &&
        news.map((newsItem: NewsItem) => (
          <NewsCard key={newsItem.id} {...newsItem} />
        ))}
    </Container>
  )
}
