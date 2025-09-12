"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
            M
          </div>
        </div>

        {/* Navigation Icons */}
        <nav className="flex items-center space-x-6">
          {/* Font Size Icon */}
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-gray-700">
              <text x="2" y="8" className="text-xs font-bold">A</text>
              <text x="8" y="16" className="text-sm font-bold">A</text>
            </svg>
          </button>

          {/* Link Icon */}
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
              <path d="M12.5 7.5L7.5 12.5M8.5 7.5H12.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Sound Icon */}
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
              <path d="M10 4V16L6 12H3V8H6L10 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 7C13.5 7.5 14 8.5 14 10C14 11.5 13.5 12.5 13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
              <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="16 16L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Language Selector */}
          <div className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
            ENG
          </div>

          {/* WhatsApp Icon */}
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-600">
              <path d="M17 9.5C17 13.64 13.64 17 9.5 17C8.28 17 7.12 16.72 6.09 16.21L3 17L3.79 13.91C3.28 12.88 3 11.72 3 10.5C3 6.36 6.36 3 10.5 3C14.64 3 18 6.36 18 10.5H17Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;