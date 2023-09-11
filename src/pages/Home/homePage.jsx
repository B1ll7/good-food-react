import React, { useEffect } from 'react'
import { StyledDiv } from './styles'
import Sidebar from '../../components/sidebar/sidebar'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { isLogged } = React.useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      navigate('/login')
    }
  }, [isLogged, navigate])

  if (isLogged) {
    return (
      <StyledDiv>
        <Sidebar />
      </StyledDiv>
    )
  }

  // So we just return null here.
  return null
}

export default HomePage
