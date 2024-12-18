import React, { useState } from "react";

const SpinTheSlot = () => {
  const [symbols, setSymbols] = useState(["🍒", "🍋", "🍉"]);
  const [spinResult, setSpinResult] = useState(["", "", ""]);
  const [payout, setPayout] = useState(0);
  const [betAmount, setBetAmount] = useState(10);
  const [isSpinning, setIsSpinning] = useState(false);

  const possibleSymbols = ["🍒", "🍋", "🍉", "🍊", "🍇"]; // Slot machine symbols

  // Function to spin the slot machine
  const spinSlot = () => {
    setIsSpinning(true);
    setSpinResult(["", "", ""]);
    setPayout(0);

    // Simulate a spin with a delay
    setTimeout(() => {
      const result = [
        possibleSymbols[Math.floor(Math.random() * possibleSymbols.length)],
        possibleSymbols[Math.floor(Math.random() * possibleSymbols.length)],
        possibleSymbols[Math.floor(Math.random() * possibleSymbols.length)],
      ];
      setSpinResult(result);
      calculatePayout(result);
      setIsSpinning(false);
    }, 1000); // 1 second spin animation
  };

  // Function to calculate payout based on the result
  const calculatePayout = (result) => {
    if (result[0] === result[1] && result[1] === result[2]) {
      setPayout(betAmount * 10); // Triple match payout
    } else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
      setPayout(betAmount * 2); // Double match payout
    } else {
      setPayout(0); // No match
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Spin the Slot</h1>

      {/* Bet Amount */}
      <div className="mb-6 w-64">
        <label className="block text-lg font-medium text-gray-700 mb-2">Bet Amount:</label>
        <input
          type="number"
          className="p-2 w-full rounded-md border border-gray-300"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          disabled={isSpinning}
          min={1}
        />
      </div>

      {/* Slot Machine Display */}
      <div className="mb-6 flex space-x-4 text-4xl font-bold">
        {spinResult.map((symbol, index) => (
          <div key={index} className="w-16 h-16 flex items-center justify-center bg-white rounded-md shadow-lg">
            {symbol || "?"}
          </div>
        ))}
      </div>

      {/* Spin Button */}
      <button
        onClick={spinSlot}
        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin the Slot"}
      </button>

      {/* Payout Display */}
      {payout > 0 && (
        <div className="mt-6 text-xl font-bold text-green-600">
          You win! Payout: ${payout}
        </div>
      )}
      {payout === 0 && !isSpinning && (
        <div className="mt-6 text-xl font-bold text-red-600">
          No match! Better luck next time.
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>Bet on the slot machine and spin to win!</p>
        <p>Match 3 symbols for a big payout, or 2 for a smaller one.</p>
      </div>
    </div>
  );
};

export default SpinTheSlot;
