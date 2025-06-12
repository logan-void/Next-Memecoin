'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HowToBuyPage() {
  const steps = [
    {
      title: 'Create a Wallet',
      description: 'Download and install MetaMask or Trust Wallet from the official website or app store.',
      icon: '👛',
    },
    {
      title: 'Get Some ETH',
      description: 'Purchase ETH from your preferred exchange and send it to your wallet.',
      icon: '💰',
    },
    {
      title: 'Go to Uniswap',
      description: "Visit Uniswap and connect your wallet. Make sure you're on the Ethereum network.",
      icon: '🔄',
    },
    {
      title: 'Swap ETH for MEME',
      description: 'Enter the amount of ETH you want to swap and paste our token address.',
      icon: '💱',
    },
    {
      title: 'Set Slippage',
      description: 'Set slippage to 5% to account for our tax structure.',
      icon: '⚙️',
    },
    {
      title: 'Confirm Swap',
      description: 'Review the transaction details and confirm the swap.',
      icon: '✅',
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
            How to Buy
          </h1>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <a
              href="https://uniswap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="font-bold mb-2">Uniswap</h3>
              <p className="text-gray-400 text-sm">Buy on Uniswap</p>
            </a>
            <a
              href="https://etherscan.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="font-bold mb-2">Contract</h3>
              <p className="text-gray-400 text-sm">View on Etherscan</p>
            </a>
            <a
              href="https://metamask.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="font-bold mb-2">MetaMask</h3>
              <p className="text-gray-400 text-sm">Get MetaMask</p>
            </a>
          </div>

          {/* Step by Step Guide */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Step by Step Guide</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl"
                >
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{step.icon}</div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-primary font-bold mr-2">Step {index + 1}</span>
                        <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                        <h3 className="text-xl font-bold ml-2">{step.title}</h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Important Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Important Information</h2>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Contract Address</h3>
                  <p className="font-mono bg-gray-900 p-3 rounded-lg text-sm">
                    0x1234...5678
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Network</h3>
                  <p className="text-gray-300">Ethereum Mainnet</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Slippage</h3>
                  <p className="text-gray-300">Set to 5% to account for our tax structure</p>
                </div>
              </div>
            </div>
          </section>

          {/* Warning */}
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
            <h3 className="text-red-500 font-bold mb-2">⚠️ Warning</h3>
            <p className="text-gray-300">
              Always verify the contract address before making any transactions. Never share your private keys or seed
              phrase with anyone. Be cautious of fake websites and social media accounts.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 