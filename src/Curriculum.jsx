import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Curriculum() {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="w-full mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Infoking</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
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
                    <Link
                      to={`/${category.toLowerCase()}`}
                      className="block p-2 hover:bg-gray-700 rounded"
                    >
                      {category}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-gray-400">Loading categories...</li>
              )}
              <li>
                <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
                  Back to Home
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex-grow container mx-auto mt-6 md:mt-10 p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
            Curriculum
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 text-center">
            Welcome to the Curriculum page of Infoking. Here you will find all the resources you need to prepare for your IT studies.
          </p>
          <img
            src="https://www.yuqo.com/wp-content/uploads/2017/05/giphy-downsized-2.gif"
            alt="Funny GIF"
            className="mt-4 mx-auto rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2023 Infoking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Curriculum;