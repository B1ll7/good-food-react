import React from 'react'

import { StyledDivBadgeButton } from './style'

const BadgeButton = ({ children, bgColor }) => {
  return (
    <StyledDivBadgeButton bgColor={bgColor}>{children}</StyledDivBadgeButton>
  )
}

export default BadgeButton
