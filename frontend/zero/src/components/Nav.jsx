import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function Nav() {
  const navigate = useNavigate(); // Call useNavigate here only once

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="h-16 w-full bg-slate-50 text-black dark:bg-transparent dark:text-slate-400 flex shadow-2xl items-center justify-center p-6">
      <div className="mr-auto flex space-x-4">
        <Logo />
      </div>

      <ul className="flex space-x-32">
        <li>
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="hover:text-gray-500">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="hover:text-gray-500">
            Pricing
          </Link>
        </li>
      </ul>
      <div className="ml-auto flex space-x-4">
        <Button onClick={handleSignIn}>Sign-in</Button>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </nav>
  );
}

export default Nav;
