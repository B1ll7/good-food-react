import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { routes } from './router';

function App() {
  return (
    <Router>
      {routes.map(
        (route, index) =>
          <Route key={index} path={route.path} element={route.component} />
      )}
    </Router>
  );
}

export default App;
