import React, { useEffect, useState } from 'react'
import { StyledDiv, StyledMainContainer } from './styles'
import Sidebar from '../../components/sidebar/sidebar'
import Header from '../../components/header/header'
import Filter from '../../components/filter/filter'
import BadgeRole from '../../components/badge/badgeRole'
import BadgeButton from '../../components/badge/badgeButton'
import { DEFAULT_COLOR, ORANGE_COLOR } from '../../constants/colors'
import { DELETE_ICON, EDIT_ICON } from '../../constants/images'

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([])

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
        <Header>Restaurants</Header>
        <Filter
          handleClickCreate={handleClickCreate}
          handleClickSubmit={handleClickSubmit}
          handleClickSubmitKeyUp={handleClickSubmitKeyUp}
          name="search-users"
          placeholder="nom, prenom etc..."
          createdButton="Créer un restaurant"
        />
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => {
              return (
                <tr
                  key={restaurant.id + restaurant.name}
                  onClick={() => handleClickSelect(id)}
                >
                  <td>{restaurant.id}</td>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
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

export default RestaurantsPage
