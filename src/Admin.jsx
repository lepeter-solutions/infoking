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

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="w-full mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-6 md:mt-10 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
          Add New Data
        </h1>
        <form className="mt-6 max-w-2xl mx-auto space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-bold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Topic</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Class Number</label>
            <input
              type="text"
              name="classNumber"
              value={formData.classNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Video Topic</label>
            <input
              type="text"
              name="videoTopic"
              value={formData.videoTopic}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Video Upload Date</label>
            <input
              type="date"
              name="videoUploadDate"
              value={formData.videoUploadDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Video Title</label>
            <input
              type="text"
              name="videoTitle"
              value={formData.videoTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Video Description</label>
            <textarea
              name="videoDescription"
              value={formData.videoDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-bold">Video YouTube URL</label>
            <input
              type="url"
              name="videoYoutubeUrl"
              value={formData.videoYoutubeUrl}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Class Path</label>
            <input
              type="text"
              name="classPath"
              value={formData.classPath}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
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