import React, { useState } from 'react';

function Admin() {
  const [formData, setFormData] = useState({
    category: '',
    topic: '',
    classNumber: '',
    videoTopic: '',
    videoUploadDate: '',
    videoTitle: '',
    videoDescription: '',
    videoYoutubeUrl: '',
    classPath: '',
  });

  const [deleteId, setDeleteId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://retoolapi.dev/yHbocP/infoking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data successfully added!');
        setFormData({
          category: '',
          topic: '',
          classNumber: '',
          videoTopic: '',
          videoUploadDate: '',
          videoTitle: '',
          videoDescription: '',
          videoYoutubeUrl: '',
          classPath: '',
        });
      } else {
        alert('Failed to add data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!deleteId) {
      alert('Please provide an ID to delete.');
      return;
    }

    try {
      const response = await fetch(`https://retoolapi.dev/yHbocP/infoking/${deleteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert(`Data with ID ${deleteId} successfully deleted!`);
        setDeleteId('');
      } else {
        alert('Failed to delete data. Please check the ID and try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="w-full mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-6 md:mt-10 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-600">
          Add New Data
        </h1>
        <form className="mt-6 max-w-2xl mx-auto space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-bold text-blue-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            >
              <option value="">Select a category</option>
              <option value="Excel">Excel</option>
              <option value="Word">Word</option>
              <option value="PowerPoint">PowerPoint</option>
            </select>
          </div>
          <div>
            <label className="block font-bold text-blue-700">Topic</label>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            >
              <option value="">Select a topic</option>
              <option value="SUM Function">SUM Function</option>
              <option value="VLOOKUP">VLOOKUP</option>
              <option value="Pivot Tables">Pivot Tables</option>
            </select>
          </div>
          <div>
            <label className="block font-bold text-blue-700">Class Number</label>
            <input
              type="text"
              name="classNumber"
              value={formData.classNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-blue-700">Video Topic</label>
            <input
              type="text"
              name="videoTopic"
              value={formData.videoTopic}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-blue-700">Video Upload Date</label>
            <input
              type="date"
              name="videoUploadDate"
              value={formData.videoUploadDate}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-blue-700">Video Title</label>
            <input
              type="text"
              name="videoTitle"
              value={formData.videoTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-blue-700">Video Description</label>
            <textarea
              name="videoDescription"
              value={formData.videoDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-bold text-blue-700">Video YouTube URL</label>
            <input
              type="url"
              name="videoYoutubeUrl"
              value={formData.videoYoutubeUrl}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-blue-700">Class Path</label>
            <input
              type="text"
              name="classPath"
              value={formData.classPath}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
          >
            Submit
          </button>
        </form>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 mt-10">
          Remove Data by ID
        </h1>
        <form className="mt-6 max-w-2xl mx-auto space-y-4" onSubmit={handleDelete}>
          <div>
            <label className="block font-bold text-red-700">ID to Delete</label>
            <input
              type="text"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
              className="w-full p-2 border rounded text-red-700"
              placeholder="Enter ID"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </form>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2023 Infoking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Admin;