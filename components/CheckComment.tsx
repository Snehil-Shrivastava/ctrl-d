"use client";

import { Check } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

const CheckComment = ({
  category = "grammar",
  check = 'Spelling "Participants"',
  targetComment,
  setComment,
  isChecked,
  setIsChecked,
}: {
  category?: string;
  check?: string;
  targetComment: "" | "grammar" | "alignment" | "logo";
  setComment: Dispatch<SetStateAction<"" | "grammar" | "alignment" | "logo">>;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ignore, setIgnore] = useState(false);
  return (
    <div
      className={`group flex flex-col gap-2 px-8 py-6 border border-[#F69435]/50 rounded-2xl max-w-2xl select-none transition-all hover:border-[#F69435]/30 ${isChecked ? "bg-[#F69739]/20 backdrop-blur-md shadow-[0_0_8px_3px_rgba(246,148,53,0.3)]" : ignore ? "grayscale" : ""}`}
    >
      <div className="flex items-center justify-between gap-6 w-full">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#F69435] uppercase">
            {category}
          </span>
          <h3
            className={`text-base font-medium transition-colors duration-300 text-[#E5E5E5]`}
          >
            {check}
          </h3>
        </div>
        <div
          onClick={() => {
            if (!ignore) {
              if (isChecked) {
                setComment("");
              } else {
                setComment(targetComment);
              }
              setIsChecked(!isChecked);
            }
          }}
          className={`
            shrink-0 w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-200
            ${isChecked ? " border-[#F69435]" : "border-[#F69435]"} ${ignore ? "" : "cursor-pointer"}
          `}
        >
          {isChecked && (
            <Check className="text-[#F69435] w-7 h-7 stroke-[3px]" />
          )}
        </div>
      </div>
      <div className="text-neutral-500 text-sm flex justify-between items-center underline">
        <div onClick={() => setIgnore(!ignore)} className="cursor-pointer">
          Ignore
        </div>
        <span>Comment</span>
      </div>
    </div>
  );
};

export default CheckComment;
