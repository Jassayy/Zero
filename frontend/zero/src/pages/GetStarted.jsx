import React, { useEffect } from 'react'

function GetStarted() {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-blob1 -top-32 -left-32"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-blob2 top-1/2 left-1/2"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-3xl animate-blob3 bottom-0 right-0"></div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/20 py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-fade-in">
            Get Started with Zero
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glow-card relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform hover:scale-105 transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">1. Install CLI</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get started by installing our powerful CLI tool to streamline your development workflow.
                </p>
                <code className="block bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-sm mb-4 text-gray-800 dark:text-gray-100">
                  npm install -g zero-cli
                </code>
              </div>
            </div>

            <div className="glow-card relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform hover:scale-105 transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">2. Create Project</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Initialize your first Zero project with our interactive project creator.
                </p>
                <code className="block bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-sm mb-4 text-gray-800 dark:text-gray-100">
                  zero create my-project
                </code>
              </div>
            </div>

            <div className="glow-card relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform hover:scale-105 transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">3. Start Building</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Launch your development server and start building amazing applications.
                </p>
                <code className="block bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-sm mb-4 text-gray-800 dark:text-gray-100">
                  cd my-project && zero dev
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
