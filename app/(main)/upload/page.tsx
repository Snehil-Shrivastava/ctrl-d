import { Image as LucideImg, Upload } from "lucide-react";

import Image from "next/image";

import upload from "@/public/upload.svg";
import Link from "next/link";

const Page = () => {
  return (
    <div className="p-10 flex flex-col justify-center gap-10">
      <div
        className="bg-[#F69739]/20 backdrop-blur-md flex flex-col items-center justify-center py-15 gap-5 rounded-2xl border-dotted border-neutral-50"
        style={{
          border: "1px dotted #fff",
        }}
      >
        <div>
          <Image src={upload} alt="" />
        </div>
        <span>Drag or upload your design</span>
      </div>
      <div className="flex justify-center gap-15">
        <Link
          href={`/checks`}
          className="flex items-center gap-5 py-3 px-5 rounded-xl"
          style={{
            border: "1px solid #ffffff4d",
          }}
        >
          <Upload />
          <span>Upload your design</span>
        </Link>
        <Link
          href={`/project/1`}
          className="flex items-center gap-5 py-3 px-5 rounded-xl bg-amber-500"
        >
          <LucideImg />
          <span>Select from gallery</span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
