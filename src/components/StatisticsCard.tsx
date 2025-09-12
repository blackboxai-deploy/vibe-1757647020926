"use client";

import React from 'react';

interface StatisticsCardProps {
  percentage: string;
  description: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ percentage, description }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-750 transition-colors">
      <div className="relative mb-6">
        {/* Circular Progress Background */}
        <div className="w-24 h-24 mx-auto relative">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="white"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40 * (parseInt(percentage) / 100)} ${2 * Math.PI * 40}`}
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {percentage}%
            </span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StatisticsCard;