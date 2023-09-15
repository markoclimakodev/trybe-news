import { useContext } from 'react'
import { newsUrl } from '../../api'
import { NewsCard } from '../../components/NewsCard'
import { NewsContext } from '../../context/NewsContext'
import { NewsItem } from '../../hooks/types'
import { useNewsFetch } from '../../hooks/useNewsFetch'
import { Container } from './news.styles'

export const News = () => {
  const news = useNewsFetch(newsUrl)
  const { favorites, handleFavoriteNews } = useContext(NewsContext)

  return (
    <Container>
      {news &&
        news.map((newsItem: NewsItem) => (
          <NewsCard
            key={newsItem.id}
            newsItem={newsItem}
            handleFavorite={handleFavoriteNews}
            isFavorite={favorites.some(
              (favorite) => favorite.id === newsItem.id,
            )}
          />
        ))}
    </Container>
  )
}
