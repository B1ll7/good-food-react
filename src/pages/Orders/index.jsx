import React, { useEffect, useState } from 'react'
import { StyledDiv, StyledMainContainer } from './styles'
import Sidebar from '../../components/sidebar/sidebar'
import Header from '../../components/header/header'
import Filter from '../../components/filter/filter'
import BadgeRole from '../../components/badge/badgeRole'
import BadgeButton from '../../components/badge/badgeButton'
import { DEFAULT_COLOR, ORANGE_COLOR } from '../../constants/colors'
import { DELETE_ICON, EDIT_ICON } from '../../constants/images'

const ProductsPage = () => {
  const [users, setUsers] = useState([])

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

  useEffect(() => {
    return () => {}
  }, [])

  function handleClickSelect(id) {}

  return (
    <StyledDiv>
      <Sidebar />
      <StyledMainContainer>
        <Header>Commandes</Header>
        <Filter
          handleClickCreate={handleClickCreate}
          handleClickSubmit={handleClickSubmit}
          handleClickSubmitKeyUp={handleClickSubmitKeyUp}
          name="search-users"
          placeholder="nom, prenom etc..."
          createdButton="Créer une commande"
        />
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>status</th>
              <th>price</th>
              <th>priceDutyfee</th>
              <th>customers</th>
              <th>delivers</th>
              <th>restaurants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.id + user.username}
                  onClick={() => handleClickSelect(id)}
                >
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                  <td>
                    <BadgeRole value={user.role} />
                  </td>
                  <td>
                    <BadgeButton bgColor={DEFAULT_COLOR}>
                      <img
                        src={EDIT_ICON}
                        width="25px"
                        height="25px"
                        alt="edit"
                      />
                    </BadgeButton>
                    <BadgeButton bgColor={ORANGE_COLOR}>
                      <img
                        src={DELETE_ICON}
                        width="25px"
                        height="25px"
                        alt="delete"
                      />
                    </BadgeButton>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </StyledMainContainer>
    </StyledDiv>
  )
}

export default ProductsPage
