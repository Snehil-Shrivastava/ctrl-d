// import { ArrowUpDown, ChevronDown } from "lucide-react";

// const ProjectsContainer = () => {
//   return (
//     <div className="backdrop-blur-md py-2.5 projects-container-gradient rounded-xl">
//       {/* Toolbar */}
//       <div className="flex justify-between pb-2 border-b border-b-neutral-400/50 px-10">
//         <div className="flex items-center">
//           <button
//             title="Grid view"
//             className="text-white w-full cursor-pointer"
//           >
//             {/* <Image src={gridView} alt="" /> */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="22"
//               height="22"
//               viewBox="0 0 22 22"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_202_102)">
//                 <path
//                   d="M5.26685 0H0.877809C0.393258 0 0 0.393258 0 0.877809V5.26685C0 5.7514 0.393258 6.14466 0.877809 6.14466H5.26685C5.7514 6.14466 6.14466 5.7514 6.14466 5.26685V0.877809C6.14466 0.393258 5.7514 0 5.26685 0Z"
//                   fill="#F3EDDE"
//                 />
//                 <path
//                   d="M5.26685 7.46136H0.877809C0.393258 7.46136 0 7.85462 0 8.33917V12.7282C0 13.2128 0.393258 13.606 0.877809 13.606H5.26685C5.7514 13.606 6.14466 13.2128 6.14466 12.7282V8.33917C6.14466 7.85462 5.7514 7.46136 5.26685 7.46136Z"
//                   fill="#F3EDDE"
//                 />
//                 <path
//                   d="M13.6061 12.7282V8.33917C13.6061 7.85462 13.2128 7.46136 12.7283 7.46136H8.33923C7.85468 7.46136 7.46143 7.85462 7.46143 8.33917V12.7282C7.46143 13.2128 7.85468 13.606 8.33923 13.606H12.7283C13.2128 13.606 13.6061 13.2128 13.6061 12.7282Z"
//                   fill="#F3EDDE"
//                 />
//                 <path
//                   d="M13.6061 5.26685V0.877809C13.6061 0.393258 13.2128 0 12.7283 0H8.33923C7.85468 0 7.46143 0.393258 7.46143 0.877809V5.26685C7.46143 5.7514 7.85468 6.14466 8.33923 6.14466H12.7283C13.2128 6.14466 13.6061 5.7514 13.6061 5.26685Z"
//                   fill="#F3EDDE"
//                 />
//                 <path
//                   d="M20.1897 0H15.8007C15.3161 0 14.9229 0.393258 14.9229 0.877809V5.26685C14.9229 5.7514 15.3161 6.14466 15.8007 6.14466H20.1897C20.6743 6.14466 21.0675 5.7514 21.0675 5.26685V0.877809C21.0675 0.393258 20.6743 0 20.1897 0Z"
//                   fill="#F3EDDE"
//                 />
//                 <path
//                   d="M15.8007 13.606H20.1897C20.6743 13.606 21.0675 13.2128 21.0675 12.7282V8.33917C21.0675 7.85462 20.6743 7.46136 20.1897 7.46136H15.8007C15.3161 7.46136 14.9229 7.85462 14.9229 8.33917V12.7282C14.9229 13.2128 15.3161 13.606 15.8007 13.606Z"
//                   fill="#F3EDDE"
//                 />
//                 <path
//                   d="M15.8007 21.0674H20.1897C20.6743 21.0674 21.0675 20.6741 21.0675 20.1896V15.8005C21.0675 15.316 20.6743 14.9227 20.1897 14.9227H15.8007C15.3161 14.9227 14.9229 15.316 14.9229 15.8005V20.1896C14.9229 20.6741 15.3161 21.0674 15.8007 21.0674Z"
//                   fill="#F3EDDE"
//                 />
//                 <path
//                   d="M0 15.8005V20.1896C0 20.6741 0.393258 21.0674 0.877809 21.0674H5.26685C5.7514 21.0674 6.14466 20.6741 6.14466 20.1896V15.8005C6.14466 15.316 5.7514 14.9227 5.26685 14.9227H0.877809C0.393258 14.9227 0 15.316 0 15.8005Z"
//                   fill="#F3EDDE"
//                 />
//                 <path
//                   d="M7.46143 15.8005V20.1896C7.46143 20.6741 7.85468 21.0674 8.33923 21.0674H12.7283C13.2128 21.0674 13.6061 20.6741 13.6061 20.1896V15.8005C13.6061 15.316 13.2128 14.9227 12.7283 14.9227H8.33923C7.85468 14.9227 7.46143 15.316 7.46143 15.8005Z"
//                   fill="#F3EDDE"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_202_102">
//                   <rect width="21.0674" height="21.0674" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </button>
//           <div className="w-px h-4.5 bg-white mx-4" />
//           <button
//             title="List View"
//             className="text-white w-full cursor-pointer"
//           >
//             {/* <Image src={listView} alt="" /> */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="22"
//               height="22"
//               viewBox="0 0 22 22"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_202_112)">
//                 <path
//                   d="M19.128 15.2053H7.22821C6.15888 15.2053 5.28882 16.0753 5.28882 17.1447C5.28882 18.214 6.15888 19.0841 7.22821 19.0841H19.128C20.1974 19.0841 21.0674 18.214 21.0674 17.1447C21.0674 16.0753 20.1974 15.2053 19.128 15.2053Z"
//                   fill="#F3EDDE"
//                   fillOpacity="0.4"
//                 />
//                 <path
//                   d="M19.128 8.59424H7.22821C6.15888 8.59424 5.28882 9.4643 5.28882 10.5337C5.28882 11.6031 6.15888 12.4731 7.22821 12.4731H19.128C20.1974 12.4731 21.0674 11.6031 21.0674 10.5337C21.0674 9.4643 20.1974 8.59424 19.128 8.59424Z"
//                   fill="#F3EDDE"
//                   fillOpacity="0.4"
//                 />
//                 <path
//                   d="M7.22821 5.86211H19.128C20.1974 5.86211 21.0674 4.99205 21.0674 3.92267C21.0674 2.85329 20.1974 1.98328 19.128 1.98328H7.22821C6.15888 1.98328 5.28882 2.85329 5.28882 3.92267C5.28882 4.99205 6.15888 5.86211 7.22821 5.86211Z"
//                   fill="#F3EDDE"
//                   fillOpacity="0.4"
//                 />
//                 <path
//                   d="M1.93944 1.98328C0.870059 1.98328 0 2.85329 0 3.92267C0 4.99205 0.870059 5.86211 1.93944 5.86211C3.00881 5.86211 3.87879 4.99205 3.87879 3.92267C3.87879 2.85329 3.00881 1.98328 1.93944 1.98328Z"
//                   fill="#F3EDDE"
//                   fillOpacity="0.4"
//                 />
//                 <path
//                   d="M1.93944 8.59424C0.870059 8.59424 0 9.4643 0 10.5337C0 11.6031 0.870059 12.4731 1.93944 12.4731C3.00881 12.4731 3.87879 11.6031 3.87879 10.5337C3.87879 9.4643 3.00881 8.59424 1.93944 8.59424Z"
//                   fill="#F3EDDE"
//                   fillOpacity="0.4"
//                 />
//                 <path
//                   d="M1.93944 15.2053C0.870059 15.2053 0 16.0753 0 17.1447C0 18.214 0.870059 19.0841 1.93944 19.0841C3.00881 19.0841 3.87879 18.214 3.87879 17.1447C3.87879 16.0753 3.00881 15.2053 1.93944 15.2053Z"
//                   fill="#F3EDDE"
//                   fillOpacity="0.4"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_202_112">
//                   <rect width="21.0674" height="21.0674" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </button>
//         </div>
//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <ArrowUpDown size={20} />
//             <span className="text-sm">Sort by</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-base font-semibold">Name</span>
//             <ChevronDown size={15} />
//           </div>
//         </div>
//       </div>

