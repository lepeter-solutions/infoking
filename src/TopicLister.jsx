import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function TopicLister() {
  const { category, topic } = useParams();
  const [curriculumItems, setCurriculumItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [topicsByCategory, setTopicsByCategory] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

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

        // Extract unique categories for sidebar
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);

        // Extract topics for the current category
        const topics = data
          .filter((item) => item.category.toLowerCase() === category.replace('-', ' ').toLowerCase())
          .map((item) => item.topic);
        setTopicsByCategory([...new Set(topics)]);
      } catch (error) {
        console.error('Error fetching curriculum items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurriculumItems();
  }, [category, topic]);

  // Utility to slugify topic for URL
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-grow flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-gray-800 text-white flex-shrink-0">
          <div className="p-4">
            <h2 className="text-xl font-bold">Navigation</h2>
            <ul className="mt-4 space-y-2">
              {categories.length > 0 ? (
                categories.map((cat, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigate(`/curriculum`)}
                      className={`block w-full text-left p-2 hover:bg-gray-700 rounded ${
                        cat === category.replace('-', ' ') ? 'bg-gray-700 font-bold' : ''
                      }`}
                    >
                      {cat}
                    </button>
                    {/* Show topics for the selected category */}
                    {cat === category.replace('-', ' ') && topicsByCategory.length > 0 && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {topicsByCategory.map((t, i) => (
                          <li key={i}>
                            <button
                              onClick={() => navigate(`/${category}/${slugify(t)}`)}
                              className={`block w-full text-left p-2 rounded ${
                                t.toLowerCase() === topic.replace('-', ' ').toLowerCase()
                                  ? 'bg-blue-700 font-bold'
                                  : 'hover:bg-gray-700'
                              }`}
                            >
                              {t}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
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
                  <button
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => navigate(`${location.pathname}/${item.classPath}`)}
                  >
                    Watch it
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-center text-gray-500">
              No curriculum items found for this topic.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TopicLister;