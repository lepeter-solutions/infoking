import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const carouselImages = [
  "https://media.istockphoto.com/id/879751314/photo/portrait-of-amazed-man-with-laptop-computer-over-gray-background.jpg?s=612x612&w=0&k=20&c=XTYQ_zknzT2G2yvv55bepAZjDkqKHdYfZYaE3e2HO0Q=",
  "https://www.shutterstock.com/image-photo/angry-man-swearing-cursing-against-600nw-2271728711.jpg",
  "https://thumbs.dreamstime.com/b/i-hate-my-computer-14456531.jpg",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
];

const SLIDE_DURATION = 1000;
const INTERVAL = 5000;

function MainLayout() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);
  const [isSliding, setIsSliding] = useState(false);
  const [slidePhase, setSlidePhase] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      startSlide((current + 1) % carouselImages.length);
    }, INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  useEffect(() => {
    if (next !== null) {
      requestAnimationFrame(() => setSlidePhase(true));
    }
  }, [next]);

  const startSlide = (nextIdx) => {
    setNext(nextIdx);
    setIsSliding(true);
    setSlidePhase(false);
    setTimeout(() => {
      setCurrent(nextIdx);
      setIsSliding(false);
      setNext(null);
      setSlidePhase(false);
    }, SLIDE_DURATION);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${carouselImages[current]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            transition: 'none'
          }}
          aria-hidden="true"
        />
        {next !== null && (
          <div
            className={`absolute inset-0 transition-transform duration-[${SLIDE_DURATION}ms]`}
            style={{
              backgroundImage: `url(${carouselImages[next]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: slidePhase ? 'translateX(0%)' : 'translateX(100%)',
              zIndex: 2,
            }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10" />
      </div>
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
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;