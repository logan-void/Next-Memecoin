'use client';

import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BuyPage() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-primary hover:text-secondary mb-8">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Buy Memecoin
          </h1>

          {/* Token Info Card */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Token Information</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Token Name:</span>
                <span className="font-bold">Memecoin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Symbol:</span>
                <span className="font-bold">MEME</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Supply:</span>
                <span className="font-bold">1,000,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contract Address:</span>
                <span className="font-mono text-sm">0x1234...5678</span>
              </div>
            </div>
          </div>

          {/* Purchase Form */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-primary">Purchase Tokens</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-gray-400 mb-2">
                  Amount (ETH)
                </label>
                <input
                  type="number"
                  id="amount"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="0.0"
                  step="0.01"
                  min="0"
                />
              </div>
              <div>
                <label htmlFor="tokens" className="block text-gray-400 mb-2">
                  You will receive (MEME)
                </label>
                <input
                  type="text"
                  id="tokens"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="0"
                  readOnly
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-dark font-bold py-3 px-8 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                Connect Wallet to Buy
              </button>
            </form>
          </div>

          {/* Important Notice */}
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <h3 className="text-yellow-500 font-bold mb-2">Important Notice</h3>
            <p className="text-gray-300 text-sm">
              Make sure you're using a secure wallet and double-check all transaction details before confirming.
              Never share your private keys or seed phrase with anyone.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 