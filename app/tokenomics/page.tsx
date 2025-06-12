'use client';

import { motion } from 'framer-motion';

export default function TokenomicsPage() {
  const tokenomics = {
    totalSupply: '1,000,000,000,000',
    initialBurn: '20%',
    maxWallet: '2%',
    maxTransaction: '1%',
    tax: {
      buy: '5%',
      sell: '5%',
    },
    distribution: [
      { name: 'Public Sale', percentage: '40%', description: 'Available for public purchase' },
      { name: 'Liquidity Pool', percentage: '30%', description: 'Locked for 1 year' },
      { name: 'Team', percentage: '10%', description: 'Vested over 12 months' },
      { name: 'Marketing', percentage: '10%', description: 'For growth and development' },
      { name: 'Community Rewards', percentage: '10%', description: 'For community incentives' },
    ],
  };

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
            Tokenomics
          </h1>

          {/* Token Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Token Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-secondary">Token Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Supply:</span>
                    <span className="font-bold">{tokenomics.totalSupply}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Initial Burn:</span>
                    <span className="font-bold">{tokenomics.initialBurn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Max Wallet:</span>
                    <span className="font-bold">{tokenomics.maxWallet}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Max Transaction:</span>
                    <span className="font-bold">{tokenomics.maxTransaction}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-secondary">Tax Structure</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Buy Tax:</span>
                    <span className="font-bold">{tokenomics.tax.buy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sell Tax:</span>
                    <span className="font-bold">{tokenomics.tax.sell}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Token Distribution */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Token Distribution</h2>
            <div className="space-y-4">
              {tokenomics.distribution.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-secondary">{item.name}</h3>
                    <span className="text-primary font-bold">{item.percentage}</span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Important Notice */}
          <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
            <h3 className="text-yellow-500 font-bold mb-2">Important Notice</h3>
            <p className="text-gray-300">
              All tokenomics are subject to change based on community feedback and market conditions. Any changes will be
              announced through our official channels with proper notice.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 