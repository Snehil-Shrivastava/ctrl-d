"use client";

import LoadingOverlay from "@/components/LoadingOverlay";
import Image, { StaticImageData } from "next/image";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import reviewImg from "@/public/review-img.png";
import spellingCheck from "@/public/grammar-check.png";
import alignmentCheck from "@/public/alignment-check.png";
import logoCheck from "@/public/logo-check.png";
import CheckComment from "@/components/CheckComment";
import { useReviewContext, Status, CommentId } from "@/context/ReviewContext";

const imageMap: Record<CommentId, StaticImageData> = {
  grammar: spellingCheck,
  alignment: alignmentCheck,
  logo: logoCheck,
  "": reviewImg,
};

const ReviewTabContent = ({ currentTab }: { currentTab: Status | "all" }) => {
  const { isReady, comments, activeImage } = useReviewContext();

  if (!isReady) {
    return <LoadingOverlay />;
  }

  // If the tab is "all", show everything. Otherwise, filter by the specific status.
  const filteredComments =
    currentTab === "all"
      ? comments
      : comments.filter((c) => c.status === currentTab);

  const displayImage = imageMap[activeImage] || reviewImg;

  return (
    <div className="flex">
      <div className="flex-[0.65] relative h-112 m-4">
        <Image src={displayImage} alt="Review Image" fill />
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
          {filteredComments.length === 0 && (
            <div className="text-neutral-500 text-sm text-center">
              No {currentTab} comments
            </div>
          )}
          {filteredComments.map((c) => (
            <CheckComment
              key={c.id}
              category={c.category}
              check={c.check}
              targetComment={c.id}
              status={c.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewTabContent;
