import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TopicLister() {
  const { category, topic } = useParams(); // Get category and topic from the URL
  const [curriculumItems, setCurriculumItems] = useState([]); // State to store curriculum items
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch data from the API based on category and topic
    const fetchCurriculumItems = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/yHbocP/infoking');
        const data = await response.json();

        // Filter data based on category and topic
        const filteredItems = data.filter(
          (item) =>
            item.category.toLowerCase() === category.replace('-', ' ').toLowerCase() &&
            item.topic.toLowerCase() === topic.replace('-', ' ').toLowerCase()
        );

        setCurriculumItems(filteredItems);
      } catch (error) {
        console.error('Error fetching curriculum items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurriculumItems();
  }, [category, topic]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Infoking</h1>
      </header>
      <main className="flex-grow container mx-auto mt-6 md:mt-10 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
          {category.replace('-', ' ')} - {topic.replace('-', ' ')}
        </h1>
        {loading ? (
          <p className="mt-4 text-center text-gray-500">Loading curriculum items...</p>
        ) : curriculumItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {curriculumItems.map((item, index) => (
              <div key={index} className="p-4 border rounded shadow">
                <h2 className="text-xl font-bold text-blue-600">{item.videoTitle}</h2>
                <p className="text-gray-700 mt-2">{item.videoDescription}</p>
                <p className="text-gray-500 mt-2">Class Number: {item.classNumber}</p>
                <p className="text-gray-500">Upload Date: {item.videoUploadDate}</p>
                <a
                  href={item.videoYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Watch Video
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-center text-gray-500">
            No curriculum items found for this topic.
          </p>
        )}
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2023 Infoking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TopicLister;