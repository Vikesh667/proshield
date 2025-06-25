// src/components/SvgGradients.jsx
import React from "react";


const SvgGradients = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      {/* Updated gradient for the stroke: Indigo 800 to Blue 500 */}
      <linearGradient id="iconGradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3730a3" /> {/* Tailwind's Indigo 800 */}
        <stop offset="100%" stopColor="#3b82f6" /> {/* Tailwind's Blue 500 */}
      </linearGradient>

      {/* Add other gradients here if needed */}
    </defs>
  </svg>
);
export default SvgGradients
