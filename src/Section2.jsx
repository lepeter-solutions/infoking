import React from 'react';
import { Link } from 'react-router-dom';

function Section2() {
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
              <li>
                <Link to="/section1" className="block p-2 hover:bg-gray-700 rounded">
                  Section 1
                </Link>
              </li>
              <li>
                <Link to="/section2" className="block p-2 hover:bg-gray-700 rounded">
                  Section 2
                </Link>
              </li>
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
            Section 2
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 text-center">
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          </p>
          <div className="mt-6 flex justify-center">
            <iframe className="w-full max-w-4xl rounded-lg shadow-lg" width="800" height="500" src="https://www.youtube.com/embed/5mGuCdlCcNM" title="chip 10 hours" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p className="mt-4 text-base md:text-lg text-gray-700 text-center">
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2023 Infoking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Section2;