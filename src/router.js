import React from 'react'
import HomePage from './pages/Home/homePage'
import LoginPage from './pages/Login/loginPage'
import UsersPage from './pages/Users/UsersPage'
import SignUpPage from './pages/Signup/Signup'

export const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/login', component: <LoginPage /> },
  { path: '/users', component: <UsersPage /> },
  { path: '/register', component: <SignUpPage /> }
]
