import { MdFavoriteBorder } from 'react-icons/md'
import { useNewsFetch } from '../../hooks/useNewsFetch'
import {
  Container,
  Footer,
  Header,
  Heading,
  Image,
  Intro,
  NewsInfoContainer,
} from './featured.styles'

import Button from '../Button'

import { getNewsImage } from '../../helpers/getNewsImage'
import { getPublicationTime } from '../../helpers/getPublicationTime'

import { latestNewsUrl } from '../../api'
import { NewsItem } from '../../hooks/types'

export const FeaturedNews = () => {
  const news = useNewsFetch(latestNewsUrl)
  const latestNews: NewsItem = news && news[0]

  return (
    latestNews && (
      <Container>
        <Image src={getNewsImage(String(latestNews.imagens))} alt="" />
        <NewsInfoContainer>
          <Header>
            <span>Noticia mais recente</span>
            <MdFavoriteBorder size={16} />
          </Header>
          <Heading>{latestNews.titulo}</Heading>
          <Intro>{latestNews.introducao}</Intro>
          <Footer>
            <span>{getPublicationTime(latestNews.data_publicacao)}</span>
            <Button
              role="read news"
              title="Leia a notícia aqui"
              href={latestNews.link}
            />
          </Footer>
        </NewsInfoContainer>
      </Container>
    )
  )
}
