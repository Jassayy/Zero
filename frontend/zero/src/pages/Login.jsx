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
    <main className="h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 overflow-hidden dark:bg-gradient-to-l dark:from-black dark:via-slate-800 dark:to-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md m-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <input
              type={passwordView}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
