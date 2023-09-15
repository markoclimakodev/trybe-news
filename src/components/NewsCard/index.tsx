import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { getPublicationTime } from '../../helpers/getPublicationTime'
import { NewsItem } from '../../hooks/types'
import Button from '../Button'
import { Card, Divider, Footer, Heading, Intro } from './newcard.styles'

type NewsCardProps = {
  handleFavorite: (news: NewsItem) => void
  newsItem: NewsItem
  isFavorite: boolean
}

export const NewsCard = ({
  newsItem,
  handleFavorite,
  isFavorite,
}: NewsCardProps) => {
  return (
    <Card>
      <Heading>{newsItem.titulo}</Heading>
      <Intro>{newsItem.introducao}</Intro>
      <Footer>
        <span>{getPublicationTime(newsItem.data_publicacao)}</span>
        <Button
          role="read news"
          title="Leia a notícia aqui"
          href={newsItem.link}
        />
      </Footer>
      <Divider>
        <button type="button" onClick={() => handleFavorite(newsItem)}>
          {isFavorite ? (
            <MdFavorite size={16} />
          ) : (
            <MdFavoriteBorder size={16} />
          )}
        </button>
      </Divider>
    </Card>
  )
}
