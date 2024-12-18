import React, { useState } from "react";

const CoinToss = () => {
  const [userBet, setUserBet] = useState("");
  const [coinResult, setCoinResult] = useState(null);
  const [message, setMessage] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);

  const tossCoin = () => {
    setIsFlipping(true);
    setMessage("");

    setTimeout(() => {
      const result = Math.random() < 0.5 ? "heads" : "tails";
      setCoinResult(result);
      checkBet(result);
      setIsFlipping(false);
    }, 2000); // 2-second flip animation
  };

  const checkBet = (result) => {
    if (userBet.toLowerCase() === result) {
      setMessage(`You win! The coin landed on ${result}.`);
    } else {
      setMessage(`You lose! The coin landed on ${result}.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Coin Toss Game</h1>

      {/* User Bet Input */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Enter Your Bet:</label>
        <input
          type="text"
          placeholder="Enter 'heads' or 'tails'"
          value={userBet}
          onChange={(e) => setUserBet(e.target.value)}
          className="p-2 rounded-md border border-gray-300 w-full"
        />
      </div>

      {/* Toss Button */}
      <button
        onClick={tossCoin}
        disabled={isFlipping}
        className={`px-6 py-2 text-white rounded-md ${
          isFlipping ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"
        }`}
      >
        {isFlipping ? "Flipping..." : "Toss the Coin"}
      </button>

      {/* Coin Animation */}
      <div className="relative mt-10">
        <div
          className={`w-24 h-24 bg-yellow-400 rounded-full border-4 border-yellow-500 flex items-center justify-center text-white text-xl font-bold ${
            isFlipping ? "animate-spin-fast" : ""
          }`}
        >
          {isFlipping ? "?" : coinResult?.toUpperCase()}
        </div>
      </div>

      {/* Result Message */}
      {message && (
        <div className="mt-6 text-center">
          <div className="text-lg font-medium">{message}</div>
        </div>
      )}
    </div>
  );
};

export default CoinToss;
