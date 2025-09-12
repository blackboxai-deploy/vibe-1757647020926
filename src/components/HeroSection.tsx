"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gray-50 px-6 py-16 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-50"></div>
        <div className="absolute top-40 left-1/3 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-light text-gray-700 mb-2">
              Hi, I'm Marceli,
            </h1>
            <p className="text-lg text-gray-600">
              and I create digital experiences
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black leading-tight font-playfair">
              UI/UX
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black leading-tight font-playfair">
              designer
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-2xl mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I believe that great design is not just about making things look beautiful – 
              it's about creating intuitive, accessible, and meaningful experiences that 
              connect with users on a deeper level. Every pixel has a purpose, every 
              interaction tells a story.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
              About me
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors">
              CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;