import React from 'react'
import { StyledDiv } from './style'

import {
  DEFAULT_COLOR,
  GREEN_COLOR,
  ORANGE_COLOR,
  BEIGE_COLOR,
  VIOLET_COLOR_RGBA
} from '../../constants/colors'

const BADGE_ROLES = [
  { name: 'Admin', bgColor: ORANGE_COLOR },
  { name: 'Firme', bgColor: BEIGE_COLOR },
  { name: 'Restaurant', bgColor: DEFAULT_COLOR },
  { name: 'Collaborateur', bgColor: GREEN_COLOR },
  { name: 'Client', bgColor: VIOLET_COLOR_RGBA }
]

const BadgeRole = ({ value }) => {
  const badge = BADGE_ROLES.find((type) => type.name === value)
  return <StyledDiv bgColor={badge.bgColor}>{badge.name}</StyledDiv>
}

export default BadgeRole
