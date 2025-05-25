import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="w-full mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:underline hover:text-white focus:text-white active:text-white"
          style={{ color: 'inherit' }}
        >
          Infoking
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline hover:text-white focus:text-white active:text-white" style={{ color: 'inherit' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-white focus:text-white active:text-white" style={{ color: 'inherit' }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline hover:text-white focus:text-white active:text-white" style={{ color: 'inherit' }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;