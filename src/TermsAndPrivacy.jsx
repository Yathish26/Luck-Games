import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndPrivacy() {
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

      {/* Terms and Privacy Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Terms & Conditions / Privacy Policy</h2>

          {/* Terms of Service */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Terms of Service</h3>
            <p className="text-gray-300 mb-4">
              By using Playwin.co, you agree to abide by our terms and conditions. These include:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Users must be at least 18 years old to participate.</li>
              <li>All winnings are subject to verification and applicable tax deductions.</li>
              <li>Any misuse of the platform may result in account suspension or termination.</li>
            </ul>
            <p className="text-gray-300 mt-4">
              For the full list of terms, please read our detailed 
              <Link to="/terms" className="text-green-400 hover:underline"> Terms of Service</Link>.
            </p>
          </div>

          {/* Privacy Policy */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>
            <p className="text-gray-300 mb-4">
              We are committed to protecting your personal information. Our privacy policy includes:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Your data is used only to provide and improve our services.</li>
              <li>We do not sell your information to third parties.</li>
              <li>You can access, modify, or request deletion of your data at any time.</li>
            </ul>
            <p className="text-gray-300 mt-4">
              For detailed information, please visit our 
              <Link to="/privacy" className="text-green-400 hover:underline"> Privacy Policy</Link>.
            </p>
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
