import React, { useState } from "react";

const DiceRollGame = () => {
  const [diceRoll, setDiceRoll] = useState(null);
  const [betType, setBetType] = useState("specific");
  const [userBet, setUserBet] = useState("");
  const [message, setMessage] = useState("");

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(result);
    checkBet(result);
  };

  const checkBet = (result) => {
    if (betType === "specific" && parseInt(userBet) === result) {
      setMessage(`You win! The dice rolled ${result}.`);
    } else if (betType === "evenOdd") {
      const betEven = userBet === "even";
      const isEven = result % 2 === 0;
      setMessage(
        betEven === isEven
          ? `You win! The dice rolled ${result}, which is ${isEven ? "even" : "odd"}.`
          : `You lose! The dice rolled ${result}, which is ${isEven ? "even" : "odd"}.`
      );
    } else if (betType === "highLow") {
      const isHigh = result > 3;
      const betHigh = userBet === "high";
      setMessage(
        betHigh === isHigh
          ? `You win! The dice rolled ${result}, which is ${isHigh ? "high" : "low"}.`
          : `You lose! The dice rolled ${result}, which is ${isHigh ? "high" : "low"}.`
      );
    } else {
      setMessage(`You lose! The dice rolled ${result}.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Dice Roll Game</h1>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Choose Bet Type:</label>
        <select
          className="p-2 rounded-md border border-gray-300"
          value={betType}
          onChange={(e) => setBetType(e.target.value)}
        >
          <option value="specific">Specific Number (1-6)</option>
          <option value="evenOdd">Even/Odd</option>
          <option value="highLow">High/Low</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Enter Your Bet:</label>
        <input
          type="text"
          placeholder={
            betType === "specific"
              ? "Enter a number (1-6)"
              : betType === "evenOdd"
              ? "Enter 'even' or 'odd'"
              : "Enter 'high' or 'low'"
          }
          value={userBet}
          onChange={(e) => setUserBet(e.target.value)}
          className="p-2 rounded-md border border-gray-300 w-full"
        />
      </div>

      <button
        onClick={rollDice}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Roll Dice
      </button>

      {diceRoll && (
        <div className="mt-6 text-center">
          <div className="text-2xl font-bold">Dice Rolled: {diceRoll}</div>
          <div className="text-lg mt-2">{message}</div>
        </div>
      )}
    </div>
  );
};

export default DiceRollGame;
