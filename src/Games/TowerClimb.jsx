import React, { useState } from "react";

const TowerClimb = () => {
  const [betAmount, setBetAmount] = useState(10);
  const [climbHeight, setClimbHeight] = useState(0);
  const [fallHeight, setFallHeight] = useState(null);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [result, setResult] = useState("");
  const [difficulty, setDifficulty] = useState(1);

  const startClimb = () => {
    setGameInProgress(true);
    setClimbHeight(0);
    setFallHeight(null);
    setResult("");
    setDifficulty(1);

    const climbInterval = setInterval(() => {
      // Randomly increment climb height with increasing difficulty
      setClimbHeight((prevHeight) => {
        const newHeight = prevHeight + Math.random() * difficulty;

        if (newHeight >= 100) {
          // If the character reaches the top, end the game
          clearInterval(climbInterval);
          setFallHeight(null);
          setResult("You win! 🎉");
        } else if (newHeight > 90) {
          // Increase difficulty near the top
          setDifficulty(2);
        }

        // Random chance to fall
        if (Math.random() < 0.1) {
          clearInterval(climbInterval);
          setFallHeight(newHeight);
          setResult("You fell! 😢");
        }

        return newHeight;
      });
    }, 100);
  };

  const resetGame = () => {
    setBetAmount(10);
    setClimbHeight(0);
    setFallHeight(null);
    setGameInProgress(false);
    setResult("");
    setDifficulty(1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Tower Climb</h1>

      {/* Bet Amount */}
      <div className="mb-6 w-64">
        <label className="block text-lg font-medium text-gray-700 mb-2">Bet Amount:</label>
        <input
          type="number"
          className="p-2 w-full rounded-md border border-gray-300"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          disabled={gameInProgress}
          min={1}
        />
      </div>

      {/* Tower Climb */}
      <div className="relative w-16 h-96 bg-gray-300 rounded-lg overflow-hidden mb-6">
        <div
          className="absolute bottom-0 left-0 w-full h-4 bg-green-500"
          style={{ height: `${climbHeight}%` }}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-8 h-8 bg-blue-500 rounded-full transition-all ${
            fallHeight !== null ? "animate-ping" : ""
          }`}
          style={{
            bottom: `${climbHeight}%`,
            transitionDuration: gameInProgress ? "0.1s" : "0s",
          }}
        ></div>
      </div>

      {/* Start/Reset Game */}
      <div className="mb-6 space-x-6">
        <button
          onClick={startClimb}
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
          disabled={gameInProgress}
        >
          Start Climb
        </button>
        <button
          onClick={resetGame}
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset Game
        </button>
      </div>

      {/* Game Result */}
      {result && (
        <div className="mt-4 text-xl font-semibold">
          <div className={`text-center ${result === "You win! 🎉" ? "text-green-500" : "text-red-500"}`}>
            {result}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>Bet on how high you think the character can climb the tower without falling.</p>
        <p>The higher the difficulty, the harder it gets to climb. Good luck!</p>
      </div>
    </div>
  );
};

export default TowerClimb;
