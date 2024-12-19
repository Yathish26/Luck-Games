import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
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

      {/* About Us Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>

          {/* Company Info */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-300">
              Playwin.co is a leading online platform offering exciting games, engaging challenges, and real rewards. Our mission is to create a secure and entertaining environment for players to test their skills, compete, and win. Backed by a passionate team of gaming enthusiasts, we strive to deliver the best gaming experience to our community.
            </p>
          </div>

          {/* Licensing Info */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Licensing & Regulation</h3>
            <p className="text-gray-300">
              We operate under the strict guidelines of international gaming regulations. Playwin.co is fully licensed and adheres to responsible gambling practices to ensure a safe and fair environment for our users. For more details, please visit our 
              <Link to="/terms" className="text-green-400 hover:underline"> Terms & Conditions</Link>.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to get in touch with us:
            </p>
            <ul className="mt-4 text-gray-300 space-y-2">
              <li>Email: <a href="mailto:support@playwin.co" className="text-green-400 hover:underline">support@playwin.co</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-green-400 hover:underline">+1 234 567 890</a></li>
              <li>Address: 123 Gaming Ave, Fun City, FC 45678</li>
            </ul>
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
