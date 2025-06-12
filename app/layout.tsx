import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memecoin - The Next Generation of Meme Tokens',
  description: 'Join the revolution with the most exciting meme token in the crypto space.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16"> {/* Add padding for fixed navbar */}
          {children}
        </div>
        <footer className="bg-dark border-t border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  MEMECOIN
                </h3>
                <p className="text-gray-400 mb-4">
                  The next generation of meme tokens. Join the revolution and be part of something extraordinary.
                </p>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                    Twitter
                  </a>
                  <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                    Telegram
                  </a>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                    Discord
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="text-gray-400 hover:text-primary">About</a>
                  </li>
                  <li>
                    <a href="/tokenomics" className="text-gray-400 hover:text-primary">Tokenomics</a>
                  </li>
                  <li>
                    <a href="/how-to-buy" className="text-gray-400 hover:text-primary">How to Buy</a>
                  </li>
                  <li>
                    <a href="/roadmap" className="text-gray-400 hover:text-primary">Roadmap</a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/whitepaper" className="text-gray-400 hover:text-primary">Whitepaper</a>
                  </li>
                  <li>
                    <a href="/community" className="text-gray-400 hover:text-primary">Community</a>
                  </li>
                  <li>
                    <a href="/faq" className="text-gray-400 hover:text-primary">FAQ</a>
                  </li>
                  <li>
                    <a href="/privacy" className="text-gray-400 hover:text-primary">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2024 Memecoin. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 