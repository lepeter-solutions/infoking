import React from 'react';

function ContactPage() {
  const handleDivClick = () => {
    window.location.href = 'https://github.com/darkbeast0106';
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div
        className="fixed"
        style={{
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <div
          className="cursor-pointer"
          onClick={handleDivClick}
          title="Click the bouncing contact!"
          style={{
            position: 'absolute',
            animation: 'bounceEverywhere 6s linear infinite',
            pointerEvents: 'auto',
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <section
            id="contact"
            className="mt-10 sm:mt-16 text-center max-w-md sm:max-w-xl md:max-w-2xl bg-white/80 rounded-2xl shadow-lg p-4 sm:p-8 animate-spin-slow"
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
                Have questions? Reach out to us at{' '}
                <a
                  href="mailto:info@infoking.hu"
                  className="text-blue-600 hover:underline"
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                  onClick={e => e.stopPropagation()}
                >
                  info@infoking.hu
                </a>
                .
              </span>
            </p>
          </section>
        </div>
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
        @keyframes bounceEverywhere {
          0%   { top: 0; left: 0; }
          10%  { top: 0; left: 80vw; }
          20%  { top: 40vh; left: 80vw; }
          30%  { top: 80vh; left: 80vw; }
          40%  { top: 80vh; left: 0vw; }
          50%  { top: 80vh; left: 40vw; }
          60%  { top: 80vh; left: 0vw; }
          70%  { top: 40vh; left: 0vw; }
          80%  { top: 0; left: 40vw; }
          90%  { top: 40vh; left: 80vw; }
          100% { top: 0; left: 0; }
        }
        `}
      </style>
    </div>
  );
}

export default ContactPage;