import { format } from 'date-fns'

const newsUrl =
  'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&qtd=32&introsize=60'

const releaseUrl =
  'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release&qtd=32&introsize=60'

const today = new Date()
const formattedDate = format(today, 'MM-dd-yyyy')

const latestNews = `http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&de=${formattedDate}&ate=${formattedDate}`

export const apiEndPoint: Record<string, string> = {
  latest: latestNews,
  release: releaseUrl,
  news: newsUrl,
}
