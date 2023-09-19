import { NEWS_URL, RELEASES_URL } from './endpoints'
import { news } from './news'
import { releases } from './releases'

export const mockFetch = (url: string) =>
  Promise.resolve({
    status: 200,
    ok: true,
    json: () => {
      if (url === RELEASES_URL) return Promise.resolve(releases)
      if (url === NEWS_URL) return Promise.resolve(news)
    },
  })
