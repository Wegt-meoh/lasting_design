import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { getAllRoutes } from './route/routes';

function App() {
  const routes = useRoutes(getAllRoutes())
  return (
    <>
      {routes}
    </>
  );
}

export default App;
