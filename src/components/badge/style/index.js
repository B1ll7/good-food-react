import styled from 'styled-components'
import { DEFAULT_COLOR } from '../../../constants/colors'

export const StyledDiv = styled.div`
  background-color: ${(props) => props.bgColor};
  opacity: 0.5;
  width: fit-content;
  padding: 2px 10px;
  margin: 10px auto;
  border-radius: 10px;
  color: ${DEFAULT_COLOR};
`

export const StyledDivBadgeButton = styled.button`
  background-color: ${(props) => props.bgColor};
  width: fit-content;
  border-radius: 50%;
  border: none;
  padding: 4px;
`
