import React, { useState, useEffect } from "react";

const HorseRacing = () => {
  const [horses] = useState(["Horse 1", "Horse 2", "Horse 3", "Horse 4"]);
  const [userBet, setUserBet] = useState("");
  const [isRacing, setIsRacing] = useState(false);
  const [winner, setWinner] = useState(null);
  const [positions, setPositions] = useState(horses.map(() => 0));
  const [message, setMessage] = useState("");

  const startRace = () => {
    setIsRacing(true);
    setWinner(null);
    setMessage("");

    const raceDuration = 5000; // Race lasts 5 seconds
    const interval = 100;

    const newPositions = [...positions];
    const raceInterval = setInterval(() => {
      for (let i = 0; i < horses.length; i++) {
        newPositions[i] += Math.random() * 10; // Random progress
        if (newPositions[i] >= 100) {
          clearInterval(raceInterval);
          setWinner(horses[i]);
          checkBet(horses[i]);
          setIsRacing(false);
          break;
        }
      }
      setPositions([...newPositions]);
    }, interval);

    setTimeout(() => {
      if (!winner) {
        const maxPosition = Math.max(...newPositions);
        const winningHorse = horses[newPositions.indexOf(maxPosition)];
        setWinner(winningHorse);
        checkBet(winningHorse);
        setIsRacing(false);
        clearInterval(raceInterval);
      }
    }, raceDuration);
  };

  const checkBet = (winningHorse) => {
    if (userBet === winningHorse) {
      setMessage(`🎉 You win! ${winningHorse} won the race!`);
    } else {
      setMessage(`😢 You lose. ${winningHorse} won the race.`);
    }
  };

  const resetRace = () => {
    setPositions(horses.map(() => 0));
    setUserBet("");
    setMessage("");
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Horse Racing Simulator</h1>

      {/* Betting Input */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Place Your Bet:</label>
        <select
          className="p-2 rounded-md border border-gray-300 w-full"
          value={userBet}
          onChange={(e) => setUserBet(e.target.value)}
          disabled={isRacing}
        >
          <option value="" disabled>
            Select a Horse
          </option>
          {horses.map((horse, index) => (
            <option key={index} value={horse}>
              {horse}
            </option>
          ))}
        </select>
      </div>

      {/* Start/Reset Button */}
      {!isRacing ? (
        <button
          onClick={startRace}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          disabled={!userBet}
        >
          Start Race
        </button>
      ) : (
        <button
          onClick={resetRace}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset Race
        </button>
      )}

      {/* Race Track */}
      <div className="relative mt-10 w-full max-w-3xl">
        {horses.map((horse, index) => (
          <div
            key={index}
            className="flex items-center mb-4"
            style={{ width: "100%" }}
          >
            <div className="text-gray-700 font-bold w-20">{horse}</div>
            <div
              className="h-8 bg-blue-500 text-white text-sm flex items-center justify-center rounded-md"
              style={{
                width: `${positions[index]}%`,
                transition: isRacing ? "width 0.1s linear" : "none",
              }}
            >
              🏇
            </div>
          </div>
        ))}
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

export default HorseRacing;
