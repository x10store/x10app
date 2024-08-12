import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import ContainerModels from './components/ContainerModels';
import LunchboxModels from './components/LunchboxModels';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/lunchbox" element={<LunchboxModels />} />
          <Route path="/container" element={<ContainerModels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;