import React, { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordView, setPasswordView] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordView((prev) => (prev === "password" ? "text" : "password"));
    setIsPasswordVisible((prev) => !prev);
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign In logic here
    // This would typically involve using Firebase Auth or another auth provider
    console.log("Google Sign In clicked");
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[0-9])/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Implement your signup logic here
      console.log("Form submitted:", { username, email, password });
      // After successful signup, you would typically:
      // - Send data to your backend
      // - Handle the response
      // - Redirect user or show success message
    } catch (error) {
      setErrors({ submit: error.message || "An error occurred during signup" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/20 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md m-4 relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 dark:border-gray-600 w-full"></div>
              <span className="bg-white dark:bg-gray-800 px-4 text-sm text-gray-500 dark:text-gray-400">Or</span>
              <div className="border-t border-gray-300 dark:border-gray-600 w-full"></div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full p-3 border ${errors.username ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.username && (
                <div className="absolute -top-8 left-0 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md shadow-lg z-10">
                  <p className="text-sm">{errors.username}</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-red-100 border-r border-b border-red-400"></div>
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type={passwordView}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
              {errors.password && (
                <div className="absolute -top-8 left-0 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md shadow-lg z-10">
                  <p className="text-sm">{errors.password}</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-red-100 border-r border-b border-red-400"></div>
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <div className="absolute -top-8 left-0 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md shadow-lg z-10">
                  <p className="text-sm">{errors.email}</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-red-100 border-r border-b border-red-400"></div>
                </div>
              )}
            </div>

            {errors.submit && (
              <div className="relative">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md shadow-lg">
                  <p className="text-sm text-center">{errors.submit}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </form>
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

export default SignUp;
