// SignUp page
import React from 'react'
import { StyledDiv } from './styles'
import { GOOD_FOOD_ICON_FULL, GOOD_FOOD_LOGIN } from '../../constants/images'
import { StyledForm } from '../Login/styles'
import InputForm from '../../components/InputForm'
import InputPasswordForm from '../../components/InputPasswordForm'
import Button from '../../components/Button'
import { StyledLink } from '../../components/InputPasswordForm/styles'

const RegisterPage = () => {
  return (
    <StyledDiv>
      <div>
        <div>
          <img
            src={GOOD_FOOD_ICON_FULL}
            width={'100px'}
            height={'112px'}
            alt={'goodfood full icon'}
          />
        </div>
        <div
          style={{
            height: '100%'
          }}
        >
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
              type={'submit'}
              styles={{ marginTop: '15px' }}
              onClick={handleSubmit}
            >
              Connexion
            </Button>
          </StyledForm>
        </div>
      </div>
      <div>
        <img src={GOOD_FOOD_LOGIN} width={'100%'} alt={'good-food-login'} />
      </div>
    </StyledDiv>
  )
}

export default RegisterPage
