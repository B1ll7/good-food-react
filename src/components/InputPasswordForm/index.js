import React from 'react'
import { StyledDiv, StyledLink } from './styles'

const InputPasswordForm = (props) => {
  const { handleSubmit, name, placeholder, value, handleChange, label } = props
  return (
    <StyledDiv>
      <div>
        <label htmlFor={name}>{label}</label>
        <StyledLink>Mot de passe oublié ?</StyledLink>
      </div>
      <input
        type={'password'}
        placeholder={placeholder}
        width="100%"
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        onClick={handleSubmit}
      />
    </StyledDiv>
  )
}

export default InputPasswordForm
