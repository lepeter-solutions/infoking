import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Curriculum from './Curriculum.jsx';
import Section1 from './section1.jsx';
import Section2 from './Section2.jsx';
import Admin from './Admin.jsx';
import MainLayout from './MainLayout.jsx'; // Import MainLayout

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/section1" element={<Section1 />} />
      <Route path="/section2" element={<Section2 />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
