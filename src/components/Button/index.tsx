import { ButtonHTMLAttributes } from 'react'
import { MoreNewsButton, ReadNewsButton } from './button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  role: 'read more' | 'read news'
  title: string
}

function Button({ role, title, ...props }: ButtonProps) {
  return (
    <>
      {role === 'read news' && (
        <ReadNewsButton {...props}>{title}</ReadNewsButton>
      )}
      {role === 'read more' && (
        <MoreNewsButton {...props}>{title}</MoreNewsButton>
      )}
    </>
  )
}
export default Button
