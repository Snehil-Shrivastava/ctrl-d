"use client";

import { Check } from "lucide-react";
import { useReviewContext, Status, CommentId } from "@/context/ReviewContext";

const CheckComment = ({
  category,
  check,
  targetComment,
  status,
}: {
  category: string;
  check: string;
  targetComment: CommentId;
  status: Status;
}) => {
  const { updateCommentStatus, activeImage, setActiveImage } =
    useReviewContext();

  const isChecked = status === "completed";
  const isIgnored = status === "ignored";

  // Track if this is the currently clicked/active comment
  const isActive = activeImage === targetComment;

  const handleStatusChange = (e: React.MouseEvent, newStatus: Status) => {
    e.stopPropagation(); // Prevents setting active image when checking/ignoring
    updateCommentStatus(targetComment, newStatus);

    // Clear image selection if checked/ignored so the UI doesn't look stuck
    if (activeImage === targetComment) {
      setActiveImage("");
    }
  };

  return (
    <div
      onClick={() => {
        if (!isIgnored) {
          setActiveImage(isActive ? "" : targetComment);
        }
      }}
      // Changed: Glow classes are now tied to `isActive` instead of `isChecked`
      className={`group flex flex-col gap-2 px-8 py-6 border border-[#F69435]/50 rounded-2xl max-w-2xl select-none transition-all hover:border-[#F69435]/30 
      ${isActive ? "bg-[#F69739]/20 backdrop-blur-md shadow-[0_0_8px_3px_rgba(246,148,53,0.3)]" : ""} 
      ${isIgnored ? "grayscale opacity-60" : "cursor-pointer"}`}
    >
      <div className="flex items-center justify-between gap-6 w-full">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#F69435] uppercase">
            {category}
          </span>
          <h3 className="text-base font-medium transition-colors duration-300 text-[#E5E5E5]">
            {check}
          </h3>
        </div>
        <div
          onClick={(e) => {
            if (!isIgnored)
              handleStatusChange(e, isChecked ? "review" : "completed");
          }}
          className={`shrink-0 w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-200 border-[#F69435] ${isIgnored ? "" : "cursor-pointer"}`}
        >
          {isChecked && (
            <Check className="text-[#F69435] w-7 h-7 stroke-[3px]" />
          )}
        </div>
      </div>
      <div className="text-neutral-500 text-sm flex justify-between items-center underline">
        <div
          onClick={(e) =>
            handleStatusChange(e, isIgnored ? "review" : "ignored")
          }
          className="cursor-pointer hover:text-white transition-colors"
        >
          {isIgnored ? "Restore" : "Ignore"}
        </div>
        <span>Comment</span>
      </div>
    </div>
  );
};

export default CheckComment;
