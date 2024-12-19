import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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

      {/* Hero Section */}
      <div className="bg-green-600 text-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Play and Win Big!</h2>
          <p className="text-lg mb-6">Join thrilling games, compete with others, and win real prizes!</p>
          <Link to="/signup">
            <button className="bg-gray-800 text-green-300 px-6 py-3 rounded hover:bg-gray-700 transition">
              Start Playing
            </button>
          </Link>
        </div>
      </div>

      {/* Overview of Games */}
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Available Games</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-bold">Ultimate Soccer</h4>
              <p className="text-sm text-gray-400">Join the ultimate soccer experience.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-bold">Basketball Showdown</h4>
              <p className="text-sm text-gray-400">Shoot & score your way to victory!</p>
            </div>
            <div className="bg-gray-700 p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-bold">Racing Kings</h4>
              <p className="text-sm text-gray-400">Race against the best and claim your crown!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions and Bonuses */}
      <section className="bg-green-700 py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Ongoing Promotions</h3>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-400 mb-4">Get 50% bonus on your first deposit!</p>
            <Link to="/bonus">
              <button className="bg-gray-800 text-green-300 px-6 py-3 rounded hover:bg-gray-700 transition">
                Claim Your Bonus
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-lg font-bold text-gray-400 mb-4">Quick Links</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-400">
            <li><Link to="/profile" className="hover:text-green-300">Profile</Link></li>
            <li><Link to="/betting-history" className="hover:text-green-300">Betting History</Link></li>
            <li><Link to="/deposit-withdrawal" className="hover:text-green-300">Deposit/Withdrawal</Link></li>
            <li><Link to="/bonus" className="hover:text-green-300">Bonus/Promotions</Link></li>
            <li><Link to="/faq" className="hover:text-green-300">FAQ</Link></li>
            <li><Link to="/help-support" className="hover:text-green-300">Help/Support</Link></li>
            <li><Link to="/responsible-gambling" className="hover:text-green-300">Responsible Gambling</Link></li>
            <li><Link to="/terms-and-privacy" className="hover:text-green-300">Terms & Privacy</Link></li>
            <li><Link to="/about" className="hover:text-green-300">About Us</Link></li>
            <li><Link to="/affliate" className="hover:text-green-300">Affiliate Program</Link></li>
          </ul>
          <p className="text-sm text-gray-500 mt-6">&copy; 2024 Playwin.co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
