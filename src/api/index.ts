import { format } from 'date-fns'

export const newsUrl =
  'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&qtd=32&introsize=60'

export const releaseUrl =
  'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release&qtd=32&introsize=60'

const today = new Date()
const formattedDate = format(today, 'MM-dd-yyyy')

export const latestNewsUrl = `http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&de=${formattedDate}&ate=${formattedDate}`
