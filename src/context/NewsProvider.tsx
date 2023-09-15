import { useState } from 'react'
import { NewsContext } from './NewsContext'
import { NewsContextType, NewsItem } from './types'

type NewsProviderProps = {
  children: React.ReactNode
}
export const NewsProvider = ({ children }: NewsProviderProps) => {
  const [news, setNews] = useState<NewsItem[]>([])

  const handleNews = (newsArray: NewsItem[]) => {
    setNews(newsArray)
  }

  const providerValues: NewsContextType = {
    news,
    handleNews,
  }

  return (
    <NewsContext.Provider value={providerValues}>
      {children}
    </NewsContext.Provider>
  )
}
