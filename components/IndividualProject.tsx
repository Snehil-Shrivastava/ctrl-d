// import ProjectCard from "./ProjectCard";
// import Image from "next/image";

// import add from "@/public/add.svg";

// const IndividualProject = () => {
//   return (
//     <>
//       <ProjectCard title="xVS Showreel" description="updated 4 days ago" />
//       <div className="p-4 bg-taupe-600/50 backdrop-blur-md w-65 flex flex-col items-center rounded-xl absolute right-20 top-1/2 -translate-y-1/2 py-10 gap-8">
//         <div>
//           <Image src={add} alt="" className="opacity-50" />
//         </div>
//         <span className="text-2xl font-semibold text-neutral-400">
//           Add Media
//         </span>
//       </div>
//       <div className="border-t border-t-neutral-400/50">
//         <div className="px-10 py-10 text-xs flex gap-10 justify-between w-150">
//           <div className="flex flex-col gap-2">
//             <span>Size: 4GB</span>
//             <span>Format: MKV</span>
//             <span>Updated: 4 days ago</span>
//           </div>
//           <div className="flex flex-col gap-2">
//             <span>Date Created: 24/07/2026</span>
//             <div>
//               <span>Shared with:</span>{" "}
//               <span className="text-amber-500">@sanjeev @vinay</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IndividualProject;

import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";
import add from "@/public/add.svg";
import IndividualProjectCard from "./IndividualProjectCard";

const IndividualProject = () => {
  return (
    <div className="relative">
      {/* <ProjectCard title="Showreel" description="updated 4 days ago" /> */}
      <IndividualProjectCard />

      {/* <Link
        href={"/upload"}
        className="p-4 bg-taupe-600/50 backdrop-blur-md w-65 flex flex-col items-center rounded-xl absolute right-20 top-15 py-10 gap-8 border border-white/5"
      >
        <div>
          <Image src={add} alt="" className="opacity-50" />
        </div>
        <span className="text-2xl font-semibold text-neutral-400">
          Add Media
        </span>
      </Link> */}

      <div className="border-t border-t-neutral-400/50">
        <div className="px-10 py-10 text-xs flex gap-10 justify-between w-150">
          <div className="flex flex-col gap-2">
            <span>Size: 4GB</span>
            <span>Format: MKV</span>
            <span>Updated: 4 days ago</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Date Created: 24/07/2026</span>
            <div>
              <span>Shared with:</span>{" "}
              <span className="text-amber-500">@sanjeev @vinay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
