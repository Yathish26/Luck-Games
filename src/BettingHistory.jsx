import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BettingHistory() {
  const [filters, setFilters] = useState({
    date: '',
    gameType: '',
    status: '',
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const bettingData = [
    { game: 'Ultimate Soccer', amount: 50, odds: '2.0', result: 'Win', status: 'Completed', date: '2024-12-15' },
    { game: 'Basketball Showdown', amount: 30, odds: '1.5', result: 'Loss', status: 'Completed', date: '2024-12-12' },
    { game: 'Racing Kings', amount: 20, odds: '3.0', result: 'Pending', status: 'Pending', date: '2024-12-10' },
  ];

  const totalWagered = bettingData.reduce((acc, bet) => acc + bet.amount, 0);
  const totalWinnings = bettingData
    .filter((bet) => bet.result === 'Win')
    .reduce((acc, bet) => acc + bet.amount * parseFloat(bet.odds) - bet.amount, 0);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-green-700 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Playwin.co</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-green-300">Home</Link></li>
              <li><Link to="/games" className="hover:text-green-300">Games</Link></li>
              <li><Link to="/leaderboard" className="hover:text-green-300">Leaderboard</Link></li>
              <li><Link to="/profile" className="hover:text-green-300">Profile</Link></li>
              <li><Link to="/login" className="hover:text-green-300">Login</Link></li>
              <li><Link to="/signup" className="hover:text-green-300">Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Betting History */}
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Betting History</h2>

          {/* Filters */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <label htmlFor="date" className="text-lg">Date:</label>
              <input
                type="date"
                name="date"
                id="date"
                value={filters.date}
                onChange={handleFilterChange}
                className="px-4 py-2 rounded bg-gray-700 text-gray-300"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="gameType" className="text-lg">Game Type:</label>
              <select
                name="gameType"
                id="gameType"
                value={filters.gameType}
                onChange={handleFilterChange}
                className="px-4 py-2 rounded bg-gray-700 text-gray-300"
              >
                <option value="">All</option>
                <option value="soccer">Soccer</option>
                <option value="basketball">Basketball</option>
                <option value="racing">Racing</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="status" className="text-lg">Status:</label>
              <select
                name="status"
                id="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="px-4 py-2 rounded bg-gray-700 text-gray-300"
              >
                <option value="">All</option>
                <option value="win">Win</option>
                <option value="loss">Loss</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Betting Activity */}
          <div className="overflow-x-auto bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Detailed Betting Activity</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Game</th>
                  <th className="px-4 py-2">Bet Amount</th>
                  <th className="px-4 py-2">Odds</th>
                  <th className="px-4 py-2">Result</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {bettingData.map((bet, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{bet.game}</td>
                    <td className="px-4 py-2">${bet.amount}</td>
                    <td className="px-4 py-2">{bet.odds}</td>
                    <td className="px-4 py-2">{bet.result}</td>
                    <td className="px-4 py-2">{bet.status}</td>
                    <td className="px-4 py-2">{bet.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Wagering Summary */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Wagering Summary</h3>
            <div className="text-left space-y-2">
              <p className="text-lg">Total Wagered: ${totalWagered}</p>
              <p className="text-lg">Total Winnings: ${totalWinnings.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-400">
          &copy; 2024 Playwin.co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
