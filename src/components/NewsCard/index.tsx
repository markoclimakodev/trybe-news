import { MdFavoriteBorder } from 'react-icons/md'
import { getPublicationTime } from '../../helpers/getPublicationTime'
import { NewsItem } from '../../hooks/types'
import Button from '../Button'
import { Card, Divider, Footer, Heading, Intro } from './newcard.styles'

export const NewsCard = (newsItem: NewsItem) => {
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
        <MdFavoriteBorder size={16} />
      </Divider>
    </Card>
  )
}
