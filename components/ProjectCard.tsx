// import Image from "next/image";
// import share from "@/public/share.svg";
// import thumbnail from "@/public/thumbnail.png";

// const ProjectCard = ({
//   title = "xVS Reviews",
//   description = "updated 4 days ago",
// }: {
//   title?: string;
//   description?: string;
// }) => {
//   return (
//     <div className="py-10 px-10 min-h-112">
//       <div className="w-60">
//         <div
//           className="rounded-2xl w-auto flex flex-col gap-3 justify-center items-center px-2 py-2 cursor-pointer"
//           style={{
//             background: "rgba(243,237,222,0.05)",
//             border: "1px solid rgba(243,237,222,0.08)",
//           }}
//         >
//           <div>
//             <Image src={thumbnail} alt="" />
//           </div>
//           <div className="flex gap-10 justify-between items-center w-full">
//             <div className="flex flex-col px-1.5">
//               <span className="font-bold">{title}</span>
//               <span className="text-xs">{description}</span>
//             </div>
//             <div className="pr-1.5">
//               <Image src={share} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import Image from "next/image";
import Link from "next/link"; // Import Link
import share from "@/public/share.svg";
import thumbnail from "@/public/thumbnail.png";

const ProjectCard = ({
  title = "xVS Reviews",
  description = "updated 4 days ago",
}: {
  title?: string;
  description?: string;
}) => {
  return (
    // Wrap in Link to change the URL
    <div>
      <div className="min-h-112 grid grid-cols-5">
        <Link href={`/project/1`} className="w-60">
          <div
            className="rounded-2xl w-auto flex flex-col gap-3 justify-center items-center px-2 py-2 cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              background: "rgba(243,237,222,0.05)",
              border: "1px solid rgba(243,237,222,0.08)",
            }}
          >
            <div>
              <Image src={thumbnail} alt="" />
            </div>
            <div className="flex gap-10 justify-between items-center w-full">
              <div className="flex flex-col px-1.5">
                <span className="font-bold whitespace-nowrap">{title}</span>
                <span className="text-xs opacity-60">{description}</span>
              </div>
              <div className="pr-1.5">
                <Image src={share} alt="" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
