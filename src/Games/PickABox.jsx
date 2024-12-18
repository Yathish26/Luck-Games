import React, { useState } from "react";

const PickABox = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [prizes, setPrizes] = useState([null, null, null]);
  const [reveal, setReveal] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [result, setResult] = useState(null);

  // Function to initialize game with random prizes
  const initializePrizes = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const newPrizes = [null, null, null];
    newPrizes[randomIndex] = "💎"; // Prize (diamond)
    setPrizes(newPrizes);
    setResult(null);
    setReveal(false);
  };

  // Function to handle box click
  const handleBoxClick = (index) => {
    if (reveal) return; // Prevent further clicks after reveal
    setSelectedBox(index);
    setReveal(true);

    // Check if the user won
    if (prizes[index] === "💎") {
      setResult("You win! 🎉");
    } else {
      setResult("You lose! 😢");
    }
  };

  // Start a new game
  const resetGame = () => {
    initializePrizes();
    setSelectedBox(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Pick a Box</h1>

      {/* Bet Amount */}
      <div className="mb-6 w-64">
        <label className="block text-lg font-medium text-gray-700 mb-2">Bet Amount:</label>
        <input
          type="number"
          className="p-2 w-full rounded-md border border-gray-300"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          disabled={reveal}
          min={1}
        />
      </div>

      {/* Boxes */}
      <div className="mb-6 flex space-x-4">
        {prizes.map((prize, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`w-24 h-24 flex items-center justify-center rounded-lg bg-blue-500 text-white cursor-pointer transition-all ${
              selectedBox === index ? "scale-105 shadow-xl" : ""
            }`}
          >
            {reveal && selectedBox === index ? prize : "🎁"}
          </div>
        ))}
      </div>

      {/* Result */}
      {reveal && (
        <div className="mt-4 text-xl font-semibold">
          <div className={`text-center ${result === "You win! 🎉" ? "text-green-500" : "text-red-500"}`}>
            {result}
          </div>
        </div>
      )}

      {/* Start/Reset Game */}
      <div className="mt-6 space-x-6">
        <button
          onClick={resetGame}
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          {reveal ? "Play Again" : "Start Game"}
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>Choose a box and see if you can find the hidden prize! 🎁</p>
        <p>The prize is a diamond 💎 hidden behind one box. Good luck!</p>
      </div>
    </div>
  );
};

export default PickABox;
