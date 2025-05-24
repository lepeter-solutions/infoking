import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

function Curriculum() {
  const [categories, setCategories] = useState([]);
  const [curriculumTopics, setCurriculumTopics] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/yHbocP/infoking');
        const data = await response.json();

        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCurriculumTopics = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/yHbocP/infoking');
        const data = await response.json();

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

  const groupedTopics = curriculumTopics.reduce((acc, topic) => {
    if (!acc[topic.topic]) {
      acc[topic.topic] = { count: 0, topicName: topic.topic };
    }
    acc[topic.topic].count += 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-grow flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-gray-800 text-white flex-shrink-0">
          <div className="p-4">
            <h2 className="text-xl font-bold">Navigation</h2>
            <ul className="mt-4 space-y-2">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category)}
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
                      onClick={() =>
                        navigate(`/${slugify(selectedCategory)}/${slugify(group.topicName)}`)
                      }
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

      <Footer />
    </div>
  );
}

export default Curriculum;