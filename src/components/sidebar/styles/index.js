import styled from 'styled-components'
import {
  FONT_FAMILY,
  FONT_SIZE_p,
  FONT_WEIGHT_REGULAR
} from '../../../constants/fonts'

import {
  DEFAULT_COLOR,
  DEFAULT_COLOR_RGBA,
  DEFAULT_COLOR_RGBA_HOVER
} from '../../../constants/colors'

export const StyledSideBar = styled.div`
  width: 60px;
  &:hover {
    width: 150px;
  }
  height: 100%;
  min-height: 100vh;
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_p};
  font-weight: ${FONT_WEIGHT_REGULAR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${DEFAULT_COLOR_RGBA};
  overflow: hidden;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    padding-left: 15px;
  }
  li:hover {
    background-color: ${DEFAULT_COLOR_RGBA_HOVER};
  }
`

export const StyledListElement = styled.li`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${DEFAULT_COLOR};
    text-decoration: none;
  }

  a:visited {
    color: ${DEFAULT_COLOR};
  }

  a img {
    margin-right: 20px;
  }
`
