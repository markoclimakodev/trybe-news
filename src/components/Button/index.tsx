import { ButtonHTMLAttributes } from 'react'
import { MoreNewsButton, ReadNewsButton } from './button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  role: 'read more' | 'read news'
  title: string
  href?: string
}

function Button({ role, title, href = '', ...props }: ButtonProps) {
  return (
    <>
      {role === 'read news' && (
        <ReadNewsButton {...props}>
          <a href={href} target="_blank" rel="noreferrer">
            {title}
          </a>
        </ReadNewsButton>
      )}
      {role === 'read more' && (
        <MoreNewsButton {...props}>{title}</MoreNewsButton>
      )}
    </>
  )
}
export default Button
