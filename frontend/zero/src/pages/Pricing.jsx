import React, { useEffect } from "react";

function Pricing() {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Pricing Plans
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Tier */}
            <div className="glow-card relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Free</h2>
                <p className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">$0<span className="text-lg font-normal">/month</span></p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Basic development tools
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Community support
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    1 project
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Tier */}
            <div className="glow-card relative bg-blue-600 dark:bg-blue-700 p-8 rounded-lg shadow-lg transform scale-105 before:absolute before:w-[200px] before:h-[200px] before:bg-blue-400/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">Pro</h2>
                <p className="text-3xl font-bold mb-6 text-white">$29<span className="text-lg font-normal">/month</span></p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Free
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    10 projects
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200">
                  Get Pro
                </button>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="glow-card relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Enterprise</h2>
                <p className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">$99<span className="text-lg font-normal">/month</span></p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited projects
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                  Contact Sales
                </button>
              </div>
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
    </div>
  );
}

export default Pricing;
