import React from 'react'

import { StyledDivBadgeButton } from './style'

const BadgeButton = (props) => {
  const { children, bgColor, handleClick } = props;

  return (
    <StyledDivBadgeButton
      onClick={handleClick}
      bgColor={bgColor}
    >
      {children}
    </StyledDivBadgeButton>
  );
}

export default BadgeButton
