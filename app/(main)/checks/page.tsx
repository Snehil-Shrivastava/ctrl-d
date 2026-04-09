import ChecksCard from "@/components/ChecksCard";
import { ArrowLeft, Play } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="p-10 flex flex-col gap-20">
      <div className="grid grid-cols-2 gap-x-15 gap-y-15">
        <div>
          <ChecksCard />
        </div>
        <div>
          <ChecksCard
            category="Text Proofreading"
            check="Check for all grammatical and spellings"
          />
        </div>
        <div>
          <ChecksCard
            category="clarity"
            check="Check all content visibility and readability "
          />
        </div>
        <div>
          <ChecksCard
            category="design"
            check="Check for brand guidelines regularities"
          />
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <Link href={`/upload`} className="flex gap-3">
          <ArrowLeft />
          <span>Back</span>
        </Link>
        <Link
          href={`/review`}
          className="flex gap-3 bg-[#F69435] px-5 py-3 rounded-xl"
        >
          <Play fill="#ffffff" />
          <span>Start</span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
