import React from 'react'
import HomePage from './pages/Home/homePage'
import LoginPage from './pages/Login/loginPage'
import UsersPage from './pages/Users/UsersPage'
import RestaurantPage from './pages/Restaurants/restaurantPage'

export const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/login', component: <LoginPage /> },
  { path: '/users', component: <UsersPage /> },
  { path: '/restaurants', component: <RestaurantPage /> }
]
