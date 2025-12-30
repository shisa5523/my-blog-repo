'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-transparent border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
              <span className="text-2xl">📊</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Blog Data
            </span>
          </Link>

          <ul className="hidden md:flex items-center space-x-1">
            <li>
              <Link 
                href="/" 
                className="relative px-4 py-2 text-white/90 font-medium rounded-lg hover:text-white transition-all duration-200 hover:bg-white/10 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="relative px-4 py-2 text-white/90 font-medium rounded-lg hover:text-white transition-all duration-200 hover:bg-white/10 group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/profile" 
                className="relative px-4 py-2 text-white/90 font-medium rounded-lg hover:text-white transition-all duration-200 hover:bg-white/10 group"
              >
                Profile
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/certificates" 
                className="relative px-4 py-2 text-white/90 font-medium rounded-lg hover:text-white transition-all duration-200 hover:bg-white/10 group"
              >
                Chứng chỉ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <Link href="/" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg">Home</Link>
            <Link href="/blog" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg">Blog</Link>
            <Link href="/profile" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg">Profile</Link>
            <Link href="/certificates" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg">Certificates</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
