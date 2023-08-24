import React from 'react'
import HomePage from './pages/Home/homePage'
import LoginPage from './pages/Login/loginPage'

export const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/login', component: <LoginPage /> }
]
