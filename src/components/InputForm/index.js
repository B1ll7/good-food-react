import React from 'react'
import { StyledDiv } from './styles'

const InputForm = (props) => {
  const { name, placeholder, value, handleChange, label } = props
  return (
    <StyledDiv>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        width="100%"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </StyledDiv>
  )
}

export default InputForm
