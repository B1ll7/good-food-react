import React from 'react'
import { StyledDiv, StyledMainContainer } from './styles'
import BadgeRole from '../../components/badge/badgeRole'
import BadgeButton from '../../components/badge/badgeButton'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'

import { DEFAULT_COLOR, ORANGE_COLOR } from '../../constants/colors'
import { EDIT_ICON, DELETE_ICON } from '../../constants/images'

const RestaurantPage = () => {
  return (
    <StyledDiv>
      <Sidebar />
      <StyledMainContainer>
        <Header>Restaurants</Header>
        <table>
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Doe</td>
            <td>Joe</td>
            <td>joe@doe.fr</td>
            <td>
              <BadgeRole value="Admin" />
            </td>
            <td>
              <BadgeButton bgColor={DEFAULT_COLOR}>
                <img src={EDIT_ICON} width="25px" height="25px" />
              </BadgeButton>
              <BadgeButton bgColor={ORANGE_COLOR}>
                <img src={DELETE_ICON} width="25px" height="25px" />
              </BadgeButton>
            </td>
          </tr>
        </table>
      </StyledMainContainer>
    </StyledDiv>
  )
}

export default RestaurantPage
