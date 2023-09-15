export type NewsItem = {
  id: number
  tipo: string
  titulo: string
  introducao: string
  data_publicacao: string
  produto_id: number
  imagens: {
    image_intro: string
  }
  destaque: boolean
  link: string
}

export type NewsContextType = {
  favorites: NewsItem[]
  handleFavoriteNews: (newsFavorite: NewsItem) => void
}
