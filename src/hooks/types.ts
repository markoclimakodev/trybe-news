export type NewsItem = {
  id: number
  tipo: string
  titulo: string
  introducao: string
  data_publicacao: string
  produto_id: number
  imagens: {
    image_intro: string
    image_intro_alt: string
    image_intro_caption: string
    float_fulltext: string
  }
  destaque: boolean
  link: string
}

export interface NewsResponse {
  count: number
  page: number
  totalPages: number
  nextPage: number
  previousPage: number
  showingFrom: number
  showingTo: number
  items: NewsItem[]
}
