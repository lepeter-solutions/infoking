import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Curriculum from './Curriculum.jsx';
import Admin from './Admin.jsx';
import MainLayout from './MainLayout.jsx'; // Import MainLayout
import TopicLister from './TopicLister.jsx'; // Import TopicLister

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/:category/:topic" element={<TopicLister />} /> {/* Dynamic route */}
    </Routes>
  );
}

export default App;
