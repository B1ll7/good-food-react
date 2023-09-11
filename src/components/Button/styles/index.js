import styled from 'styled-components'
import { DEFAULT_COLOR } from '../../../constants/colors'

export const StyledButton = styled.a`
  display: flex;
  width: 100%;
  cursor: pointer;
  height: 40px;
  background-color: ${DEFAULT_COLOR};
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
