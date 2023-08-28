import React from 'react'
import HomePage from './pages/Home/homePage'
import LoginPage from './pages/Login/LoginPage'
import UsersPage from './pages/Users/UsersPage'
import SignUpPage from './pages/Signup/Signup'

export const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/login', component: <LoginPage /> },
  { path: '/users', component: <UsersPage /> },
  { path: '/users/:id', component: <UsersPage /> },
  { path: '/customers', component: <UsersPage /> },
  { path: '/customers/:id', component: <UsersPage /> },
  { path: '/register', component: <SignUpPage /> },
  { path: '/restaurants', component: <UsersPage /> },
  { path: '/restaurants/:id', component: <UsersPage /> },
  { path: '/menus', component: <UsersPage /> },
  { path: '/menus/:id', component: <UsersPage /> },
  { path: '/delivery-drivers', component: <UsersPage /> },
  { path: '/delivery-drivers/:id', component: <UsersPage /> },
]
