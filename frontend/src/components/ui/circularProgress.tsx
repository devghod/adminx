'use client';

import React from 'react';

interface CircularProgressProps {
  value: number; // e.g. 0–100
  size?: number; // diameter in px
  strokeWidth?: number;
}

export default function CircularProgress({
  value,
  size = 120,
  strokeWidth = 8,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - value) / 100) * circumference;

  return (
    <div className='relative' style={{ width: size, height: size }}>
      <svg className='transform -rotate-90 w-full h-full'>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className='text-gray-200 dark:text-gray-700'
          stroke='currentColor'
          fill='transparent'
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          className='text-green-500'
          stroke='currentColor'
          fill='transparent'
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          style={{
            transition: 'stroke-dashoffset 0.5s ease',
          }}
        />
      </svg>
      {/* Center label */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-[0.6rem] font-semibold text-gray-800 dark:text-gray-200`}
      >
        {value}%
      </div>
    </div>
  );
}
