"use client";

export default function LoadingOverlay() {
  return (
    <div className="flex flex-col items-center justify-center p-10 h-112">
      {/* Visual Spinner */}
      <div className="w-12 h-12 border-4 border-[#F69435]/20 border-t-[#F69435] rounded-full animate-spin" />

      {/* Text */}
      {/* <h2 className="text-[#E5E5E5] text-xl font-medium tracking-wide animate-pulse">
        Preparing your review...
      </h2> */}
    </div>
  );
}
