'use client';

import { motion } from 'framer-motion';

export default function RoadmapPage() {
  const phases = [
    {
      phase: 'Q1',
      title: 'Take over Twitter',
      items: [
        'Launch website',
        'Start meme campaign',
        'Get first 1,000 holders',
        'Trend on Twitter with #Memecoin',
      ],
    },
    {
      phase: 'Q2',
      title: 'Community Growth',
      items: [
        'Elon tweets about us (hopefully)',
        'List on CoinGecko & CoinMarketCap',
        'First meme contest',
        '10,000+ holders',
      ],
    },
    {
      phase: 'Q3',
      title: 'Utility & Expansion',
      items: [
        'Release meme NFT collection',
        'Launch staking platform',
        'Major exchange listing',
        'Global meme domination',
      ],
    },
    {
      phase: 'Q4',
      title: 'The Moon',
      items: [
        'Charity meme-a-thon',
        'Partnerships with top meme pages',
        'Community DAO launch',
        'To the moon and beyond!',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Roadmap
          </h1>
          <div className="space-y-8">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h2 className="text-2xl font-bold text-primary mb-2">{phase.phase}: {phase.title}</h2>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 