import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
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

      {/* Profile Information */}
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">User Profile</h2>
          
          {/* Account Information */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Account Information</h3>
            <div className="flex justify-center space-x-6 mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-lg font-semibold">Username: JohnDoe</p>
                <p className="text-lg">Email: johndoe@example.com</p>
                <p className="text-lg">Account Status: Active</p>
              </div>
            </div>
          </div>

          {/* Balance Section */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Balance</h3>
            <p className="text-lg">Current Balance: $500.00</p>
          </div>

          {/* Bet History */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Bet History</h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Game</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Result</th>
                    <th className="px-4 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Ultimate Soccer</td>
                    <td className="px-4 py-2">$50.00</td>
                    <td className="px-4 py-2 text-green-400">Win</td>
                    <td className="px-4 py-2">2024-12-15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Basketball Showdown</td>
                    <td className="px-4 py-2">$30.00</td>
                    <td className="px-4 py-2 text-red-400">Loss</td>
                    <td className="px-4 py-2">2024-12-12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bonuses and Rewards */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Bonuses and Rewards</h3>
            <p className="text-lg">Active Bonus: 50% First Deposit Bonus</p>
            <Link to="/promotions">
              <button className="mt-4 bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600">
                Claim Bonus
              </button>
            </Link>
          </div>

          {/* Transaction History */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Transaction History</h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Deposit</td>
                    <td className="px-4 py-2">$100.00</td>
                    <td className="px-4 py-2">2024-12-10</td>
                    <td className="px-4 py-2 text-green-400">Completed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Withdrawal</td>
                    <td className="px-4 py-2">$50.00</td>
                    <td className="px-4 py-2">2024-12-11</td>
                    <td className="px-4 py-2 text-red-400">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Settings</h3>
            <div className="flex justify-between">
              <Link to="/update-account">
                <button className="bg-gray-800 text-green-300 px-6 py-3 rounded hover:bg-gray-700 transition">
                  Update Account Info
                </button>
              </Link>
              <Link to="/change-password">
                <button className="bg-gray-800 text-green-300 px-6 py-3 rounded hover:bg-gray-700 transition">
                  Change Password
                </button>
              </Link>
              <Link to="/two-factor-auth">
                <button className="bg-gray-800 text-green-300 px-6 py-3 rounded hover:bg-gray-700 transition">
                  Set Up 2FA
                </button>
              </Link>
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
