import React, { useState } from "react";

const WheelOfFortune = () => {
  const [betType, setBetType] = useState("specific");
  const [userBet, setUserBet] = useState("");
  const [message, setMessage] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelResult, setWheelResult] = useState(null);

  const wheelSections = [
    { number: 1, color: "red" },
    { number: 2, color: "blue" },
    { number: 3, color: "green" },
    { number: 4, color: "yellow" },
    { number: 5, color: "red" },
    { number: 6, color: "blue" },
    { number: 7, color: "green" },
    { number: 8, color: "yellow" },
  ];

  const spinWheel = () => {
    setIsSpinning(true);
    setMessage("");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wheelSections.length);
      const result = wheelSections[randomIndex];
      setWheelResult(result);
      checkBet(result);
      setIsSpinning(false);
    }, 3000); // 3-second spin animation
  };

  const checkBet = (result) => {
    if (betType === "specific" && parseInt(userBet) === result.number) {
      setMessage(`You win! The wheel stopped at number ${result.number}.`);
    } else if (betType === "color" && userBet.toLowerCase() === result.color) {
      setMessage(`You win! The wheel stopped on the color ${result.color}.`);
    } else if (betType === "range") {
      const betLow = userBet === "low";
      const isLow = result.number <= 4;
      setMessage(
        betLow === isLow
          ? `You win! The wheel stopped at number ${result.number}, which is in the ${isLow ? "low" : "high"} range.`
          : `You lose! The wheel stopped at number ${result.number}, which is in the ${isLow ? "low" : "high"} range.`
      );
    } else {
      setMessage(`You lose! The wheel stopped at number ${result.number} (${result.color}).`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-purple-600">Wheel of Fortune</h1>

      {/* Bet Type Selector */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Choose Bet Type:</label>
        <select
          className="p-2 rounded-md border border-gray-300"
          value={betType}
          onChange={(e) => setBetType(e.target.value)}
        >
          <option value="specific">Specific Number (1-8)</option>
          <option value="color">Color (red, blue, green, yellow)</option>
          <option value="range">Range (low/high)</option>
        </select>
      </div>

      {/* User Bet Input */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Enter Your Bet:</label>
        <input
          type="text"
          placeholder={
            betType === "specific"
              ? "Enter a number (1-8)"
              : betType === "color"
              ? "Enter 'red', 'blue', 'green', or 'yellow'"
              : "Enter 'low' or 'high'"
          }
          value={userBet}
          onChange={(e) => setUserBet(e.target.value)}
          className="p-2 rounded-md border border-gray-300 w-full"
        />
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className={`px-6 py-2 text-white rounded-md ${
          isSpinning ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"
        }`}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>

      {/* Wheel Animation */}
      <div className="relative mt-10">
        <div
          className={`w-48 h-48 border-4 border-purple-500 rounded-full flex items-center justify-center transition-transform duration-3000 ease-out ${
            isSpinning ? "animate-spin" : ""
          }`}
        >
          <div className="text-xl font-bold text-gray-700">
            {wheelResult ? `${wheelResult.number} (${wheelResult.color})` : "?"}
          </div>
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

export default WheelOfFortune;
