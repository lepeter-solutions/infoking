import React from 'react';

function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="w-full mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-6 md:mt-10 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
          Admin Page
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-700 text-center">
          This is an empty admin page. Add your content here.
        </p>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2023 Infoking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Admin;