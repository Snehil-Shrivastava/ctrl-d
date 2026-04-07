"use client";

import Image from "next/image";
import bgImg from "@/public/sand_bg.png";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="fixed inset-0 -z-1">
        <Image src={bgImg} alt="" fill />
      </div>
      <div className="flex items-center h-full">
        <div className="w-4/5 max-w-360 mx-auto flex flex-col gap-15 backdrop-blur-xl py-10 rounded-xl container-gradient px-15">
          <TopBar />
        </div>
      </div>
    </div>
  );
}
