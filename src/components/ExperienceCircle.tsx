"use client";

import React from 'react';

const ExperienceCircle = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Large Circular Experience Display */}
        <div className="relative">
          {/* Main Circle */}
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white/30 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
            
            {/* Clock-like tick marks */}
            <div className="absolute inset-0 rounded-full">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) - 90; // Start from top
                const isActive = i < 8; // Make first 8 ticks active to show progress
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-6 bg-white/40 origin-bottom"
                    style={{
                      top: '10px',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${angle}deg)`,
                      backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.2)'
                    }}
                  />
                );
              })}
            </div>

            {/* Center Content */}
            <div className="text-center z-10">
              <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                18
              </div>
              <div className="text-lg md:text-xl text-white/80 font-light">
                years
              </div>
              <div className="text-base md:text-lg text-white/60 mt-1">
                on-line
              </div>
            </div>

            {/* Progress Arc Overlay */}
            <div className="absolute inset-4 rounded-full border-4 border-transparent">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray={`${2 * Math.PI * 45 * 0.65} ${2 * Math.PI * 45}`}
                  className="opacity-80"
                />
              </svg>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCircle;