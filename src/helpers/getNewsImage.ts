export const getNewsImage = (imageLink: string) => {
  const link = JSON.parse(imageLink)
  const image = `https://agenciadenoticias.ibge.gov.br/${link.image_intro}`
  return image
}
