import React, { useState } from "react";

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [isChoosing, setIsChoosing] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const playGame = (choice) => {
    setIsChoosing(true);
    setUserChoice(choice);
    setComputerChoice("");
    setResult("");

    const computerChoice = getComputerChoice();
    setTimeout(() => {
      setComputerChoice(computerChoice);
      determineWinner(choice, computerChoice);
      setIsChoosing(false);
    }, 1000); // Simulate computer thinking for 1 second
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a draw!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Rock Paper Scissors</h1>

      {/* User Choice */}
      <div className="flex space-x-6 mb-8">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => playGame(choice)}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={isChoosing}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      {/* Game Result */}
      {isChoosing && (
        <div className="mb-6 text-lg font-medium text-gray-700">Computer is choosing...</div>
      )}

      <div className="mb-6">
        <div className="text-lg font-semibold text-gray-700">
          You chose: <span className="font-bold text-blue-600">{userChoice}</span>
        </div>
        {computerChoice && (
          <div className="text-lg font-semibold text-gray-700">
            Computer chose: <span className="font-bold text-red-600">{computerChoice}</span>
          </div>
        )}
      </div>

      {/* Result */}
      {result && (
        <div className="mt-6 text-xl font-bold text-green-600">{result}</div>
      )}
    </div>
  );
};

export default RockPaperScissors;
