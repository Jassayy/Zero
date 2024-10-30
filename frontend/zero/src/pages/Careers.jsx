import React from 'react';

function Careers() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 dark:opacity-10 blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/2 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-400 to-blue-500 opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Help us shape the future of cloud deployment and developer experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Zero?</h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Competitive salary and equity packages
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Flexible remote work options
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comprehensive health and wellness benefits
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Professional development opportunities
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Innovation and creativity
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Customer-first mindset
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Continuous learning
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Inclusive workplace
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Open Positions</h2>
          
          <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Senior Backend Engineer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Help build our scalable cloud infrastructure and deployment systems</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Remote</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Full-time</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Create intuitive and responsive user interfaces for our platform</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Remote</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Full-time</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">DevOps Engineer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Build and maintain our CI/CD pipelines and infrastructure</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Remote</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Full-time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
