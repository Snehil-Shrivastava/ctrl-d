"use client";

import Image from "next/image";
import bgImg from "@/public/sand_bg.png";
import TopBar from "@/components/TopBar";
import { Project } from "@/types";
import { useState } from "react";
import NewProjectModal from "@/components/NewProjectModal";

const INITIAL_PROJECTS: Project[] = [
  {
    id: "a1",
    title: "xVS Review",
    updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [activeTab, setActiveTab] = useState<
    "home" | "notifications" | "settings"
  >("home");
  const [showModal, setShowModal] = useState(false);

  const handleCreateProject = (title: string) => {
    const newProject: Project = {
      id: Math.random().toString(36).slice(2),
      title,
      updatedAt: new Date(),
    };
    setProjects((prev) => [newProject, ...prev]);
  };
  return (
    <div className="h-full w-full">
      <div className="fixed inset-0 -z-1">
        <Image src={bgImg} alt="" fill />
      </div>
      <div className="flex items-center h-full">
        <div className="card w-4/5 max-w-360 mx-auto">
          <TopBar onNewProject={() => setShowModal(true)} />
        </div>
      </div>

      {showModal && (
        <NewProjectModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreateProject}
        />
      )}
    </div>
  );
}
