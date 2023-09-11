import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import { routes } from './router'
import { AuthContext } from './context/AuthContext'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
