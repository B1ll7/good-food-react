import styled from 'styled-components'
import {
  FONT_FAMILY,
  FONT_SIZE_p,
  FONT_WEIGHT_BOLD
} from '../../../constants/fonts'
import { ORANGE_COLOR } from '../../../constants/colors'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_p};
  width: 100%;
  margin: 5px 0;

  > :nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  label {
    font-weight: ${FONT_WEIGHT_BOLD};
  }

  input {
    height: 46px;
    border-radius: 5px;
  }
`

export const StyledLink = styled.a`
  display: block;
  color: ${ORANGE_COLOR};
  cursor: pointer;
  width: fit-content;
  text-decoration: underline;

  &:visited {
    color: ${ORANGE_COLOR};
  }

  &:hover {
    text-decoration: none;
  }
`
