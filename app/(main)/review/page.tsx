"use client";

import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowUpDown, ChevronDown } from "lucide-react";

import reviewImg from "@/public/review-img.png";
import spellingCheck from "@/public/grammar-check.png";
import alignmentCheck from "@/public/alignment-check.png";
import logoCheck from "@/public/logo-check.png";
import CheckComment from "@/components/CheckComment";

const Page = () => {
  const [isReady, setIsReady] = useState(false);
  const [isCheckedGrammar, setIsCheckedGrammar] = useState(false);
  const [isCheckedAlignment, setIsCheckedAlignment] = useState(false);
  const [isCheckedLogo, setIsCheckedLogo] = useState(false);

  const [comment, setComment] = useState<"grammar" | "alignment" | "logo" | "">(
    "",
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
                : comment === "logo"
                  ? logoCheck
                  : reviewImg
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
          <CheckComment
            category="grammar"
            check='Spelling "Participants"'
            targetComment="grammar"
            setComment={setComment}
            isChecked={isCheckedGrammar}
            setIsChecked={setIsCheckedGrammar}
          />

          <CheckComment
            category="design"
            check="Left hand alignment issue"
            targetComment="alignment"
            setComment={setComment}
            isChecked={isCheckedAlignment}
            setIsChecked={setIsCheckedAlignment}
          />

          <CheckComment
            category="design"
            check="Logo should be on the right - Brand guidelines"
            targetComment="logo"
            setComment={setComment}
            isChecked={isCheckedLogo}
            setIsChecked={setIsCheckedLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
