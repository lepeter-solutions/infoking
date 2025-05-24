import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function VideoPlayer() {
  const { category, topic, classPath } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the video data for the given classPath
    const fetchVideo = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/yHbocP/infoking');
        const data = await response.json();
        const found = data.find(
          (item) => item.classPath === classPath
        );
        setVideoData(found);
      } catch (error) {
        setVideoData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchVideo();
  }, [classPath]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-grow flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-gray-800 text-white flex-shrink-0">
          <div className="p-4">
            <h2 className="text-xl font-bold">Navigation</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="block p-2 hover:bg-gray-700 rounded">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to={`/${category}/${topic}`} className="block p-2 hover:bg-gray-700 rounded">
                  Back to Topic
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex-grow container mx-auto mt-6 md:mt-10 p-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading video...</p>
          ) : videoData ? (
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
                {videoData.videoTitle}
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-700 text-center">
                {videoData.videoDescription}
              </p>
              <div className="mt-6 flex justify-center">
                <iframe
                  className="w-full max-w-4xl rounded-lg shadow-lg"
                  width="800"
                  height="500"
                  src={videoData.videoYoutubeUrl.replace('watch?v=', 'embed/')}
                  title={videoData.videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-base md:text-lg text-gray-700 text-center">
                Class Number: {videoData.classNumber} <br />
                Upload Date: {videoData.videoUploadDate}
              </p>
            </>
          ) : (
            <p className="text-center text-red-500">Video not found.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default VideoPlayer;