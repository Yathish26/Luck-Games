import React, { useState, useEffect } from "react";

function ColorGame() {
  const colors = ["red", "blue", "green"];
  const [currentColor, setCurrentColor] = useState("");
  const [balance, setBalance] = useState(100);
  const [betAmount, setBetAmount] = useState(0);
  const [predictedColor, setPredictedColor] = useState("");
  const [timer, setTimer] = useState(10);
  const [message, setMessage] = useState("");
  const [betPlaced, setBetPlaced] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          const newColor = colors[Math.floor(Math.random() * colors.length)];
          setCurrentColor(newColor);
          if (betPlaced) evaluateBet(newColor);
          updateHistory(newColor);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [betPlaced, colors]);

  const updateHistory = (resultColor) => {
    setHistory((prev) => {
      return [...prev, resultColor].slice(-5);
    });
  };

  const evaluateBet = (resultColor) => {
    if (predictedColor === resultColor) {
      setBalance(balance + betAmount * 2);
      setMessage(`Congratulations! You won and earned $${betAmount * 2}.`);
    } else {
      setMessage("You lost! Better luck next time.");
    }
    setBetPlaced(false);
    setPredictedColor("");
    setBetAmount(0);
  };

  const handleBet = () => {
    if (betAmount <= 0 || betAmount > balance) {
      alert("Invalid bet amount. Please ensure it is greater than 0 and less than or equal to your balance.");
    } else if (!predictedColor) {
      alert("Please select a color to predict.");
    } else {
      setBalance(balance - betAmount);
      setMessage(`Bet placed! You predicted ${predictedColor} with $${betAmount}.`);
      setBetPlaced(true);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Color Luck</h1>
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-green-400 mb-4">Balance: ${balance}</h2>
        <h3 className="text-lg text-green-300 font-semibold mb-2">{message}</h3>
        <h2 className={`text-2xl font-bold mb-6`} style={{ color: currentColor }}>
          Current Color: {currentColor || "?"}
        </h2>
        <p className="text-gray-400 mb-4">Next color in: {timer} seconds</p>

        <div className="mb-4">
          <label className="block text-gray-300 font-medium mb-2">Bet Amount:</label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-300">Predict the next color:</h3>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setPredictedColor(color)}
                className={`p-4 rounded-md text-white font-bold ${
                  predictedColor === color
                    ? "border-4 border-green-400"
                    : "border border-gray-700"
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
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition"
        >
          Place Bet
        </button>
      </div>

      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md mt-6 text-center">
        <h3 className="text-lg font-medium text-gray-300 mb-4">Last 5 Results</h3>
        <div className="flex justify-center space-x-4">
          {history.map((color, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: color }}
              title={color}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorGame;
