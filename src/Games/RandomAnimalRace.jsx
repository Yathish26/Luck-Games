import React, { useState } from "react";

const RandomAnimalRace = () => {
  const animals = ["🐱", "🐶", "🐢"]; // Animals participating in the race
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [raceInProgress, setRaceInProgress] = useState(false);
  const [raceResult, setRaceResult] = useState("");
  const [racePositions, setRacePositions] = useState({
    cat: 0,
    dog: 0,
    turtle: 0,
  });
  const [raceWinner, setRaceWinner] = useState("");
  const [betAmount, setBetAmount] = useState(10);

  const startRace = () => {
    if (!selectedAnimal) return;

    setRaceInProgress(true);
    setRaceResult("");
    setRaceWinner("");
    setRacePositions({
      cat: 0,
      dog: 0,
      turtle: 0,
    });

    const raceInterval = setInterval(() => {
      setRacePositions((prevPositions) => {
        const newPositions = { ...prevPositions };

        // Randomly increase position of each animal with different speeds
        newPositions.cat = Math.min(newPositions.cat + Math.random() * 5, 100);
        newPositions.dog = Math.min(newPositions.dog + Math.random() * 5, 100);
        newPositions.turtle = Math.min(newPositions.turtle + Math.random() * 3, 100);

        // Check if any animal has reached the finish line (100)
        if (newPositions.cat >= 100) {
          clearInterval(raceInterval);
          setRaceWinner("🐱 (Cat)");
          setRaceResult(selectedAnimal === "cat" ? "You win!" : "You lose!");
        } else if (newPositions.dog >= 100) {
          clearInterval(raceInterval);
          setRaceWinner("🐶 (Dog)");
          setRaceResult(selectedAnimal === "dog" ? "You win!" : "You lose!");
        } else if (newPositions.turtle >= 100) {
          clearInterval(raceInterval);
          setRaceWinner("🐢 (Turtle)");
          setRaceResult(selectedAnimal === "turtle" ? "You win!" : "You lose!");
        }

        return newPositions;
      });
    }, 100); // Update positions every 100ms
  };

  const resetRace = () => {
    setRaceInProgress(false);
    setRaceResult("");
    setRaceWinner("");
    setRacePositions({
      cat: 0,
      dog: 0,
      turtle: 0,
    });
    setSelectedAnimal("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Random Animal Race</h1>

      {/* Bet Input */}
      <div className="mb-6 w-64">
        <label className="block text-lg font-medium text-gray-700 mb-2">Bet Amount:</label>
        <input
          type="number"
          className="p-2 w-full rounded-md border border-gray-300"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          disabled={raceInProgress}
          min={1}
        />
      </div>

      {/* Animal Selection */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Choose Your Animal:</label>
        <div className="flex space-x-6">
          {animals.map((animal, index) => (
            <button
              key={index}
              className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
                selectedAnimal === animal.toLowerCase() ? "bg-blue-700" : ""
              }`}
              onClick={() => setSelectedAnimal(animal.toLowerCase())}
              disabled={raceInProgress}
            >
              {animal}
            </button>
          ))}
        </div>
      </div>

      {/* Race Positions */}
      <div className="relative mb-6 w-64 h-16 bg-gray-300 rounded-md overflow-hidden">
        <div
          className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center bg-white rounded-full"
          style={{ left: `${racePositions.cat}%` }}
        >
          🐱
        </div>
        <div
          className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center bg-white rounded-full"
          style={{ left: `${racePositions.dog}%` }}
        >
          🐶
        </div>
        <div
          className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center bg-white rounded-full"
          style={{ left: `${racePositions.turtle}%` }}
        >
          🐢
        </div>
      </div>

      {/* Start/Reset Race Button */}
      <div className="mb-6 space-x-6">
        <button
          onClick={startRace}
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
          disabled={raceInProgress || !selectedAnimal}
        >
          Start Race
        </button>
        <button
          onClick={resetRace}
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset Race
        </button>
      </div>

      {/* Race Result */}
      {raceResult && (
        <div className="text-xl font-semibold text-gray-700">
          <div className="mt-4">{raceResult}</div>
          <div className="mt-2">The winner is {raceWinner}!</div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>Bet on the animal that you think will reach the finish line first!</p>
        <p>Race starts once you select an animal and click "Start Race".</p>
      </div>
    </div>
  );
};

export default RandomAnimalRace;
