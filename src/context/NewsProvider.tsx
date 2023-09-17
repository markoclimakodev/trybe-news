import { useEffect, useState } from 'react'
import { NewsContext } from './NewsContext'
import { NewsContextType, NewsItem } from './types'

type NewsProviderProps = {
  children: React.ReactNode
}
export const NewsProvider = ({ children }: NewsProviderProps) => {
  const [favorites, setFavorites] = useState<NewsItem[]>([])

  const loadFavoritesFromLocalStorage = () => {
    const favoritedNews = localStorage.getItem('favoritesNews')
    if (favoritedNews) {
      const favoritedRecipes = JSON.parse(favoritedNews)
      setFavorites(favoritedRecipes)
    }
  }

  useEffect(() => {
    loadFavoritesFromLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('favoritesNews', JSON.stringify(favorites))
  }, [favorites])

  const handleFavoriteNews = (newFavorite: NewsItem) => {
    const isAlreadyFavorited = favorites.some(
      (favorite) => favorite.id === newFavorite.id,
    )

    if (isAlreadyFavorited) {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== newFavorite.id,
      )
      setFavorites(updatedFavorites)
    }

    if (!isAlreadyFavorited) {
      setFavorites([...favorites, newFavorite])
    }
  }

  const providerValues: NewsContextType = {
    favorites,
    handleFavoriteNews,
  }

  return (
    <NewsContext.Provider value={providerValues}>
      {children}
    </NewsContext.Provider>
  )
}
