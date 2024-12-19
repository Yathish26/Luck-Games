import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HelpSupport() {
  const [ticket, setTicket] = useState({ subject: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmitTicket = () => {
    alert('Your ticket has been submitted. Our support team will get back to you shortly.');
    setTicket({ subject: '', description: '' });
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

      {/* Help/Support Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Help & Support</h2>

          {/* Live Chat */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
            <p className="text-gray-300">Connect with a support agent instantly via our live chat.</p>
            <button className="bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition mt-4">
              Start Live Chat
            </button>
          </div>

          {/* Email/Phone Support */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> support@playwin.co
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Phone:</strong> +1 (800) 123-4567
            </p>
            <p className="text-gray-300">
              Reach out to us via email or phone for any inquiries or assistance.
            </p>
          </div>

          {/* Knowledge Base */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Knowledge Base</h3>
            <p className="text-gray-300 mb-4">Browse articles on how to use the site, game rules, and betting strategies.</p>
            <button className="bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition">
              Go to Knowledge Base
            </button>
          </div>

          {/* Ticket System */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Submit a Ticket</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={ticket.subject}
                  onChange={handleInputChange}
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg w-full"
                  placeholder="Enter the subject of your issue"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={ticket.description}
                  onChange={handleInputChange}
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg w-full"
                  rows="4"
                  placeholder="Describe your issue in detail"
                />
              </div>
              <button
                type="button"
                onClick={handleSubmitTicket}
                className="bg-green-700 text-gray-100 px-6 py-3 rounded hover:bg-green-600 transition"
              >
                Submit Ticket
              </button>
            </form>
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
