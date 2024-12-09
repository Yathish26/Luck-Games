import React, { useState, useEffect } from "react";

function App() {
  const colors = ["red", "blue", "green"];
  const [currentColor, setCurrentColor] = useState("");
  const [balance, setBalance] = useState(100); // Starting balance
  const [betAmount, setBetAmount] = useState(0);
  const [predictedColor, setPredictedColor] = useState("");
  const [timer, setTimer] = useState(10);
  const [message, setMessage] = useState("");
  const [betPlaced, setBetPlaced] = useState(false);

  // Change color every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (betPlaced) {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setCurrentColor(newColor);
        evaluateBet(newColor);
      }
      setTimer(10);
    }, 10000);

    return () => clearInterval(interval);
  }, [betPlaced]);

  // Countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Evaluate bet
  const evaluateBet = (newColor) => {
    if (predictedColor === newColor) {
      setBalance(balance + betAmount * 2); // Add double the bet amount to the balance
      setMessage(`Congratulations! You won and earned $${betAmount * 2}.`);
    } else {
      setMessage("You lost! Better luck next time.");
    }
    setBetPlaced(false);
    setPredictedColor(""); // Reset prediction
    setBetAmount(0); // Reset bet amount
  };

  const handleBet = () => {
    if (betAmount <= 0 || betAmount > balance) {
      alert("Invalid bet amount. Please ensure it is greater than 0 and less than or equal to your balance.");
    } else if (!predictedColor) {
      alert("Please select a color to predict.");
    } else {
      setBalance(balance - betAmount); // Deduct bet amount immediately
      setMessage(`Bet placed! You predicted ${predictedColor} with $${betAmount}.`);
      setBetPlaced(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Color Prediction Game</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4">Current Balance: ${balance}</h2>
        <h3 className="text-green-500 font-semibold mb-2">{message}</h3>
        <h2
          className={`text-2xl font-bold mb-6`}
          style={{ color: currentColor }}
        >
          Current Color: {currentColor || "?"}
        </h2>
        <p className="text-gray-500 mb-4">Next color in: {timer} seconds</p>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Bet Amount:
          </label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-700">
            Predict the next color:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setPredictedColor(color)}
                className={`p-4 rounded-md text-white font-bold ${
                  predictedColor === color
                    ? "border-4 border-black"
                    : "border border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleBet}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Place Bet
        </button>
      </div>
    </div>
  );
}

export default App;
