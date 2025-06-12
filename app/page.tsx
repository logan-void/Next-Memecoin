'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MEMECOIN
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              The Next Generation of Meme Tokens
            </p>
            <Link href="/buy">
              <button className="bg-primary text-dark font-bold py-3 px-8 rounded-full hover:bg-secondary transition-colors duration-300 flex items-center mx-auto">
                Buy Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Community Driven',
                description: 'Built by the community, for the community.',
              },
              {
                title: 'Secure & Reliable',
                description: 'Audited smart contracts and transparent operations.',
              },
              {
                title: 'Massive Potential',
                description: 'Join the next big thing in the crypto space.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Roadmap</h2>
          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Launch',
                items: ['Website Launch', 'Community Building', 'Token Launch'],
              },
              {
                phase: 'Phase 2',
                title: 'Growth',
                items: ['Marketing Campaign', 'Exchange Listings', 'Partnership Announcements'],
              },
              {
                phase: 'Phase 3',
                title: 'Expansion',
                items: ['Major Exchange Listings', 'Ecosystem Development', 'Global Marketing'],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{phase.phase}</h3>
                <h4 className="text-xl mb-4">{phase.title}</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Memecoin. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 