import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-4 max-w-full flex justify-center items-center p-5 ml-14 border border-slate-500 rounded-full hover:text-slate-500"
    >
      {children}
    </button>
  );
}

export default Button;
