'use client';

import { motion } from 'framer-motion';

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Memecoin Whitepaper
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-primary">1. Introduction</h2>
            <p className="text-gray-300">Memecoin is a community-driven, meme-powered cryptocurrency designed to bring fun, utility, and viral energy to the blockchain world.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-primary">2. The Meme Philosophy</h2>
            <p className="text-gray-300">We believe memes are the purest form of internet culture. Memecoin leverages this power to create a strong, loyal, and fun community.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-primary">3. Tokenomics</h2>
            <ul className="list-disc list-inside text-gray-300 ml-4">
              <li>Total Supply: 1,000,000,000,000 MEME</li>
              <li>Fair launch, no presale</li>
              <li>5% buy/sell tax (for liquidity, marketing, and community rewards)</li>
              <li>Initial burn: 20%</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-primary">4. Roadmap</h2>
            <p className="text-gray-300">From meme contests to NFT drops and staking, our roadmap is both ambitious and hilarious. See the full roadmap on our Roadmap page!</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-primary">5. Community</h2>
            <p className="text-gray-300">The heart of Memecoin is its community. Join us on Telegram, Twitter, and Discord to help shape the future of memes on the blockchain.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 text-primary">6. Disclaimer</h2>
            <p className="text-gray-300">Memecoin is for entertainment purposes only. Always DYOR (do your own research) and never invest more than you can afford to lose. Memes are powerful, but not financial advice!</p>
          </section>
        </motion.div>
      </div>
    </main>
  );
} 