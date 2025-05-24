import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto mt-10 p-4 flex flex-col items-center">
        <section id="home" className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to Infoking</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your ultimate resource for Hungarian érettségi IT preparations.
          </p>
          <Link to="/curriculum" className="hover:underline">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </section>
        <section id="about" className="mt-16 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-800">About Infoking</h3>
          <p className="mt-4 text-gray-600">
            Infoking is designed to help students prepare for their IT studies and exams with
            comprehensive resources and guides.
          </p>
        </section>
        <section id="contact" className="mt-16 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
          <p className="mt-4 text-gray-600">
            Have questions? Reach out to us at <a href="mailto:info@infoking.hu" className="text-blue-600 hover:underline">info@infoking.hu</a>.
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default MainLayout;