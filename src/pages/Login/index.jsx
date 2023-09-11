import React, { useContext, useState } from 'react'
import { StyledDiv, StyledForm } from './styles'
import { GOOD_FOOD_ICON_FULL, GOOD_FOOD_LOGIN } from '../../constants/images'
import InputForm from '../../components/InputForm'
import InputPasswordForm from '../../components/InputPasswordForm'
import Button from '../../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
const LoginPage = () => {
  const [user, setUser] = useState({
    identifier: '',
    password: ''
  })

  const navigation = useNavigate()
  const { setIsLogged } = useContext(AuthContext)
  const [isPending, setIsPending] = useState(false)

  function handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setIsPending(true)
      if (identifier == "" || password == "") {
        window.alert("veuillez remplir les champs")
        setIsPending(false)
        return;
      }
      const response = await axios.post(
        process.env.REACT_APP_API + '/login',
        user,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
      if (response) {
        navigation('/home')
        setIsLogged(true)
        setIsPending(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <StyledDiv>
      <div>
        <div style={{ margin: '20px', width: 'fit-content' }}>
          <img
            src={GOOD_FOOD_ICON_FULL}
            width={'100px'}
            height={'112px'}
            alt={'goodfood full icon'}
          />
        </div>
        <div>
          <StyledForm>
            <h1>Connexion</h1>
            <small>Welcome back! please enter your details</small>
            <InputForm
              name={'identifier'}
              label={'Email or Pseudo'}
              placeholder={'example@example.com'}
              value={user.identifier}
              handleChange={handleChange}
            />
            <InputPasswordForm
              name={'password'}
              label={'Mot de passe'}
              placeholder={'*******'}
              value={user.password}
              handleChange={handleChange}
            />
            <Button
              type={"submit"}
              disable={isPending}
              styles={{ marginTop: '15px' }}
              handleClick={handleSubmit}
            >
              Connexion
            </Button>
          </StyledForm>
        </div>
      </div>
      <div>
        <img src={GOOD_FOOD_LOGIN} width={'720px'} alt={'good-food-login'} />
      </div>
    </StyledDiv>
  )
}

export default LoginPage
