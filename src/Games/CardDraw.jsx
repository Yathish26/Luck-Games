import React, { useState } from "react";

const CardDraw = () => {
  const [betType, setBetType] = useState("color");
  const [userBet, setUserBet] = useState("");
  const [card, setCard] = useState(null);
  const [message, setMessage] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);

  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const colors = { hearts: "red", diamonds: "red", clubs: "black", spades: "black" };

  const drawCard = () => {
    setIsDrawing(true);
    setMessage("");

    setTimeout(() => {
      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      const randomValue = Math.floor(Math.random() * 13) + 1; // 1-13 for Ace to King
      const drawnCard = { suit: randomSuit, value: randomValue, color: colors[randomSuit] };
      setCard(drawnCard);
      checkBet(drawnCard);
      setIsDrawing(false);
    }, 3000); // 3-second shuffle animation
  };

  const checkBet = (drawnCard) => {
    if (betType === "color" && userBet.toLowerCase() === drawnCard.color) {
      setMessage(`You win! The card was ${drawnCard.value} of ${drawnCard.suit} (${drawnCard.color}).`);
    } else if (betType === "suit" && userBet.toLowerCase() === drawnCard.suit) {
      setMessage(`You win! The card was ${drawnCard.value} of ${drawnCard.suit}.`);
    } else if (
      betType === "rank" &&
      ((userBet === "high" && drawnCard.value > 7) || (userBet === "low" && drawnCard.value <= 7))
    ) {
      setMessage(
        `You win! The card was ${drawnCard.value} of ${drawnCard.suit} (which is ${
          drawnCard.value > 7 ? "high" : "low"
        }).`
      );
    } else {
      setMessage(`You lose! The card was ${drawnCard.value} of ${drawnCard.suit} (${drawnCard.color}).`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Card Draw Game</h1>

      {/* Bet Type Selector */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Choose Bet Type:</label>
        <select
          className="p-2 rounded-md border border-gray-300"
          value={betType}
          onChange={(e) => setBetType(e.target.value)}
        >
          <option value="color">Color (red/black)</option>
          <option value="suit">Suit (hearts, diamonds, clubs, spades)</option>
          <option value="rank">Rank (high/low)</option>
        </select>
      </div>

      {/* User Bet Input */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Enter Your Bet:</label>
        <input
          type="text"
          placeholder={
            betType === "color"
              ? "Enter 'red' or 'black'"
              : betType === "suit"
              ? "Enter 'hearts', 'diamonds', 'clubs', or 'spades'"
              : "Enter 'high' or 'low'"
          }
          value={userBet}
          onChange={(e) => setUserBet(e.target.value)}
          className="p-2 rounded-md border border-gray-300 w-full"
        />
      </div>

      {/* Draw Button */}
      <button
        onClick={drawCard}
        disabled={isDrawing}
        className={`px-6 py-2 text-white rounded-md ${
          isDrawing ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {isDrawing ? "Shuffling..." : "Draw a Card"}
      </button>

      {/* Card Animation */}
      <div className="relative mt-10">
        <div
          className={`w-32 h-48 bg-white border-4 border-black rounded-lg flex items-center justify-center text-2xl font-bold ${
            isDrawing ? "animate-spin-fast" : ""
          }`}
        >
          {card ? `${card.value} of ${card.suit}` : "?"}
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

export default CardDraw;
