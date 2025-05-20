import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Curriculum() {
  const [categories, setCategories] = useState([]);
  const [curriculumTopics, setCurriculumTopics] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Manage selected category locally
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/yHbocP/infoking');
        const data = await response.json();

        // Extract unique categories
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    // Fetch curriculum topics for the selected category
    const fetchCurriculumTopics = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/yHbocP/infoking');
        const data = await response.json();

        // Filter topics by the selected category
        const filteredTopics = data.filter((item) =>
          item.category.toLowerCase() === selectedCategory?.toLowerCase()
        );
        setCurriculumTopics(filteredTopics);
      } catch (error) {
        console.error('Error fetching curriculum topics:', error);
      }
    };

    if (selectedCategory) {
      fetchCurriculumTopics();
    }
  }, [selectedCategory]);

  // Group topics by their name and count the number of videos
  const groupedTopics = curriculumTopics.reduce((acc, topic) => {
    if (!acc[topic.topic]) {
      acc[topic.topic] = { count: 0, topicName: topic.topic };
    }
    acc[topic.topic].count += 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="w-full mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Infoking</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex flex-grow flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-gray-800 text-white flex-shrink-0">
          <div className="p-4">
            <h2 className="text-xl font-bold">Navigation</h2>
            <ul className="mt-4 space-y-2">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category)} // Update selected category
                      className={`block w-full text-left p-2 hover:bg-gray-700 rounded ${
                        selectedCategory === category ? 'bg-gray-700' : ''
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))
              ) : (
                <li className="text-gray-400">Loading categories...</li>
              )}
              <li>
                <a href="/" className="block p-2 hover:bg-gray-700 rounded">
                  Back to Home
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex-grow container mx-auto mt-6 md:mt-10 p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
            {selectedCategory ? `${selectedCategory} Curriculum` : 'Curriculum'}
          </h1>
          {selectedCategory ? (
            Object.keys(groupedTopics).length > 0 ? (
              <ul className="mt-6 space-y-4">
                {Object.values(groupedTopics).map((group, index) => (
                  <li key={index} className="p-4 border rounded shadow">
                    <h2 className="text-xl font-bold text-blue-600">{group.topicName}</h2>
                    <p className="text-gray-700">Number of Videos: {group.count}</p>
                    <button
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={() => navigate(`/${selectedCategory}/${group.topicName}`)} // Navigate to category/topic
                    >
                      Learn it
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-center text-gray-500">No topics available for this category.</p>
            )
          ) : (
            <p className="mt-4 text-center text-gray-500">
              Select a category from the navigation to view its curriculum.
            </p>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2023 Infoking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Curriculum;