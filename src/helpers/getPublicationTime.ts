import { differenceInDays, parse } from 'date-fns'

export const getPublicationTime = (dataPublication: string): string => {
  const publicationDate = parse(
    dataPublication,
    'dd/MM/yyyy HH:mm:ss',
    new Date(),
  )
  const currentDate = new Date()

  const day = differenceInDays(currentDate, publicationDate)

  let message = ''

  if (day === 0) {
    message = `${day + 1} dia atrás`
  }

  if (day > 0) {
    message = `${day} ${day === 1 ? 'dia' : 'dias'} atrás`
  }

  return message
}
