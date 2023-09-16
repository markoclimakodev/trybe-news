import { format, subDays } from 'date-fns'

export const newsUrl =
  'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&qtd=100&introsize=60'

export const releaseUrl =
  'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release&qtd=100&introsize=60'

const today = new Date()
const threeDaysAgo = subDays(today, 3)
const formattedDate = format(today, 'MM-dd-yyyy')
const formattedThreeDaysAgo = format(threeDaysAgo, 'MM-dd-yyyy')

export const latestNewsUrl = `http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&de=${formattedThreeDaysAgo}&ate=${formattedDate}`
