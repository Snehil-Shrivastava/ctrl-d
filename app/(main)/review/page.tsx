"use client";

import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowUpDown, ChevronDown } from "lucide-react";
import CheckComment from "@/components/CheckComment";

import spellingCheck from "@/public/grammar-check.png";
import alignmentCheck from "@/public/alignment-check.png";
import logoCheck from "@/public/logo-check.png";

const Page = () => {
  const [isReady, setIsReady] = useState(false);

  const [comment, setComment] = useState<"grammar" | "alignment" | "logo">(
    "grammar",
  );

  useEffect(() => {
    // Start the 2-second timer as soon as the page "mounts"
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer if user leaves
  }, []);

  // 1. Show the loading screen while waiting
  if (!isReady) {
    return <LoadingOverlay />;
  }
  return (
    <div className="flex">
      <div className="flex-[0.65] relative h-112 m-4">
        <Image
          src={
            comment === "grammar"
              ? spellingCheck
              : comment === "alignment"
                ? alignmentCheck
                : logoCheck
          }
          alt=""
          fill
        />
      </div>
      <div className="flex-[0.35] ml-5 border-l border-l-[#ffffff4d] px-4 py-3">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            <span className="text-sm">All comments</span>
            <ChevronDown size={15} />
          </div>
          <div className="flex items-center gap-2">
            <ArrowUpDown size={15} />
            <span className="text-sm font-extralight">Sort by</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 pt-10">
          <div
            className="group flex items-center gap-6 px-8 py-6 border border-[#F69435]/50 rounded-2xl max-w-2xl cursor-pointer select-none transition-all hover:border-[#F69435]/30"
            onClick={() => setComment("grammar")}
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#F69435] uppercase">
                grammar
              </span>
              <h3
                className={`text-base font-medium transition-colors duration-300 text-[#E5E5E5]`}
              >
                Spelling &quot;Participants&quot;
              </h3>
            </div>
          </div>
          <div
            className="group flex items-center gap-6 px-8 py-6 border border-[#F69435]/50 rounded-2xl max-w-2xl cursor-pointer select-none transition-all hover:border-[#F69435]/30"
            onClick={() => setComment("alignment")}
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#F69435] uppercase">
                design
              </span>
              <h3
                className={`text-base font-medium transition-colors duration-300 text-[#E5E5E5]`}
              >
                Left hand alignment issue
              </h3>
            </div>
          </div>
          <div
            className="group flex items-center gap-6 px-8 py-6 border border-[#F69435]/50 rounded-2xl max-w-2xl cursor-pointer select-none transition-all hover:border-[#F69435]/30"
            onClick={() => setComment("logo")}
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#F69435] uppercase">
                design
              </span>
              <h3
                className={`text-base font-medium transition-colors duration-300 text-[#E5E5E5]`}
              >
                Logo should be on the right - Brand guidelines
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
