import { useContext, useState } from 'react'
import { releaseUrl } from '../../api'
import Button from '../../components/Button'
import { NewsCard } from '../../components/NewsCard'
import { NewsContext } from '../../context/NewsContext'
import { NewsItem } from '../../hooks/types'
import { useNewsFetch } from '../../hooks/useNewsFetch'
import { Container, NewsContainer } from './latest.styles'

const initialNewsCount = 20

export const Releases = () => {
  const news = useNewsFetch(releaseUrl)
  const { favorites, handleFavoriteNews } = useContext(NewsContext)
  const [displayedNews, setDisplayedNews] = useState(initialNewsCount)

  const handleLoadMoreNews = () => {
    const newsPerLoad = 20
    setDisplayedNews(displayedNews + newsPerLoad)
  }
  return (
    <Container>
      <NewsContainer>
        {news &&
          news
            .slice(0, displayedNews)
            .map((newsItem: NewsItem) => (
              <NewsCard
                key={newsItem.id}
                newsItem={newsItem}
                handleFavorite={handleFavoriteNews}
                isFavorite={favorites.some(
                  (favorite) => favorite.id === newsItem.id,
                )}
              />
            ))}
      </NewsContainer>
      {displayedNews < news.length && (
        <Button
          role="read more"
          title="MAIS NOTÍCIAS"
          onClick={handleLoadMoreNews}
        />
      )}
    </Container>
  )
}
