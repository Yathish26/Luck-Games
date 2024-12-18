import React, { useState } from "react";

const NumberGuessing = () => {
  const [range, setRange] = useState(10); // Default range (1-10)
  const [randomNumber, setRandomNumber] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    const number = Math.floor(Math.random() * range) + 1;
    setRandomNumber(number);
    setMessage("");
    setUserGuess("");
    setGameStarted(true);
  };

  const checkGuess = () => {
    const guess = parseInt(userGuess);
    if (guess === randomNumber) {
      setMessage(`🎉 You win! The correct number was ${randomNumber}.`);
    } else if (guess > randomNumber) {
      setMessage("Too high! Try again.");
    } else {
      setMessage("Too low! Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Number Guessing Game</h1>

      {/* Range Selector */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Choose Your Range:</label>
        <select
          className="p-2 rounded-md border border-gray-300"
          value={range}
          onChange={(e) => setRange(parseInt(e.target.value))}
        >
          <option value={10}>1-10 (High payout)</option>
          <option value={20}>1-20</option>
          <option value={50}>1-50 (Low payout)</option>
        </select>
      </div>

      {/* Start Button */}
      {!gameStarted ? (
        <button
          onClick={startGame}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Start Game
        </button>
      ) : (
        <div className="mb-6">
          {/* User Guess Input */}
          <label className="block mb-2 font-medium text-gray-700">Enter Your Guess:</label>
          <input
            type="number"
            placeholder={`Guess a number (1-${range})`}
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            className="p-2 rounded-md border border-gray-300 w-full"
          />
          <button
            onClick={checkGuess}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit Guess
          </button>
        </div>
      )}

      {/* Message */}
      {message && (
        <div className="mt-6 text-center">
          <div className="text-lg font-medium">{message}</div>
        </div>
      )}
    </div>
  );
};

export default NumberGuessing;
