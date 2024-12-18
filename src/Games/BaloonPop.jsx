import React, { useState, useEffect } from "react";

const BalloonPop = () => {
  const [balloonSize, setBalloonSize] = useState(0);
  const [isBalloonGrowing, setIsBalloonGrowing] = useState(false);
  const [userBet, setUserBet] = useState(50); // Bet amount (percentage)
  const [cashOutAmount, setCashOutAmount] = useState(0);
  const [gameResult, setGameResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [balloonPopSize] = useState(100); // Maximum size before popping
  const [timer, setTimer] = useState(null);

  const startBalloonGrowth = () => {
    setIsBalloonGrowing(true);
    setGameResult("");
    setBalloonSize(0);
    setCashOutAmount(0);
    setGameOver(false);

    const interval = setInterval(() => {
      setBalloonSize((prevSize) => {
        if (prevSize >= balloonPopSize) {
          clearInterval(interval);
          setGameOver(true);
          setIsBalloonGrowing(false);
          setGameResult("Balloon popped! You lost.");
          return balloonPopSize; // Ensure balloon size does not exceed max
        }
        return Math.min(prevSize + Math.random() * 3, balloonPopSize); // Balloon grows
      });
    }, 100); // Update every 100ms

    setTimer(interval);
  };

  const cashOut = () => {
    if (isBalloonGrowing) {
      clearInterval(timer);
      setIsBalloonGrowing(false);
      setGameResult(`You cashed out at ${Math.round(balloonSize)}%! You win!`);
      setCashOutAmount(Math.round(balloonSize));
    }
  };

  const resetGame = () => {
    setBalloonSize(0);
    setCashOutAmount(0);
    setGameResult("");
    setGameOver(false);
    setUserBet(50);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Balloon Pop Game</h1>

      {/* Bet Input */}
      <div className="mb-8 w-64">
        <label className="block text-lg font-medium text-gray-700 mb-2">Bet Amount:</label>
        <input
          type="number"
          className="p-2 w-full rounded-md border border-gray-300"
          value={userBet}
          onChange={(e) => setUserBet(Number(e.target.value))}
          disabled={isBalloonGrowing || gameOver}
          min={1}
          max={100}
        />
      </div>

      {/* Balloon Display */}
      <div className="relative mb-8 w-64 h-64 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 rounded-full"
          style={{
            width: `${balloonSize}%`,
            height: `${balloonSize}%`,
            transition: "width 0.1s ease-in-out, height 0.1s ease-in-out",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 space-x-6">
        {!gameOver ? (
          <>
            <button
              onClick={startBalloonGrowth}
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
              disabled={isBalloonGrowing || gameOver}
            >
              Start Growing
            </button>
            <button
              onClick={cashOut}
              className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 disabled:opacity-50"
              disabled={!isBalloonGrowing || gameOver}
            >
              Cash Out
            </button>
          </>
        ) : (
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Reset Game
          </button>
        )}
      </div>

      {/* Game Result and Cashout Display */}
      <div className="text-lg font-semibold text-gray-700">
        {gameResult && <div>{gameResult}</div>}
        {cashOutAmount > 0 && !gameOver && (
          <div className="mt-4 text-xl font-bold text-green-600">
            You cashed out at {cashOutAmount}%!
          </div>
        )}
      </div>

      {/* Game Instructions */}
      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>Bet on how much the balloon will grow before it pops.</p>
        <p>Cash out before the balloon pops to win your bet!</p>
      </div>
    </div>
  );
};

export default BalloonPop;
