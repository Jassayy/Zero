import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function Nav() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-auto md:h-16 w-full bg-slate-50 text-black dark:bg-transparent dark:text-slate-400 flex flex-wrap md:flex-nowrap shadow-xl items-center justify-between p-4 md:p-6 z-50 relative">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <Logo />
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8 lg:space-x-32 mt-4 md:mt-0`}>
        <li>
          <Link to="/" className="block hover:text-gray-500 transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="block hover:text-gray-500 transition duration-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="block hover:text-gray-500 transition duration-200">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="block hover:text-gray-500 transition duration-200">
            Pricing
          </Link>
        </li>
      </ul>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0 flex-col md:flex-row`}>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        {!isLoggedIn && (
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Button onClick={handleSignIn} className="hover:scale-105 transition duration-200">Sign-in</Button>
            <Button onClick={handleLogin} className="hover:scale-105 transition duration-200">Login</Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
