"use client";

import { useState } from "react";
import { Project, SortBy, ViewMode } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectListItem from "./ProjectListItem";

interface ProjectsContainerProps {
  projects: Project[];
}

export default function ProjectsContainer({
  projects,
}: ProjectsContainerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortBy>("name");
  const [sortOpen, setSortOpen] = useState(false);

  const sorted = [...projects].sort((a, b) => {
    if (sortBy === "name") return a.title.localeCompare(b.title);
    if (sortBy === "date") return b.updatedAt.getTime() - a.updatedAt.getTime();
    return b.updatedAt.getTime() - a.updatedAt.getTime();
  });

  const sortLabel =
    sortBy === "name" ? "Name" : sortBy === "date" ? "Date" : "Recent";

  const handleShare = (id: string) => {
    alert(`Sharing project ${id}`);
  };

  return (
    <div className="bg-neutral-800/70 border border-gray-500/50 rounded-2xl overflow-hidden flex-1 flex flex-col fade-up-1 backdrop-blur-md">
      {/* Toolbar */}
      <div className="toolbar">
        <div className="view-toggle">
          <button
            className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
            title="Grid view"
          >
            <svg viewBox="0 0 18 18" fill="none">
              <rect
                x="1"
                y="1"
                width="6"
                height="6"
                rx="1.5"
                fill="currentColor"
              />
              <rect
                x="11"
                y="1"
                width="6"
                height="6"
                rx="1.5"
                fill="currentColor"
              />
              <rect
                x="1"
                y="11"
                width="6"
                height="6"
                rx="1.5"
                fill="currentColor"
              />
              <rect
                x="11"
                y="11"
                width="6"
                height="6"
                rx="1.5"
                fill="currentColor"
              />
            </svg>
          </button>
          <div className="divider" />
          <button
            className={`view-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
            title="List view"
          >
            <svg viewBox="0 0 18 18" fill="none">
              <rect
                x="1"
                y="2"
                width="16"
                height="2.5"
                rx="1.25"
                fill="currentColor"
              />
              <rect
                x="1"
                y="7.75"
                width="16"
                height="2.5"
                rx="1.25"
                fill="currentColor"
              />
              <rect
                x="1"
                y="13.5"
                width="16"
                height="2.5"
                rx="1.25"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="sort-wrapper">
          <button className="sort-btn" onClick={() => setSortOpen(!sortOpen)}>
            <svg viewBox="0 0 18 18" fill="none" className="sort-icon">
              <path
                d="M2 5h14M5 9h8M8 13h2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="sort-label">Sort by</span>
            <span className="sort-value">{sortLabel}</span>
            <svg
              viewBox="0 0 12 12"
              fill="none"
              className={`chevron ${sortOpen ? "open" : ""}`}
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {sortOpen && (
            <div className="sort-dropdown">
              {(["name", "date", "recent"] as SortBy[]).map((opt) => (
                <button
                  key={opt}
                  className={`sort-option ${sortBy === opt ? "active" : ""}`}
                  onClick={() => {
                    setSortBy(opt);
                    setSortOpen(false);
                  }}
                >
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="separator" />

      {/* Projects Area */}
      <div className="projects-area">
        {sorted.length === 0 ? (
          <div className="empty-state">
            <span>No projects yet. Create your first project!</span>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid-view">
            {sorted.map((p) => (
              <ProjectCard key={p.id} project={p} onShare={handleShare} />
            ))}
          </div>
        ) : (
          <div className="list-view">
            {sorted.map((p) => (
              <ProjectListItem key={p.id} project={p} onShare={handleShare} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
        }

        .view-toggle {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .view-btn {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          border-radius: 7px;
          cursor: pointer;
          color: var(--text-muted);
          padding: 0;
          transition:
            color 0.15s,
            background 0.15s;
        }

        .view-btn.active {
          color: var(--text-primary);
          background: var(--bg-elevated);
        }

        .view-btn:hover:not(.active) {
          color: var(--text-secondary);
        }

        .view-btn svg {
          width: 16px;
          height: 16px;
        }

        .divider {
          width: 1px;
          height: 18px;
          background: var(--border-muted);
          margin: 0 4px;
        }

        .sort-wrapper {
          position: relative;
        }

        .sort-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          padding: 6px 8px;
          border-radius: 7px;
          transition: background 0.15s;
        }

        .sort-btn:hover {
          background: var(--bg-elevated);
        }

        .sort-icon,
        .chevron {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .chevron {
          color: var(--text-muted);
          transition: transform 0.2s;
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .sort-label {
          color: var(--text-muted);
        }

        .sort-value {
          color: var(--text-primary);
          font-weight: 500;
        }

        .sort-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          background: var(--bg-elevated);
          border: 1px solid var(--border-muted);
          border-radius: 10px;
          overflow: hidden;
          z-index: 50;
          min-width: 120px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }

        .sort-option {
          display: block;
          width: 100%;
          text-align: left;
          padding: 9px 14px;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          cursor: pointer;
          transition:
            background 0.1s,
            color 0.1s;
        }

        .sort-option:hover {
          background: var(--bg-card);
          color: var(--text-primary);
        }

        .sort-option.active {
          color: var(--accent-orange);
          background: var(--accent-orange-subtle);
        }

        .separator {
          height: 1px;
          background: var(--border-subtle);
        }

        .projects-area {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        .grid-view {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .list-view {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .empty-state {
          color: var(--text-muted);
          font-size: 14px;
          text-align: center;
          padding: 60px 0;
        }
      `}</style>
    </div>
  );
}
