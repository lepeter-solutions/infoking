import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const carouselImages = [
  "https://media.istockphoto.com/id/879751314/photo/portrait-of-amazed-man-with-laptop-computer-over-gray-background.jpg?s=612x612&w=0&k=20&c=XTYQ_zknzT2G2yvv55bepAZjDkqKHdYfZYaE3e2HO0Q=",
  "https://www.shutterstock.com/image-photo/angry-man-swearing-cursing-against-600nw-2271728711.jpg",
  "https://thumbs.dreamstime.com/b/i-hate-my-computer-14456531.jpg",
  "https://media.istockphoto.com/id/468203158/photo/explosion-of-anger.jpg?s=612x612&w=0&k=20&c=fQGySbbr5tPHGLu0QbBL36qI58i7HfnCmXzWyU-BGQk=",
  "https://previews.123rf.com/images/vchalup/vchalup1704/vchalup170400123/77033381-angry-and-frustrated-man-is-working-with-computer-and-shouting.jpg"
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
        <div className="absolute inset-0 backdrop-blur-sm z-10" />
      </div>
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col justify-center items-center w-full p-4">
          <section id="home" className="text-center max-w-6xl">
            <h2
              className="text-6xl font-bold text-red-800"
              style={{
                WebkitTextStroke: '2px black',
                textStroke: '2px black',
              }}
            >
              ARE YOU FUCKING RETARDED!??!?!!
            </h2>
            <h3
            className="mt-6 text-2xl text-yellow-600"
            style={{
                WebkitTextStroke: '0.5px black',
                textStroke: '0.5px black',
              }}
            >
              The solution: Infoking - the ultimate platform to help you prepare for your IT studies and exams.
            </h3>
            <Link to="/curriculum" className="hover:underline group">
              <button
                className="mt-10 px-12 py-6 text-3xl bg-blue-600 text-white rounded-2xl shadow-2xl transition-all font-bold relative overflow-hidden group-hover:bg-transparent"
                style={{
                  backgroundImage: 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="relative z-10">I want to be less incompetent!</span>
                <span
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: "url('https://www.icegif.com/wp-content/uploads/2023/08/icegif-179.gif')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </button>
            </Link>
          </section>
          <section id="contact" className="mt-16 text-center max-w-2xl mx-auto bg-white/80 rounded-2xl shadow-lg p-4">
            <h3 className="text-2xl font-bold text-gray-800">Contact</h3>
            <p className="mt-4 text-gray-600">
              Have questions? Reach out to us at <a href="mailto:info@infoking.hu" className="text-blue-600 hover:underline">info@infoking.hu</a>.
            </p>
          </section>
        </main>
        <div className="w-full m-0">
          <img
            src="https://i.pinimg.com/originals/b7/21/34/b72134112b54864e4948865375ecbb11.gif"
            alt="Fire GIF"
            className="w-full h-auto max-h-32 object-contain"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;