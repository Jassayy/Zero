import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          About Zero
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Zero is a cutting-edge development platform designed to streamline your workflow and boost productivity. Our mission is to empower developers and teams with tools that make building and deploying applications seamless and efficient.
          </p>

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
        </div>
      </div>
    </div>
  );
}

export default About;
