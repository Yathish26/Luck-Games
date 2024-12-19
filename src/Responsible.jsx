import React from 'react';
import { Link } from 'react-router-dom';

export default function ResponsibleGambling() {
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

      {/* Responsible Gambling Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Responsible Gambling</h2>

          {/* Self-Exclusion Options */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Self-Exclusion Options</h3>
            <p className="text-gray-300 mb-4">
              We encourage responsible gambling. If you need a break, you can set limits or self-exclude.
            </p>
            <button className="bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition">
              Manage Self-Exclusion
            </button>
          </div>

          {/* Gambling Addiction Resources */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Gambling Addiction Resources</h3>
            <p className="text-gray-300 mb-4">
              If gambling is causing issues in your life, please seek help. Below are some organizations that provide support:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                <a
                  href="https://www.gamblersanonymous.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Gamblers Anonymous
                </a>
              </li>
              <li>
                <a
                  href="https://www.begambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  BeGambleAware
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncpgambling.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  National Council on Problem Gambling
                </a>
              </li>
            </ul>
          </div>

          {/* Gamification Features */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Gamification Features</h3>
            <p className="text-gray-300">
              Keep track of your time spent playing and receive responsible reminders to ensure a healthy gaming experience.
            </p>
            <button className="mt-4 bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition">
              Enable Time Reminders
            </button>
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
