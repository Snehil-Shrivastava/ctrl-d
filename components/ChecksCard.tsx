"use client"; // Required for interactivity in Next.js App Router

import React, { useState } from "react";
import { Check } from "lucide-react"; // Install with: npm install lucide-react

const ChecksCard = ({
  category = "design",
  check = "Check all alignment and margins",
}: {
  category?: string;
  check?: string;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      onClick={() => setIsChecked(!isChecked)}
      className="group flex items-center gap-6 p-8 border border-[#F69435]/50 rounded-2xl max-w-2xl cursor-pointer select-none transition-all hover:border-[#F69435]/30"
    >
      {/* The Checkbox Box */}
      <div
        className={`
          shrink-0 w-10 h-10 border-2 rounded-lg flex items-center justify-center transition-all duration-200
          ${isChecked ? " border-[#F69435]" : "border-[#F69435] bg-transparent"}
        `}
      >
        {/* The Checkmark Icon */}
        {isChecked && (
          <Check
            className="text-[#F69435] w-7 h-7 stroke-[3px]"
            // initial={{ scale: 0.5 }}
            // animate={{ scale: 1 }}
          />
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#F69435] uppercase">
          {category}
        </span>
        <h3
          className={`text-xl font-medium transition-colors duration-300 text-[#E5E5E5]`}
        >
          {check}
        </h3>
      </div>
    </div>
  );
};

export default ChecksCard;
