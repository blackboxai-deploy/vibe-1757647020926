"use client";

import React from 'react';

const AccentSection = () => {
  return (
    <section className="bg-gradient-to-r from-lime-400 to-yellow-400 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Main Message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight font-playfair mb-6">
            Ready to create
            <br />
            something amazing?
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Every great digital experience starts with a conversation. 
            Let's discuss your vision and turn it into reality.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors text-lg">
            Get in Touch
          </button>
          <button className="px-10 py-4 border-3 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-colors text-lg">
            View Portfolio
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-6 h-6 bg-black rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-8 right-1/3 w-4 h-4 bg-gray-800 rounded-full opacity-30"></div>
          <div className="absolute bottom-0 left-1/3 w-8 h-8 bg-black rounded-full opacity-15"></div>
          
          {/* Contact Info */}
          <div className="text-center">
            <p className="text-lg text-gray-800 mb-2">
              Available for freelance projects
            </p>
            <p className="text-base text-gray-700">
              Based in [Your Location] • Working globally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccentSection;