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
        <main className="flex-grow flex flex-col justify-center items-center w-full px-2 sm:px-4">
          <section id="home" className="text-center w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto">
            <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-800"
                style={{
                  WebkitTextStroke: '2px black',
                  textStroke: '2px black',
                }}
              >
                ARE YOU FUCKING RETARDED!??!?!!
              </h2>
            <h3
              className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-yellow-600"
              style={{
                WebkitTextStroke: '0.5px black',
                textStroke: '0.5px black',
              }}
            >
              The solution: Infoking - the ultimate platform to help you prepare for your IT studies and exams.
            </h3>
            <Link to="/curriculum" className="hover:underline group">
              <button
                className="mt-8 sm:mt-10 px-6 sm:px-12 py-3 sm:py-6 text-xl sm:text-2xl md:text-3xl bg-blue-600 text-white rounded-2xl shadow-2xl transition-all font-bold relative overflow-hidden group-hover:bg-transparent"
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
          <section
            id="contact"
            className="mt-10 sm:mt-16 text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto bg-white/80 rounded-2xl shadow-lg p-4 sm:p-8 animate-spin-slow"
            style={{
              animation: 'spin 4s linear infinite'
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Contact</h3>
            <p className="mt-4 text-gray-600 flex items-center overflow-hidden relative h-8">
              <span
                className="whitespace-nowrap font-bold"
                style={{
                  display: 'inline-block',
                  animation: 'marquee 8s linear infinite',
                  background: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Have questions? Reach out to us at <a href="mailto:info@infoking.hu" className="text-blue-600 hover:underline" style={{ color: 'inherit', textDecoration: 'underline' }}>info@infoking.hu</a>.
              </span>
            </p>
          </section>
        </main>
        <div
          className="w-full m-0 h-20 sm:h-32 lg:h-44"
          style={{
            backgroundImage: "url('https://i.pinimg.com/originals/b7/21/34/b72134112b54864e4948865375ecbb11.gif')",
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center',
            backgroundSize: 'auto 100%',
          }}
        />
        <Footer />
      </div>
      <style>
{`
@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin 4s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(100%);}
  100% { transform: translateX(-100%);}
}
`}
      </style>
    </div>
  );
}

export default MainLayout;