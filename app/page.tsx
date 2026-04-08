"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (err) {
        console.error("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // const handleCreateProject = (name: string) => {
  //   const newProject: Project = {
  //     id: crypto.randomUUID(),
  //     name,
  //     createdAt: new Date(),
  //   };
  //   setProjects((prev) => [...prev, newProject]);
  // };

  const handleCreateProject = async (name: string) => {
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        const newProject = await res.json();
        // Add to state so the UI updates immediately
        setProjects((prev) => [newProject, ...prev]);
      }
    } catch (err) {
      alert("Failed to create project");
    }
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
