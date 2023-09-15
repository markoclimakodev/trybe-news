import { releaseUrl } from '../../api'
import { NewsCard } from '../../components/NewsCard'
import { NewsItem } from '../../hooks/types'
import { useNewsFetch } from '../../hooks/useNewsFetch'
import { Container } from './latest.styles'

export const Releases = () => {
  const news = useNewsFetch(releaseUrl)
  return (
    <Container>
      {news &&
        news.map((newsItem: NewsItem) => (
          <NewsCard key={newsItem.id} {...newsItem} />
        ))}
    </Container>
  )
}
