'use client';

import { motion } from 'framer-motion';

export default function CommunityPage() {
  const links = [
    { name: 'Telegram', url: 'https://t.me/memecoin', icon: '💬' },
    { name: 'Twitter', url: 'https://twitter.com/memecoin', icon: '🐦' },
    { name: 'Discord', url: 'https://discord.gg/memecoin', icon: '🎮' },
  ];

  return (
    <main className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Join the Memecoin Community
          </h1>
          <p className="text-gray-300 mb-8">
            Be part of the most fun and viral crypto community! Connect with us, share memes, and help shape the future of Memecoin.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary/20 transition-colors duration-300 rounded-xl p-6 flex flex-col items-center"
              >
                <span className="text-4xl mb-2">{link.icon}</span>
                <span className="font-bold text-lg text-primary">{link.name}</span>
              </a>
            ))}
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Why Join?</h2>
            <ul className="list-disc list-inside text-gray-300 text-left mx-auto max-w-md">
              <li>Exclusive meme contests & giveaways</li>
              <li>Early access to news and updates</li>
              <li>Direct influence on project direction</li>
              <li>Meet fellow meme lovers and crypto degens</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 