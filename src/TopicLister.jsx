import React from 'react';
import { useParams } from 'react-router-dom';

function TopicLister() {
  const { category, topic } = useParams(); // Get category and topic from the URL

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Infoking</h1>
      </header>
      <main className="flex-grow container mx-auto mt-6 md:mt-10 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
          {category.replace('-', ' ')} - {topic.replace('-', ' ')}
        </h1>
        <p className="mt-4 text-center text-gray-700">
          Content for {topic.replace('-', ' ')} in {category.replace('-', ' ')} will go here.
        </p>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2023 Infoking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TopicLister;