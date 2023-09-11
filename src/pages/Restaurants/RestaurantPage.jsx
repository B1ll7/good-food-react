import React, { useEffect, useState } from 'react'
import { StyledDiv } from './styles'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RestaurantPage = () => {
  const [user, setUser] = useState([])
  const params = useParams()

  useEffect(() => {
    const id = params.id
    ;(async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/users/${id}`
        )
        setUser(response.data)
      } catch (e) {
        console.error(e)
      }
    })()
    return () => {}
  }, [])

  return (
    <StyledDiv>
      USER PAGE ID
      {JSON.stringify(user)}
    </StyledDiv>
  )
}

export default RestaurantPage
