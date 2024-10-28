import React from "react";
import { Link } from "react-router-dom";
// import Logo from "./Logo";
function Nav() {
  return (
    <nav className="h-16 w-full bg-white text-black dark:bg-transparent dark:text-slate-400  flex shadow-2xl items-center justify-center p-6 ">
      {/* <Logo /> */}

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
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
