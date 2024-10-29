// Landing.js
import React, { useEffect } from "react";

function Landing() {
  useEffect(() => {
    const cards = document.querySelectorAll('.glow-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }, []);

  return (
    <div className="landing min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Welcome to Zero
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Your gateway to seamless development and innovation. Build, deploy, and scale with confidence.
        </p>
        <div className="flex justify-center mb-20">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg mr-4 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
            Learn More
          </button>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glow-card relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
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

            <div className="glow-card relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
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

            <div className="glow-card relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
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
