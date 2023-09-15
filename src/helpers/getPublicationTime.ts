import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parse,
} from 'date-fns'

export const getPublicationTime = (dataPublication: string): string => {
  const publicationDate = parse(
    dataPublication,
    'dd/MM/yyyy HH:mm:ss',
    new Date(),
  )
  const currentDate = new Date()

  const day = differenceInDays(currentDate, publicationDate)
  const month = differenceInMonths(currentDate, publicationDate)
  const year = differenceInYears(currentDate, publicationDate)

  let message = ''

  if (year > 0) {
    message = `${year} ${year === 1 ? 'ano' : 'anos'} atrás`
  }

  if (month > 0) {
    message = `${month} ${month === 1 ? 'mês' : 'meses'} atrás`
  }

  if (day > 0) {
    message = `${day} ${day === 1 ? 'dia' : 'dias'} atrás`
  }

  if (day === 0) {
    message = `${day + 1} dia atrás`
  }
  return message
}
