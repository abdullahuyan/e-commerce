import React from 'react';

const CurvedArrow = ({ className = 'w-12 h-12', color = '#23A6F0' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke={color}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5c6 0 10 6 14 10m0 0H9m8 0v-8"
    />
  </svg>
);

export default CurvedArrow;
