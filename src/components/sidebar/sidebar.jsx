import React from 'react'
import { StyledSideBar, StyledListElement } from './styles'
import {
  GOOD_FOOD_ICON,
  MENUS_ICON,
  PROFILE_ICON,
  RESTAURANT_ICON,
  USERS_ICON
} from '../../constants/images'

const ListElement = (props) => {
  const { children, icon, name, route } = props

  return (
    <StyledListElement>
      <a href={route}>
        <p>
          <img src={icon} alt={name} width="25px" />
        </p>
        <p>{children}</p>
      </a>
    </StyledListElement>
  )
}

const Sidebar = () => {
  return (
    <StyledSideBar>
      <ul>
        <ListElement route="/" icon={GOOD_FOOD_ICON} name="home">
          HOME
        </ListElement>
        <ListElement route="/users" icon={USERS_ICON} name="users">
          USERS
        </ListElement>
        <ListElement
          route="/restaurants"
          icon={RESTAURANT_ICON}
          name="restaurants"
        >
          RESTAURANTS
        </ListElement>
        <ListElement route="/menus" icon={MENUS_ICON} name="menus">
          MENUS
        </ListElement>
      </ul>
      <ul>
        <ListElement route="/profile" icon={PROFILE_ICON} name="profile">
          PROFILE
        </ListElement>
      </ul>
    </StyledSideBar>
  )
}

export default Sidebar
