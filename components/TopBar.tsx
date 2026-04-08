"use client";

import { useSession } from "next-auth/react";
import { ChangeEvent } from "react";
import { Search } from "lucide-react";
import addProject from "@/public/new-project.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface TopBarProps {
  onNewProject: () => void;
  search: string;
  onSearchChange: (value: string) => void;
}

const TopBar = ({ onNewProject, search, onSearchChange }: TopBarProps) => {
  const { data: session } = useSession();
  const name = session?.user?.name as string;

  const pathname = usePathname();
  const isIndividualProject = pathname.startsWith("/project/");

  return (
    <div className="flex items-center">
      <div className="flex gap-4 items-center flex-[0.35]">
        <div className="w-15 h-15 bg-amber-500 rounded-md"></div>
        <div className="flex flex-col gap-0.5">
          <span className="font-outfit font-light text-xl">Welcome,</span>
          <span className="font-cal-sans text-3xl">{name}</span>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative flex justify-center items-center">
          <Search className="absolute right-50 text-neutral-500" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onSearchChange(e.target.value)
            }
            className="bg-neutral-800 px-4 py-2.5 w-100 rounded-lg text-center outline-none"
          />
        </div>
      </div>
      <div className="flex-[0.35] flex items-center justify-center">
        {!isIndividualProject ? (
          <button
            onClick={onNewProject}
            className="flex gap-4 items-center justify-center cursor-pointer"
          >
            <Image src={addProject} alt="" />
            <span className="font-outfit font-semibold text-[26px]">
              New Project
            </span>
          </button>
        ) : (
          <span className="text-2xl">xVS Creations</span>
        )}
      </div>
    </div>
  );
};

export default TopBar;
