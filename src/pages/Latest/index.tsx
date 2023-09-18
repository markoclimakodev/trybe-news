import { useContext } from 'react'
import { latestNewsUrl } from '../../api'
import { NewsCard } from '../../components/NewsCard'
import { NewsContext } from '../../context/NewsContext'
import { NewsItem } from '../../hooks/types'
import { useNewsFetch } from '../../hooks/useNewsFetch'
import { Container } from './latest.styles'

export const Latest = () => {
  const news = useNewsFetch(latestNewsUrl)
  const { favorites, handleFavoriteNews } = useContext(NewsContext)
  return (
    <>
      <Container>
        {news &&
          news.map((newsItem: NewsItem) => (
            <NewsCard
              key={newsItem.id}
              testId={newsItem.id}
              newsItem={newsItem}
              handleFavorite={handleFavoriteNews}
              isFavorite={favorites.some(
                (favorite) => favorite.id === newsItem.id,
              )}
            />
          ))}
      </Container>
    </>
  )
}
