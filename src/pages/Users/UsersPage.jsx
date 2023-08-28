import React from 'react'
import { StyledDiv, StyledMainContainer } from './styles'
import Sidebar from '../../components/sidebar/sidebar'
import Header from '../../components/header/header'
import Filter from '../../components/filter/filter'
import BadgeRole from '../../components/badge/badgeRole'
import BadgeButton from '../../components/badge/badgeButton'
import { DEFAULT_COLOR, ORANGE_COLOR } from '../../constants/colors'
import { DELETE_ICON, EDIT_ICON } from '../../constants/images'

const UsersPage = () => {
  function handleClickCreate(e) {
    e.preventDefault()
    console.log(e)
  }

  function handleClickSubmit(e) {
    e.preventDefault()
    console.log(e)
  }

  function handleClickSubmitKeyUp(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <StyledDiv>
      <Sidebar />
      <StyledMainContainer>
        <Header>Utilisateurs</Header>
        <Filter
          handleClickCreate={handleClickCreate}
          handleClickSubmit={handleClickSubmit}
          handleClickSubmitKeyUp={handleClickSubmitKeyUp}
          name="search-users"
          placeholder="nom, prenom etc..."
          createdButton="Créer un utilisateur"
        />
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

export default UsersPage
