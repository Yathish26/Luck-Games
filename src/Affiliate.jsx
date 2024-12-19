import React from 'react';
import { Link } from 'react-router-dom';

export default function AffiliateProgram() {
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

      {/* Affiliate Program Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Affiliate & Referral Program</h2>

          {/* Referral Offers */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Refer and Earn</h3>
            <p className="text-gray-300">
              Invite your friends to join Playwin.co and earn exclusive bonuses! Here’s how it works:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li>Share your unique referral link with friends.</li>
              <li>Earn bonuses when your friends sign up and make their first deposit.</li>
              <li>Enjoy additional rewards for consistent referrals.</li>
            </ul>
            <div className="mt-6">
              <button className="bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition">
                Get My Referral Link
              </button>
            </div>
          </div>

          {/* Affiliate Tracking */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Track Your Performance</h3>
            <p className="text-gray-300">
              Monitor your affiliate stats and earnings in real time. Use the tools below to manage your performance:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li>See the number of referrals and active users.</li>
              <li>Track bonuses earned from referrals.</li>
              <li>Analyze your affiliate performance with detailed reports.</li>
            </ul>
            <div className="mt-6">
              <button className="bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition">
                View Affiliate Dashboard
              </button>
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
