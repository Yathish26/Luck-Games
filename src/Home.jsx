import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-green-700 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Playwin.co</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-green-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300">Games</a></li>
              <li><a href="#" className="hover:text-green-300">Leaderboard</a></li>
              <li><a href="#" className="hover:text-green-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-600 text-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Play and Win Big!</h2>
          <p className="text-lg mb-6">Join thrilling games, compete with others, and win real prizes!</p>
          <button className="bg-gray-800 text-green-300 px-6 py-3 rounded hover:bg-gray-700 transition">
            Start Playing
          </button>
        </div>
      </div>

      {/* Featured Games */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Featured Games</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-bold">Game 1: Ultimate Soccer</h4>
              <p className="text-sm text-gray-400">Play Now & Compete</p>
              <button className="mt-4 bg-green-700 text-gray-100 px-4 py-2 rounded hover:bg-green-600">
                Play Now
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-bold">Game 2: Basketball Showdown</h4>
              <p className="text-sm text-gray-400">Shoot & Score!</p>
              <button className="mt-4 bg-green-700 text-gray-100 px-4 py-2 rounded hover:bg-green-600">
                Play Now
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg">
              <h4 className="text-xl font-bold">Game 3: Racing Kings</h4>
              <p className="text-sm text-gray-400">Fast & Furious Fun</p>
              <button className="mt-4 bg-green-700 text-gray-100 px-4 py-2 rounded hover:bg-green-600">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="bg-gray-800 py-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Leaderboard</h3>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <ul className="space-y-4">
              <li className="flex justify-between text-lg">
                <span>Player1</span>
                <span>1000 Points</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Player2</span>
                <span>950 Points</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Player3</span>
                <span>900 Points</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join the Action?</h3>
          <button className="bg-gray-800 text-green-300 px-6 py-3 rounded hover:bg-gray-700 transition">
            Create an Account
          </button>
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
