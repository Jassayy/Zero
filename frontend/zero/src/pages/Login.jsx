import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordView, setPasswordView] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordView((prev) => (prev === "password" ? "text" : "password"));
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/20 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md m-4 relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Login
          </h2>
          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <input
                type={passwordView}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                {isPasswordVisible ? (
                  <span className="block w-5 h-5 text-sm">👁️‍🗨️</span>
                ) : (
                  <span className="block w-5 h-5 text-sm">👁️</span>
                )}
              </button>
            </div>


            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full -top-12 -left-12 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full top-48 -right-12 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bg-indigo-500/10 dark:bg-indigo-400/5 rounded-full -bottom-12 left-1/3 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </main>
  );
}

export default Login;
