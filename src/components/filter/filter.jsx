import React from 'react'
import { StyledButton, StyledDiv, StyledSubmitButton } from './styles'
import { SEARCH_ICON } from '../../constants/images'

const Filter = (props) => {
  const {
    name,
    createdButton,
    placeholder,
    handleClickCreate,
    handleClickSubmit,
    handleClickSubmitKeyUp
  } = props

  return (
    <StyledDiv>
      <form>
        <p>
          <input
            type="text"
            aria-labelledby="filter"
            name={name}
            width={'175px'}
            height={'40px'}
            placeholder={placeholder}
            onKeyUp={handleClickSubmitKeyUp}
          />
        </p>
        <StyledSubmitButton onClick={handleClickSubmit}>
          <img src={SEARCH_ICON} width="25px" height={'25px'} />
        </StyledSubmitButton>
      </form>
      <StyledButton onClick={handleClickCreate}>{createdButton}</StyledButton>
    </StyledDiv>
  )
}

export default Filter
