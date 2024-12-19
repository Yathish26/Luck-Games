import React from 'react';
import { Link } from 'react-router-dom';

export default function Games() {
  const games = [
    { name: 'Balloon Pop', path: '/game/baloon-pop' },
    { name: 'Card Draw', path: '/game/card-draw' },
    { name: 'Coin Toss', path: '/game/coin-toss' },
    { name: 'Dice Roll Game', path: '/game/dice' },
    { name: 'Horse Racing', path: '/game/horse-racing' },
    { name: 'Number Guessing', path: '/game/number-guess' },
    { name: 'Pick A Box', path: '/game/pick-a-box' },
    { name: 'Random Animal Race', path: '/game/random-animal-race' },
    { name: 'Rock Paper Scissors', path: '/game/rock-paper-scissors' },
    { name: 'Spin The Slot', path: '/game/spin-the-slot' },
    { name: 'Tower Climb', path: '/game/tower-climb' },
    { name: 'Wheel Of Fortune', path: '/game/wheel-of-fortune' },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-gray-800 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Games List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <Link
            key={index}
            to={game.path}
            className="bg-gray-200 rounded-lg shadow-md p-4 hover:bg-green-500 hover:text-white transition duration-300"
          >
            <span className="text-lg font-semibold">{game.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
