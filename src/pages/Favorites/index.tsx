import { useContext } from 'react'
import { NewsCard } from '../../components/NewsCard'
import { NewsContext } from '../../context/NewsContext'
import { NewsItem } from '../../hooks/types'
import { Container } from './favorites.styles'

export const Favorites = () => {
  const { favorites, handleFavoriteNews } = useContext(NewsContext)
  const noFavorites = favorites.length === 0
  return (
    <Container>
      {noFavorites && <h2>Nenhuma notícia favoritada.</h2>}
      {!noFavorites &&
        favorites.map((newsItem: NewsItem) => (
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
  )
}
