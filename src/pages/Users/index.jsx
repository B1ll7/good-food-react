import React, { useEffect, useState } from 'react'
import { StyledDiv, StyledMainContainer } from './styles'
import Sidebar from '../../components/sidebar/sidebar'
import Header from '../../components/header/header'
import Filter from '../../components/filter/filter'
import BadgeRole from '../../components/badge/badgeRole'
import BadgeButton from '../../components/badge/badgeButton'
import { DEFAULT_COLOR, ORANGE_COLOR } from '../../constants/colors'
import { DELETE_ICON, EDIT_ICON } from '../../constants/images'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  function handleClickCreate(e) {
    e.preventDefault()
    console.log(e)
    navigate('/users/create')
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
    (async () => {
      const dataList = await axios.get(process.env.REACT_APP_API + '/users');
      setUsers(dataList.data);
    })()
  
    return () => {}
  }, [])

  function handleClickSelect(id) {
    navigate('/users/' + id);
  }

  async function handleClickDelete(e, id) {
    e.preventDefault();
    try {
      const confirm = confirm("Etes-vous sur de vouloir supprimer cet utilisateur ? ")
      if (!confirm) return; 
      const response = await axios.delete(process.env.REACT_APP_API + '/users/' + id)
      if (response.status !== 204) {
        alert("une erreur est survenue pendant la suppression");
        return;
      }
      const dataList = await axios.get(process.env.REACT_APP_API + '/users');
      if (dataList.data) {
        setUsers(dataList.data);
        alert("La suppression s'est bien passé")
      }
    } catch (error) {
      console.log(error);
    }
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
          <thead>
            <tr>
              <th>id</th>
              <th>login</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.id + user.username}
                  onClick={() => handleClickSelect(user.id)}
                >
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {/* <BadgeRole value={user.type} /> */}
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
                    <BadgeButton
                      bgColor={ORANGE_COLOR}
                      handleClick={(e) => handleClickDelete(e, user.id)}
                    >
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

export default Users
