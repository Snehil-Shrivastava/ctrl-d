"use client";

import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onShare: (id: string) => void;
}

function timeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Updated today";
  if (days === 1) return "Updated yesterday";
  if (days < 7) return `Updated ${days} days ago`;
  if (days < 30) return `Updated ${Math.floor(days / 7)} weeks ago`;
  return `Updated ${Math.floor(days / 30)} months ago`;
}

const LOGO_COLORS = [
  { bg: "#f5f0e8", text: "#1a1a1a", accent: "#f07a20" },
  { bg: "#1a1a2e", text: "#e0d7ff", accent: "#7c6cfc" },
  { bg: "#0f2027", text: "#a8f0e0", accent: "#00d9a6" },
  { bg: "#2a1a0f", text: "#ffd4a0", accent: "#ff8c42" },
];

export default function ProjectCard({ project, onShare }: ProjectCardProps) {
  const colorIdx = project.id.charCodeAt(0) % LOGO_COLORS.length;
  const colors = LOGO_COLORS[colorIdx];
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="card" style={{ padding: 0, boxShadow: "none" }}>
      <div className="thumbnail" style={{ background: colors.bg }}>
        <span className="initials" style={{ color: colors.text }}>
          <span style={{ color: colors.accent }}>{initials[0]}</span>
          {initials.slice(1)}
        </span>
      </div>
      <div className="card-footer">
        <div className="card-info">
          <span className="card-title">{project.title}</span>
          <span className="card-date">{timeAgo(project.updatedAt)}</span>
        </div>
        <button
          className="share-btn"
          onClick={(e) => {
            e.stopPropagation();
            onShare(project.id);
          }}
          title="Share project"
        >
          <svg viewBox="0 0 20 20" fill="none">
            <path
              d="M14 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 7H8a4 4 0 00-4 4v6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition:
            border-color 0.2s,
            transform 0.2s,
            box-shadow 0.2s;
          width: 168px;
        }

        .card:hover {
          border-color: var(--border-muted);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .thumbnail {
          width: 100%;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px 10px 0 0;
        }

        .initials {
          font-family: "Syne", sans-serif;
          font-size: 38px;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .card-footer {
          padding: 10px 10px 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .card-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-date {
          font-size: 11px;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .share-btn {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          flex-shrink: 0;
          transition:
            background 0.15s,
            color 0.15s;
          padding: 0;
        }

        .share-btn:hover {
          background: var(--accent-orange-subtle);
          color: var(--accent-orange);
          border-color: var(--accent-orange-dim);
        }

        .share-btn svg {
          width: 13px;
          height: 13px;
        }
      `}</style>
    </div>
  );
}
