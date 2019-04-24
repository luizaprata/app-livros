import React, { MouseEvent } from 'react'
import { ButtonText, Container } from './Button.styles'

interface Props {
  onClick?: (e: MouseEvent<HTMLDivElement>) => any
  title?: string
}

const Button = ({ onClick, title }: Props) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (onClick instanceof Function) {
      return onClick(e)
    }
  }

  return (
    <Container onClick={handleClick}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}

export default Button
