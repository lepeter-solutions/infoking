import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const carouselImages = [
  "https://media.istockphoto.com/id/879751314/photo/portrait-of-amazed-man-with-laptop-computer-over-gray-background.jpg?s=612x612&w=0&k=20&c=XTYQ_zknzT2G2yvv55bepAZjDkqKHdYfZYaE3e2HO0Q=",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
];

const FADE_DURATION = 1000;
const INTERVAL = 12000;

function MainLayout() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      triggerFade((current + 1) % carouselImages.length);
    }, INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const triggerFade = (nextIdx) => {
    setPrev(current);
    setIsFading(true);
    setTimeout(() => {
      setCurrent(nextIdx);
      setIsFading(false);
      setPrev(null);
    }, FADE_DURATION);
  };

  const goTo = (idx) => {
    if (idx !== current && !isFading) {
      clearTimeout(timeoutRef.current);
      triggerFade(idx);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {prev !== null && (
        <div
          className="absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none"
          style={{
            backgroundImage: `url(${carouselImages[prev]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isFading ? 1 : 0,
          }}
          aria-hidden="true"
        />
      )}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none"
        style={{
          backgroundImage: `url(${carouselImages[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isFading ? 0 : 1,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10" />
      <div className="relative z-20 flex flex-col min-h-screen">
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
          <div className="flex justify-center mt-10 space-x-2">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-600' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
                disabled={isFading}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;