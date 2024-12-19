import React from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const faqs = [
    {
      category: 'Game Instructions',
      items: [
        {
          question: 'How do I play games on Playwin.co?',
          answer: 'Simply log in, navigate to the "Games" section, select a game, and follow the on-screen instructions to start playing.',
        },
        {
          question: 'How do I place a bet?',
          answer: 'Choose a game, select your preferred bet type, set your stake, and confirm your bet.',
        },
      ],
    },
    {
      category: 'Account Management',
      items: [
        {
          question: 'How do I update my account details?',
          answer: 'Go to your profile, click on "Settings," and update your personal information or change your password.',
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept credit cards, PayPal, cryptocurrency, and other popular payment methods.',
        },
      ],
    },
    {
      category: 'Troubleshooting',
      items: [
        {
          question: 'I can’t log in. What should I do?',
          answer: 'Ensure your username and password are correct. If you forgot your password, click "Forgot Password" to reset it.',
        },
        {
          question: 'What should I do if a game doesn’t load?',
          answer: 'Try refreshing the page or clearing your browser cache. If the issue persists, contact our support team.',
        },
      ],
    },
    {
      category: 'Terms & Conditions',
      items: [
        {
          question: 'What are the rules for using this platform?',
          answer: 'Please read our Terms & Conditions, which outline the rules for fair play, privacy, and responsible gaming.',
        },
        {
          question: 'How is my personal information protected?',
          answer: 'We prioritize user privacy and use secure encryption to protect your data. Read our Privacy Policy for details.',
        },
      ],
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

      {/* FAQ Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">{faq.category}</h3>
              <ul className="space-y-4">
                {faq.items.map((item, idx) => (
                  <li key={idx} className="bg-gray-800 p-4 rounded-lg shadow">
                    <h4 className="text-lg font-bold">{item.question}</h4>
                    <p className="text-gray-300">{item.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
