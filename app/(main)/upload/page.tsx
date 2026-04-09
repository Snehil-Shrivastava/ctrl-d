"use client";

import { Image as LucideImg, Upload } from "lucide-react";

import Image from "next/image";

import upload from "@/public/upload.svg";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";

const Page = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 1. Trigger the hidden input
  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  // 2. Handle the file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a local URL for the selected image to preview it
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };
  return (
    <div className="p-10 flex flex-col justify-center gap-10">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      {/* <div
        className="bg-[#F69739]/20 backdrop-blur-md flex flex-col items-center justify-center py-15 gap-5 rounded-2xl border-dotted border-neutral-50"
        style={{
          border: "1px dotted #fff",
        }}
      >
        <div>
          <Image src={upload} alt="" />
        </div>
        <span>Drag or upload your design</span>
      </div> */}

      <div className="bg-[#F69739]/20 backdrop-blur-md flex flex-col items-center justify-center py-10 gap-5 rounded-2xl border border-dotted border-white min-h-75 overflow-hidden">
        {preview ? (
          /* Show the Uploaded Image */
          <div className="relative w-full h-full flex flex-col items-center">
            <div className="w-150 h-80 relative">
              <Image
                src={preview}
                alt="Preview"
                className="object-cover rounded-lg"
                //   width={1200}
                //   height={400}
                fill
              />
            </div>
            {/* <button
              onClick={() => setPreview(null)}
              className="mt-4 text-xs text-white/50 underline"
            >
              Remove and try again
            </button> */}
          </div>
        ) : (
          /* Show the Placeholder */
          <>
            <div>
              <Image src={upload} alt="Upload" />
            </div>
            <span>Drag or upload your design</span>
          </>
        )}
      </div>

      <div className="flex justify-center gap-15 relative">
        {/* <Link
          href={`/checks`}
          className="flex items-center gap-5 py-3 px-5 rounded-xl"
          style={{
            border: "1px solid #ffffff4d",
          }}
        >
          <Upload />
          <span>Upload your design</span>
        </Link> */}
        <div
          onClick={handleTriggerUpload}
          className="flex items-center gap-5 py-3 px-5 rounded-xl border border-white/30 cursor-pointer hover:bg-white/5 transition-colors"
        >
          <Upload />
          <span>Upload your design</span>
        </div>
        <Link
          href={`/project/1`}
          className="flex items-center gap-5 py-3 px-5 rounded-xl bg-amber-500"
        >
          <LucideImg />
          <span>Select from gallery</span>
        </Link>
        {preview ? (
          <Link
            href={`/checks`}
            className="flex items-center bg-amber-500 px-6 py-2 rounded-xl absolute right-0 top-1/2 -translate-y-1/2"
          >
            <span className="text-lg font-semibold">Next</span>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Page;
