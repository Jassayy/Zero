// Landing.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll('.glow-card');
    
    // Mouse move effect
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/20 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-float">
              <svg width="128" height="128" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-8">
                <path 
                  d="M32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60C47.464 60 60 47.464 60 32C60 16.536 47.464 4 32 4ZM32 52C21.048 52 12 42.952 12 32C12 21.048 21.048 12 32 12C42.952 12 52 21.048 52 32C52 42.952 42.952 52 32 52Z"
                  className="fill-blue-600 dark:fill-blue-400"
                />
              </svg>
            </div>
            <h1 className="text-6xl font-bold text-center mb-6 text-gray-800 dark:text-white animate-fade-in">
              Welcome to Zero
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-8 animate-fade-in-delayed">
              Your gateway to seamless development and innovation. Build, deploy, and scale with confidence.
            </p>
            <div className="flex gap-4 animate-fade-in-delayed">
              <button 
                onClick={() => navigate('/get-started')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full -top-12 -left-12 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full top-48 -right-12 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bg-indigo-500/10 dark:bg-indigo-400/5 rounded-full -bottom-12 left-1/3 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glow-card relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "Zero has transformed our development workflow. The platform's intuitive interface and powerful features have significantly improved our team's productivity."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Sarah Johnson</p>
                    <p className="text-gray-600 dark:text-gray-400">CTO, TechStart</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glow-card relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "The deployment process has never been easier. Zero's platform helped us reduce our deployment time by 70%. Absolutely game-changing!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Michael Chen</p>
                    <p className="text-gray-600 dark:text-gray-400">Lead Developer, CloudScale</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glow-card relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "The support team is exceptional. Any issues we encountered were resolved quickly, and the documentation is comprehensive. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Emily Rodriguez</p>
                    <p className="text-gray-600 dark:text-gray-400">DevOps Engineer, InnovateCo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
