import React from "react";

function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Pricing Plans
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
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

          {/* Pro Tier */}
          <div className="bg-blue-600 dark:bg-blue-700 p-8 rounded-lg shadow-lg transform scale-105">
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

          {/* Enterprise Tier */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
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
  );
}

export default Pricing;
