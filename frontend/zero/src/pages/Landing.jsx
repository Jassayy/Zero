// Landing.js
import React from "react";

function Landing() {
  const cards = [
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "This is the third card." },
  ];

  return (
    <div className="landing">
      <h1 className="text-3xl font-light text-center mt-8 mb-4 dark:text-slate-200">
        Nice Try Diddy
      </h1>
      <div className="card-container grid gap-6 grid-cols-1 md:grid-cols-3 mt-4 px-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow dark:text-slate-500 dark:bg-slate-900"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700 dark:text-slate-400">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
