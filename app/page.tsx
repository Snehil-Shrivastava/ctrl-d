// "use client";

// import Image from "next/image";
// import bgImg from "@/public/sand_bg.png";
// import TopBar from "@/components/TopBar";
// import ProjectsContainer from "@/components/ProjectsContainer";
// import BottomNav from "@/components/BottomNav";

// export default function Home() {
//   return (
//     <div className="h-full w-full">
//       <div className="fixed inset-0 -z-1">
//         <Image src={bgImg} alt="" fill />
//       </div>
//       <div className="flex items-center h-full">
//         <div className="w-4/5 max-w-360 mx-auto flex flex-col gap-15 backdrop-blur-xl py-10 rounded-xl main-container-gradient px-15">
//           <TopBar />
//           <ProjectsContainer />
//           <BottomNav />
//         </div>
//       </div>
//     </div>
//   );
// }

// --------------------- TEST ---------------------------

"use client";

import Image from "next/image";
import { useState } from "react";
import bgImg from "@/public/sand_bg.png";
import TopBar from "@/components/TopBar";
import ProjectsContainer from "@/components/ProjectsContainer";
import BottomNav from "@/components/BottomNav";
import NewProjectModal from "@/components/NewProjectModal";
import { Project } from "@/components/ProjectsContainer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");

  const handleCreateProject = (name: string) => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date(),
    };
    setProjects((prev) => [...prev, newProject]);
  };

  return (
    <div className="h-full w-full">
      <div className="fixed inset-0 -z-1">
        <Image src={bgImg} alt="" fill />
      </div>
      <div className="flex items-center h-full">
        <div className="w-4/5 max-w-360 mx-auto flex flex-col gap-15 backdrop-blur-xl py-10 rounded-xl main-container-gradient px-15">
          <TopBar
            onNewProject={() => setModalOpen(true)}
            search={search}
            onSearchChange={setSearch}
          />
          <ProjectsContainer projects={projects} search={search} />
          <BottomNav />
        </div>
      </div>

      <NewProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreateProject={handleCreateProject}
      />
    </div>
  );
}
