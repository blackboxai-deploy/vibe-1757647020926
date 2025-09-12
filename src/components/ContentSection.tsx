"use client";

import React from 'react';
import StatisticsCard from './StatisticsCard';

const ContentSection = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-playfair mb-6">
            Adaptive AI design.
            <br />
            <span className="text-gray-400">Your users, always in mind.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column */}
          <div className="space-y-12">
            
            {/* It's your business section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                It's your business
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every design decision I make is rooted in understanding your business goals 
                and user needs. I don't just create interfaces – I craft experiences that 
                drive engagement, increase conversions, and build lasting relationships 
                between your brand and your customers.
              </p>
            </div>

            {/* Buy it. Rent it. Leave it. section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Buy it. Rent it. Leave it.
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Flexible engagement models that work for your business. Whether you need 
                a complete design overhaul, temporary design support, or ongoing consultation, 
                I adapt to your needs and timeline.
              </p>
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors">
                Discover Advantage
              </button>
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <StatisticsCard
                percentage="80"
                description="User satisfaction increase through thoughtful UX improvements"
              />
              <StatisticsCard
                percentage="90"
                description="Client retention rate with continued design partnerships"
              />
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="text-center bg-gray-800 p-8 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  x3
                </div>
                <div className="text-gray-300 text-sm">
                  Average conversion rate improvement
                </div>
              </div>
              <div className="text-center bg-gray-800 p-8 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  2 sec
                </div>
                <div className="text-gray-300 text-sm">
                  Faster task completion time
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="border-t border-gray-800 pt-16">
          <div className="max-w-4xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              "Design is not just what it looks like and feels like. Design is how it works. 
              My approach combines aesthetic excellence with functional precision, ensuring 
              every interface I create serves both beauty and purpose."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;