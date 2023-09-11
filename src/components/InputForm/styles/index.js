import styled from 'styled-components'
import {
  FONT_FAMILY,
  FONT_SIZE_p,
  FONT_WEIGHT_BOLD
} from '../../../constants/fonts'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  label {
    font-weight: ${FONT_WEIGHT_BOLD};
    font-size: ${FONT_SIZE_p};
    font-family: ${FONT_FAMILY};
  }

  input {
    height: 46px;
    border-radius: 5px;
  }
`
