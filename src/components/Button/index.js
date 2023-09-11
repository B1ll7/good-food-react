import React from 'react'
import { StyledButton } from './styles'

const Button = (props) => {
  const { children, type, styles, isPending, handleClick } = props
  return (
    <StyledButton
      style={styles}
      type={type}
      disabled={isPending}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button
