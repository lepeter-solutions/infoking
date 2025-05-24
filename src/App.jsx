import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Curriculum from './Curriculum.jsx';
import Admin from './Admin.jsx';
import MainLayout from './MainLayout.jsx';
import TopicLister from './TopicLister.jsx';
import VideoPlayer from './VideoPlayer.jsx'; // Import VideoPlayer

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/:category/:topic" element={<TopicLister />} />
      <Route path="/:category/:topic/:classPath" element={<VideoPlayer />} /> {/* Video player route */}
    </Routes>
  );
}

export default App;
