import React from "react";

function Logo() {
  return (
    <div className="h-full flex items-center gap-2">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60C47.464 60 60 47.464 60 32C60 16.536 47.464 4 32 4ZM32 52C21.048 52 12 42.952 12 32C12 21.048 21.048 12 32 12C42.952 12 52 21.048 52 32C52 42.952 42.952 52 32 52Z"
          className="fill-black dark:fill-white"
        />
      </svg>
      <span className="text-3xl font-bold tracking-tight text-black dark:text-white font-mono">
        Zero
      </span>
    </div>
  );
}

export default Logo;
