"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReviewProvider } from "@/context/ReviewContext";

const ReviewLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <ReviewProvider>
      <div>
        <div className="flex border-b border-b-[#ffffff4d]">
          <Link
            href={`/review`}
            className={`px-8 py-5 hover:bg-neutral-800 rounded-tl-xl ${pathname === "/review" ? "bg-neutral-800" : ""}`}
          >
            Under Review
          </Link>
          <Link
            href={`/review/all`}
            className={`px-8 py-5 hover:bg-neutral-800 ${pathname === "/review/all" ? "bg-neutral-800" : ""}`}
          >
            All
          </Link>
          <Link
            href={`/review/ignored`}
            className={`px-8 py-5 hover:bg-neutral-800 ${pathname === "/review/ignored" ? "bg-neutral-800" : ""}`}
          >
            Ignored
          </Link>
          <Link
            href={`/review/completed`}
            className={`px-8 py-5 hover:bg-neutral-800 ${pathname === "/review/completed" ? "bg-neutral-800" : ""}`}
          >
            Completed
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </ReviewProvider>
  );
};

export default ReviewLayout;
