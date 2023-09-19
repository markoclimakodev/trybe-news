import { useContext, useState } from 'react'
import { newsUrl } from '../../api'
import Button from '../../components/Button'
import { NewsCard } from '../../components/NewsCard'
import { NewsContext } from '../../context/NewsContext'
import { NewsItem } from '../../hooks/types'
import { useNewsFetch } from '../../hooks/useNewsFetch'
import { Container, NewsContainer } from './news.styles'

export const News = () => {
  const news = useNewsFetch(newsUrl)
  const { favorites, handleFavoriteNews } = useContext(NewsContext)
  const [displayedNews, setDisplayedNews] = useState(30)

  const handleLoadMoreNews = () => {
    const newsPerLoad = 20
    setDisplayedNews(displayedNews + newsPerLoad)
  }
  return (
    <Container>
      <NewsContainer>
        {news &&
          news
            .slice(10, displayedNews)
            .map((newsItem: NewsItem) => (
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
