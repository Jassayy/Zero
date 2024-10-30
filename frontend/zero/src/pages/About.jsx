import React from "react";


function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
              About Zero
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-8 animate-fade-in-delayed">
              Empowering developers to build the future, one line of code at a time.
            </p>
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
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Zero is a cutting-edge development platform designed to streamline your workflow and boost productivity. Our mission is to empower developers and teams with tools that make building and deploying applications seamless and efficient.
          </p>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10M+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Users</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Uptime</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Countries</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To revolutionize the development experience by providing intuitive, powerful tools that allow developers to focus on what matters most - creating amazing software.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To become the go-to platform for developers worldwide, setting new standards in development workflow efficiency and collaboration.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Why Choose Zero?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Streamlined deployment process with one-click solutions</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Robust security features to protect your applications</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">24/7 expert support to help you every step of the way</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">John Doe</h3>
                <p className="text-gray-600 dark:text-gray-400">CEO & Founder</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Jane Smith</h3>
                <p className="text-gray-600 dark:text-gray-400">CTO</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Mike Johnson</h3>
                <p className="text-gray-600 dark:text-gray-400">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
