import styled from 'styled-components'
import { ORANGE_COLOR, WHITE_COLOR } from '../../../constants/colors'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  form {
    flex: 1;
    display: flex;
  }
`

export const StyledButton = styled.button`
  cursor: pointer;
  width: 193px;
  height: 40px;
  border-radius: 10px;
  background-color: ${ORANGE_COLOR};
  color: ${WHITE_COLOR};
`

export const StyledSubmitButton = styled.button`
  background: transparent;
  border: none;
`
