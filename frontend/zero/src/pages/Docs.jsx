import React from "react";

function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Blog Posts
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">The Future of Development</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Exploring upcoming trends in software development and how Zero is positioned to embrace these changes.
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium">Read more →</button>
                <span className="text-sm text-gray-500">June 15, 2023</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Building Scalable Systems</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Best practices and insights on creating robust, scalable applications in today's cloud environment.
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium">Read more →</button>
                <span className="text-sm text-gray-500">June 10, 2023</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">DevOps Evolution</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                How DevOps practices have evolved and what it means for modern development teams.
              </p>
              <div className="flex justify-between items-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium">Read more →</button>
                <span className="text-sm text-gray-500">June 5, 2023</span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Featured Posts</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-b dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                    {item === 1 && "Cloud Native Architecture Patterns"}
                    {item === 2 && "Microservices vs Monoliths"}
                    {item === 3 && "The Rise of Serverless"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    In-depth analysis and practical insights from our engineering team.
                  </p>
                </div>
              ))}
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

export default Docs;
