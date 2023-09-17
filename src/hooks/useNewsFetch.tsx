import { useEffect, useState } from 'react'
import { NewsItem, NewsResponse } from './types'

export const useNewsFetch = (url: string): NewsItem[] => {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        if (response.ok) {
          const data: NewsResponse = await response.json()
          setNews(data.items)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchNews()
  }, [url])

  return news
}