//       {/* Projects Area */}
//       <div className="h-90"></div>
//     </div>
//   );
// };

// export default ProjectsContainer;

// ------------------------------- TEST ---------------------------------

import { ArrowUpDown, ChevronDown, Folder } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export interface Project {
  id: number;
  name: string;
  createdAt: string | Date;
}

type SortKey = "name" | "date";
type ViewMode = "grid" | "list";

interface ProjectsContainerProps {
  projects: Project[];
  search: string;
}

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
  { label: "Name", value: "name" },
  { label: "Date Created", value: "date" },
];

const formatDate = (dateInput: string | Date) => {
  const date = new Date(dateInput);

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};

const ProjectsContainer = ({ projects, search }: ProjectsContainerProps) => {
  const [view, setView] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortKey>("name");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close sort dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    // return b.createdAt.getTime() - a.createdAt.getTime();
    // return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA; // Newest first
  });

  const currentSortLabel =
    SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? "Name";

  return (
    <div className="backdrop-blur-md py-2.5 projects-container-gradient rounded-xl">
      {/* Toolbar */}
      <div className="flex justify-between pb-2 border-b border-b-neutral-400/50 px-10">
        {/* View toggle */}
        <div className="flex items-center">
          <button
            title="Grid view"
            onClick={() => setView("grid")}
            className="cursor-pointer transition-opacity"
            style={{ opacity: view === "grid" ? 1 : 0.4 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clipPath="url(#clip0_202_102)">
                <path
                  d="M5.26685 0H0.877809C0.393258 0 0 0.393258 0 0.877809V5.26685C0 5.7514 0.393258 6.14466 0.877809 6.14466H5.26685C5.7514 6.14466 6.14466 5.7514 6.14466 5.26685V0.877809C6.14466 0.393258 5.7514 0 5.26685 0Z"
                  fill="#F3EDDE"
                />
                <path
                  d="M5.26685 7.46136H0.877809C0.393258 7.46136 0 7.85462 0 8.33917V12.7282C0 13.2128 0.393258 13.606 0.877809 13.606H5.26685C5.7514 13.606 6.14466 13.2128 6.14466 12.7282V8.33917C6.14466 7.85462 5.7514 7.46136 5.26685 7.46136Z"
                  fill="#F3EDDE"
                />
                <path
                  d="M13.6061 12.7282V8.33917C13.6061 7.85462 13.2128 7.46136 12.7283 7.46136H8.33923C7.85468 7.46136 7.46143 7.85462 7.46143 8.33917V12.7282C7.46143 13.2128 7.85468 13.606 8.33923 13.606H12.7283C13.2128 13.606 13.6061 13.2128 13.6061 12.7282Z"
                  fill="#F3EDDE"
                />
                <path
                  d="M13.6061 5.26685V0.877809C13.6061 0.393258 13.2128 0 12.7283 0H8.33923C7.85468 0 7.46143 0.393258 7.46143 0.877809V5.26685C7.46143 5.7514 7.85468 6.14466 8.33923 6.14466H12.7283C13.2128 6.14466 13.6061 5.7514 13.6061 5.26685Z"
                  fill="#F3EDDE"
                />
                <path
                  d="M20.1897 0H15.8007C15.3161 0 14.9229 0.393258 14.9229 0.877809V5.26685C14.9229 5.7514 15.3161 6.14466 15.8007 6.14466H20.1897C20.6743 6.14466 21.0675 5.7514 21.0675 5.26685V0.877809C21.0675 0.393258 20.6743 0 20.1897 0Z"
                  fill="#F3EDDE"
                />
                <path
                  d="M15.8007 13.606H20.1897C20.6743 13.606 21.0675 13.2128 21.0675 12.7282V8.33917C21.0675 7.85462 20.6743 7.46136 20.1897 7.46136H15.8007C15.3161 7.46136 14.9229 7.85462 14.9229 8.33917V12.7282C14.9229 13.2128 15.3161 13.606 15.8007 13.606Z"
                  fill="#F3EDDE"
                />
                <path
                  d="M15.8007 21.0674H20.1897C20.6743 21.0674 21.0675 20.6741 21.0675 20.1896V15.8005C21.0675 15.316 20.6743 14.9227 20.1897 14.9227H15.8007C15.3161 14.9227 14.9229 15.316 14.9229 15.8005V20.1896C14.9229 20.6741 15.3161 21.0674 15.8007 21.0674Z"
                  fill="#F3EDDE"
                />
                <path
                  d="M0 15.8005V20.1896C0 20.6741 0.393258 21.0674 0.877809 21.0674H5.26685C5.7514 21.0674 6.14466 20.6741 6.14466 20.1896V15.8005C6.14466 15.316 5.7514 14.9227 5.26685 14.9227H0.877809C0.393258 14.9227 0 15.316 0 15.8005Z"
                  fill="#F3EDDE"
                />
                <path
                  d="M7.46143 15.8005V20.1896C7.46143 20.6741 7.85468 21.0674 8.33923 21.0674H12.7283C13.2128 21.0674 13.6061 20.6741 13.6061 20.1896V15.8005C13.6061 15.316 13.2128 14.9227 12.7283 14.9227H8.33923C7.85468 14.9227 7.46143 15.316 7.46143 15.8005Z"
                  fill="#F3EDDE"
                />
              </g>
              <defs>
                <clipPath id="clip0_202_102">
                  <rect width="21.0674" height="21.0674" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className="w-px h-4.5 bg-white mx-4" />
          <button
            title="List View"
            onClick={() => setView("list")}
            className="cursor-pointer transition-opacity"
            style={{ opacity: view === "list" ? 1 : 0.4 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clipPath="url(#clip0_202_112)">
                <path
                  d="M19.128 15.2053H7.22821C6.15888 15.2053 5.28882 16.0753 5.28882 17.1447C5.28882 18.214 6.15888 19.0841 7.22821 19.0841H19.128C20.1974 19.0841 21.0674 18.214 21.0674 17.1447C21.0674 16.0753 20.1974 15.2053 19.128 15.2053Z"
                  fill="#F3EDDE"
                  //   fillOpacity="0.4"
                />
                <path
                  d="M19.128 8.59424H7.22821C6.15888 8.59424 5.28882 9.4643 5.28882 10.5337C5.28882 11.6031 6.15888 12.4731 7.22821 12.4731H19.128C20.1974 12.4731 21.0674 11.6031 21.0674 10.5337C21.0674 9.4643 20.1974 8.59424 19.128 8.59424Z"
                  fill="#F3EDDE"
                  //   fillOpacity="0.4"
                />
                <path
                  d="M7.22821 5.86211H19.128C20.1974 5.86211 21.0674 4.99205 21.0674 3.92267C21.0674 2.85329 20.1974 1.98328 19.128 1.98328H7.22821C6.15888 1.98328 5.28882 2.85329 5.28882 3.92267C5.28882 4.99205 6.15888 5.86211 7.22821 5.86211Z"
                  fill="#F3EDDE"
                  //   fillOpacity="0.4"
                />
                <path
                  d="M1.93944 1.98328C0.870059 1.98328 0 2.85329 0 3.92267C0 4.99205 0.870059 5.86211 1.93944 5.86211C3.00881 5.86211 3.87879 4.99205 3.87879 3.92267C3.87879 2.85329 3.00881 1.98328 1.93944 1.98328Z"
                  fill="#F3EDDE"
                  //   fillOpacity="0.4"
                />
                <path
                  d="M1.93944 8.59424C0.870059 8.59424 0 9.4643 0 10.5337C0 11.6031 0.870059 12.4731 1.93944 12.4731C3.00881 12.4731 3.87879 11.6031 3.87879 10.5337C3.87879 9.4643 3.00881 8.59424 1.93944 8.59424Z"
                  fill="#F3EDDE"
                  //   fillOpacity="0.4"
                />
                <path
                  d="M1.93944 15.2053C0.870059 15.2053 0 16.0753 0 17.1447C0 18.214 0.870059 19.0841 1.93944 19.0841C3.00881 19.0841 3.87879 18.214 3.87879 17.1447C3.87879 16.0753 3.00881 15.2053 1.93944 15.2053Z"
                  fill="#F3EDDE"
                  //   fillOpacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="clip0_202_112">
                  <rect width="21.0674" height="21.0674" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-neutral-300">
            <ArrowUpDown size={20} />
            <span className="text-sm">Sort by</span>
          </div>
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-base font-semibold">
                {currentSortLabel}
              </span>
              <ChevronDown
                size={15}
                style={{
                  transform: sortOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>
            {sortOpen && (
              <div
                className="absolute right-0 top-8 rounded-lg overflow-hidden z-20 min-w-36"
                style={{
                  background: "rgba(30,26,20,0.97)",
                  border: "1px solid rgba(243,237,222,0.12)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setSortOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm font-outfit transition-colors cursor-pointer"
                    style={{
                      color:
                        sortBy === opt.value
                          ? "#F3EDDE"
                          : "rgba(243,237,222,0.55)",
                      background:
                        sortBy === opt.value
                          ? "rgba(243,237,222,0.08)"
                          : "transparent",
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Projects Area */}
      <div className="min-h-112.5 px-10 py-6">
        {sorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-60 gap-3 text-neutral-500">
            <Folder size={40} strokeWidth={1.2} />
            <p className="font-outfit text-base">
              {search
                ? "No projects match your search"
                : "No projects yet — create one to get started"}
            </p>
          </div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {sorted.map((project) => (
              <Link
                href={`/project/${project.id}`}
                key={project.id}
                className="flex flex-col gap-2 rounded-xl p-4 cursor-pointer transition-all group"
                style={{
                  background: "rgba(243,237,222,0.05)",
                  border: "1px solid rgba(243,237,222,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(243,237,222,0.09)";
                  e.currentTarget.style.borderColor = "rgba(243,237,222,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(243,237,222,0.05)";
                  e.currentTarget.style.borderColor = "rgba(243,237,222,0.08)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(243,237,222,0.1)" }}
                >
                  <Folder
                    size={20}
                    style={{ color: "#F3EDDE" }}
                    strokeWidth={1.5}
                  />
                </div>
                <span className="font-cal-sans text-sm text-[#F3EDDE] truncate">
                  {project.name}
                </span>
                <span className="text-xs text-neutral-500 font-outfit">
                  {/* {project.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} */}
                  {/* {project.createdAt.toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} */}
                  {formatDate(project.createdAt)}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {sorted.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition-all"
                style={{ background: "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(243,237,222,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Folder
                  size={18}
                  style={{ color: "#F3EDDE", opacity: 0.7 }}
                  strokeWidth={1.5}
                />
                <span className="font-cal-sans text-base text-[#F3EDDE] flex-1 truncate">
                  {project.name}
                </span>
                <span className="text-xs text-neutral-500 font-outfit">
                  {/* {project.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} */}
                  {/* {project.createdAt.toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} */}
                  {formatDate(project.createdAt)}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsContainer;
