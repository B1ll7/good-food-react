import React from 'react'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'

export const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/login', component: <LoginPage /> }
]
