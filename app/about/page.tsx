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

          {/* Origin Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Origin Story</h2>
            <p className="text-gray-300 mb-4">
              Born from the depths of internet culture and the wild world of crypto, Memecoin emerged as a beacon of hope in the sea of serious cryptocurrencies. We're not just another token - we're a movement, a community, and most importantly, a meme that's taking over the world.
            </p>
            <p className="text-gray-300">
              What started as a joke in a Discord server has evolved into something much bigger. Our community-driven approach and commitment to transparency have made us one of the most talked-about projects in the space.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-secondary">Our Mission</h3>
                <p className="text-gray-300">
                  To create the most entertaining and community-driven memecoin that brings joy and potential financial gains to our holders. We're here to prove that memes can be more than just jokes - they can be revolutionary.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-secondary">Our Vision</h3>
                <p className="text-gray-300">
                  To become the most recognized and beloved memecoin in the crypto space, known for our strong community, transparent operations, and commitment to making crypto fun again.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">The Team</h2>
            <p className="text-gray-300 mb-6">
              We're a group of crypto enthusiasts, meme lovers, and blockchain developers who came together to create something special. Our team is fully doxxed and committed to the project's long-term success.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'John Doe',
                  role: 'Founder & Lead Developer',
                  description: '10+ years in blockchain development',
                },
                {
                  name: 'Jane Smith',
                  role: 'Community Manager',
                  description: 'Crypto community expert',
                },
                {
                  name: 'Mike Johnson',
                  role: 'Marketing Director',
                  description: 'Digital marketing specialist',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl text-center"
                >
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Community First',
                  description: 'Our community is our backbone. Every decision we make is with our holders in mind.',
                },
                {
                  title: 'Transparency',
                  description: 'We believe in complete transparency. All our operations and decisions are open for scrutiny.',
                },
                {
                  title: 'Innovation',
                  description: 'We are constantly pushing boundaries and finding new ways to make our project better.',
                },
                {
                  title: 'Fun & Entertainment',
                  description: 'At the end of the day, we are here to have fun and make crypto enjoyable for everyone.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-3 text-secondary">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
} 