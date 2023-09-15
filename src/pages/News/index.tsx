import { newsUrl } from '../../api'
import { NewsCard } from '../../components/NewsCard'
import { NewsItem } from '../../hooks/types'
import { useNewsFetch } from '../../hooks/useNewsFetch'
import { Container } from './news.styles'

export const News = () => {
  const news = useNewsFetch(newsUrl)
  console.log(news)
  return (
    <Container>
      {news &&
        news.map((newsItem: NewsItem) => (
          <NewsCard key={newsItem.id} {...newsItem} />
        ))}
    </Container>
  )
}
