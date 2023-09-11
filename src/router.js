import React from 'react'
import HomePage from './pages/Home/homePage'
import UserPage from './pages/Users/UserPage'
import Restaurants from './pages/Restaurants'
import RestaurantPage from './pages/Restaurants/RestaurantPage'
import Products from './pages/Orders'
import ProductPage from './pages/Orders/ProductPage'
import Users from './pages/Users'
import Login from './pages/Login'
import Profile from './pages/Profile'
import UserCreatePage from './pages/Users/UserCreate'

export const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/login', component: <Login /> },
  { path: '/users', component: <Users /> },
  { path: '/users/create', component: <UserCreatePage /> },
  { path: '/users/:id', component: <UserPage /> },
  { path: '/restaurants', component: <Restaurants /> },
  { path: '/restaurants/create', component: <Restaurants /> },
  { path: '/restaurants/:id', component: <RestaurantPage /> },
  { path: '/menus', component: <Products /> },
  { path: '/menus/create', component: <Products /> },
  { path: '/menus/:id', component: <ProductPage /> },
  { path: '/profile', component: <Profile /> }
]
