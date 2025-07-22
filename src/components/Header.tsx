/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center space-x-2">
            <a
              href="/"
              className=""
            >
                <Image src="/logo.jpeg" alt="Maasi logo" width={32} height={32} className="object-contain" />
                     
            </a>
            <span className="text-2xl font-bold text-gray-900">Maasi</span>
          </div>
          
          {/* Always visible burger menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-bl-lg border border-gray-100">
          <div className="py-4 px-6 space-y-4">
            <a
              href="/"
              className="block text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="support"
              className="block text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How You Can Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;