import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DepositWithdrawal() {
  const [transactionStatus, setTransactionStatus] = useState('Pending');

  const depositMethods = ['Credit Card', 'PayPal', 'Bitcoin', 'Bank Transfer'];
  const withdrawalMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];
  const transactionHistory = [
    { type: 'Deposit', method: 'Credit Card', amount: 100, status: 'Completed', date: '2024-12-15' },
    { type: 'Withdrawal', method: 'PayPal', amount: 50, status: 'Pending', date: '2024-12-14' },
  ];

  const depositLimit = { min: 10, max: 5000 };
  const withdrawalLimit = { min: 20, max: 10000 };

  const handleTransactionStatusChange = (status) => {
    setTransactionStatus(status);
  };

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

      {/* Deposit/Withdrawal Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Deposit & Withdrawal</h2>

          {/* Deposit Methods */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Deposit Methods</h3>
            <ul className="space-y-4">
              {depositMethods.map((method, index) => (
                <li key={index} className="text-lg">{method}</li>
              ))}
            </ul>
            <div className="text-lg mt-4">
              <p>Deposit Limit: ${depositLimit.min} - ${depositLimit.max}</p>
            </div>
          </div>

          {/* Withdrawal Methods */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Withdrawal Methods</h3>
            <ul className="space-y-4">
              {withdrawalMethods.map((method, index) => (
                <li key={index} className="text-lg">{method}</li>
              ))}
            </ul>
            <div className="text-lg mt-4">
              <p>Withdrawal Limit: ${withdrawalLimit.min} - ${withdrawalLimit.max}</p>
            </div>
          </div>

          {/* Transaction Status */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Transaction Status</h3>
            <div className="mb-4">
              <p className="text-lg">Current Transaction Status: {transactionStatus}</p>
              <button
                onClick={() => handleTransactionStatusChange('Completed')}
                className="mt-4 bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition"
              >
                Mark as Completed
              </button>
              <button
                onClick={() => handleTransactionStatusChange('Failed')}
                className="mt-4 bg-red-700 text-gray-100 px-6 py-3 rounded hover:bg-red-600 transition"
              >
                Mark as Failed
              </button>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Transaction History</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Method</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((transaction, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{transaction.type}</td>
                    <td className="px-4 py-2">{transaction.method}</td>
                    <td className="px-4 py-2">${transaction.amount}</td>
                    <td className="px-4 py-2">{transaction.status}</td>
                    <td className="px-4 py-2">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
