'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
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
            About Memecoin
          </h1>
          <p className="text-gray-300">
            Memecoin is a fun, community-driven project born from internet culture and crypto enthusiasm.
          </p>
        </motion.div>
      </div>
    </main>
  );
} 