import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Infoking</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto mt-10 p-4 flex flex-col items-center">
        <section id="home" className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to Infoking</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your ultimate resource for Hungarian érettségi IT preparations.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Get Started
          </button>
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
      <footer className="bg-gray-800 text-white text-center p-4 mt-16">
        <p>&copy; 2023 Infoking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;