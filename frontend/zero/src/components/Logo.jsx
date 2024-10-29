import React from "react";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <div className="h-full flex items-center">
      <img src={logo} alt="logo" className="max-h-16 object-contain" />
    </div>
  );
}

export default Logo;
