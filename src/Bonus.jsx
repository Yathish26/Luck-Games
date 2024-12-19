import React from 'react';
import { Link } from 'react-router-dom';

export default function BonusPromotions() {
  const promotions = [
    {
      title: 'Welcome Bonus',
      description: 'Get a 100% bonus on your first deposit up to $200!',
      terms: 'Minimum deposit: $10. Wagering requirement: 20x. Valid for new users only.',
    },
    {
      title: 'Weekly Cashback',
      description: 'Receive 10% cashback on your losses every Monday.',
      terms: 'Minimum cashback: $5. Maximum cashback: $100. Valid for all users.',
    },
    {
      title: 'Refer a Friend',
      description: 'Earn $25 for every friend who signs up and makes a deposit.',
      terms: 'Referral must deposit at least $50. No limit on referrals.',
    },
  ];

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

      {/* Bonus/Promotions Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bonuses & Promotions</h2>

          {/* Ongoing Offers */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Ongoing Offers</h3>
            <div className="space-y-6">
              {promotions.map((promo, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="text-xl font-bold">{promo.title}</h4>
                  <p className="text-gray-300">{promo.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Terms */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Bonus Terms & Conditions</h3>
            <ul className="space-y-4">
              {promotions.map((promo, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="text-lg font-bold">{promo.title}</h4>
                  <p className="text-gray-300">{promo.terms}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Bonus Activation */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Claim Your Bonus</h3>
            <div className="flex flex-col items-center space-y-4">
              <input
                type="text"
                placeholder="Enter Promo Code"
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg w-full max-w-md"
              />
              <button className="bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition">
                Activate Bonus
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
