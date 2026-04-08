"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, FolderPlus } from "lucide-react";

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateProject: (name: string) => void;
}

const NewProjectModal = ({
  isOpen,
  onClose,
  onCreateProject,
}: NewProjectModalProps) => {
  const [projectName, setProjectName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setProjectName("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const handleSubmit = () => {
    const trimmed = projectName.trim();
    if (!trimmed) return;
    onCreateProject(trimmed);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl px-10 py-9 flex flex-col gap-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(40,35,28,0.97) 0%, rgba(28,24,18,0.99) 100%)",
          border: "1px solid rgba(243,237,222,0.12)",
          boxShadow: "0 32px 64px rgba(0,0,0,0.6)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(243,237,222,0.08)" }}
          >
            <FolderPlus size={20} style={{ color: "#F3EDDE" }} />
          </div>
          <div>
            <h2 className="font-cal-sans text-2xl text-[#F3EDDE]">
              New Project
            </h2>
            <p className="text-neutral-400 text-sm font-outfit">
              Give your project a name to get started
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="project-name"
            className="text-sm text-neutral-300 font-outfit"
          >
            Project Name
          </label>
          <input
            ref={inputRef}
            id="project-name"
            type="text"
            placeholder="e.g. My Awesome App"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="rounded-lg px-4 py-3 outline-none text-[#F3EDDE] placeholder-neutral-500 text-base font-outfit"
            style={{
              background: "rgba(243,237,222,0.07)",
              border: "1px solid rgba(243,237,222,0.15)",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "rgba(243,237,222,0.4)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(243,237,222,0.15)")
            }
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-outfit text-neutral-300 hover:text-[#F3EDDE] transition-colors cursor-pointer"
            style={{ background: "rgba(243,237,222,0.06)" }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!projectName.trim()}
            className="px-6 py-2.5 rounded-lg text-sm font-outfit font-semibold transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: projectName.trim()
                ? "rgba(243,237,222,0.92)"
                : "rgba(243,237,222,0.15)",
              color: projectName.trim() ? "#1a1710" : "#F3EDDE",
            }}
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProjectModal;
