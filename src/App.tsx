import React from 'react';
import './App.css';
import EccLearning from './pages/TestForDocsifyComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<EccLearning />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
