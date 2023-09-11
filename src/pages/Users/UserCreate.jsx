import React, { useEffect, useState } from 'react'
import { StyledDiv, StyledForm } from './styles'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Sidebar from '../../components/sidebar/sidebar'
import InputForm from '../../components/InputForm'
import { FONT_SIZE_p, FONT_WEIGHT_BOLD } from '../../constants/fonts'
import Button from '../../components/Button'

const UserCreatePage = () => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "temporaire",
    isActive: false,
    address: "",
    type: ""
  })


  const userGrades = [
    'Admin',
    'Drivers',
    'Customers',
  ]

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/users`, user);
      if (response.ok) {
        setUser({
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "temporaire",
          isActive: false,
          address: "",
          type: ""
        })
        alert("Votre utilisateur a bien été enregistré");
      }
    } catch(err) {
      console.log(err)
      alert("Un problème est survenue pendant l'enregistrement")
    }
  }

  return (
    <StyledDiv>
      <Sidebar />
      <StyledForm onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center'}}>Entrer les données de l&apos;utilisateur</h2>
        <InputForm
          name={"username"}
          label={"pseudo"}
          placeholder="Entrer le pseudo du user"
          value={user.username}
          handleChange={handleChange}
        />
        <InputForm
          name={"firstName"}
          label={"Prenom"}
          placeholder="Entrer le prenom du user"
          value={user.firstName}
          handleChange={handleChange}
        />
        <InputForm
          name={"lastName"}
          label={"Nom"}
          placeholder="Entrer le nom du user"
          value={user.lastName}
          handleChange={handleChange}
        />
        <InputForm
          name={"email"}
          label={"adresse mail"}
          placeholder="Entrer l'adresse mail du user"
          value={user.email}
          handleChange={handleChange}
        />
        <InputForm
          name={"address"}
          label={"Adresse Postale"}
          placeholder="ex. 14 rue ..."
          value={user.address}
          handleChange={handleChange}
        />
        <div style={{ display: 'flex', flexDirection: "column", fontSize: FONT_SIZE_p}}>
          <label htmlFor='type' style={{ fontWeight: FONT_WEIGHT_BOLD}}>type</label>
          <select
            id="type"
            name="type"
            onChange={handleChange}
            style={{ height: "40px" }}
            value={user.type}
          >
            <option value="">Choisir une valeur</option>
            {userGrades.map((el, index) => <option key={index} value={el}>{el}</option>)}
          </select>
        </div>

        <Button
          type={"submit"}
          handleClick={handleSubmit}
          styles={{ marginTop: "20px" }}
        >
          Ajouter
        </Button>
      </StyledForm>
    </StyledDiv>
  )
}

export default UserCreatePage
