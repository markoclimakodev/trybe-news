import { LATEST_URL, NEWS_URL, RELEASES_URL } from './endpoints'
import { latestNews } from './latestNews'
import { news } from './news'
import { releases } from './releases'

export const mockFetch = (url: string) =>
  Promise.resolve({
    status: 200,
    ok: true,
    json: () => {
      if (url === LATEST_URL) return Promise.resolve(latestNews)
      if (url === RELEASES_URL) return Promise.resolve(releases)
      if (url === NEWS_URL) return Promise.resolve(news)
      return Promise.reject(new Error('Error: Failed to fetch'))
    },
  })

export const mockFetchFailed = () =>
  Promise.resolve({
    status: 400,
    ok: false,
    json: () => Promise.reject(new Error('Error: Failed to fetch')),
  })
