"use client";

import React from "react";

interface CustomSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function CustomSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}: CustomSliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full relative h-6">
      {/* Track */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[3px] bg-gray-300 rounded" />

      {/* Range (filled part) */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 h-[3px] bg-green-600 rounded"
        style={{ width: `${percentage}%` }}
      />

      {/* Native range input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-[14px] appearance-none bg-transparent z-10 relative top-[6px]"
        style={{ WebkitAppearance: "none" }}
      />

      {/* Custom thumb styles */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 9999px;
          background: white;
          border: 2px solid #22c55e; /* green-500 */
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
          margin-top: -6.5px; /* centers thumb vertically */
        }

        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 9999px;
          background: white;
          border: 2px solid #22c55e;
        }

        input[type="range"]::-ms-thumb {
          height: 16px;
          width: 16px;
          border-radius: 9999px;
          background: white;
          border: 2px solid #22c55e;
        }
      `}</style>
    </div>
  );
}
