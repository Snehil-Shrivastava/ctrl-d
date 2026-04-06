"use client";

import { Project } from "@/types";

interface ProjectListItemProps {
  project: Project;
  onShare: (id: string) => void;
}

function timeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}

export default function ProjectListItem({
  project,
  onShare,
}: ProjectListItemProps) {
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="list-item">
      <div className="mini-thumb">
        <span>{initials}</span>
      </div>
      <div className="item-info">
        <span className="item-title">{project.title}</span>
        <span className="item-date">Updated {timeAgo(project.updatedAt)}</span>
      </div>
      <button
        className="share-btn"
        onClick={(e) => {
          e.stopPropagation();
          onShare(project.id);
        }}
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

      <style jsx>{`
        .list-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.15s;
          border: 1px solid transparent;
        }

        .list-item:hover {
          background: var(--bg-elevated);
          border-color: var(--border-subtle);
        }

        .mini-thumb {
          width: 44px;
          height: 44px;
          border-radius: 9px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: "Syne", sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--accent-orange);
        }

        .item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .item-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .item-date {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .share-btn {
          width: 32px;
          height: 32px;
          border-radius: 7px;
          background: transparent;
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          flex-shrink: 0;
          transition: all 0.15s;
          padding: 0;
        }

        .share-btn:hover {
          background: var(--accent-orange-subtle);
          color: var(--accent-orange);
          border-color: var(--accent-orange-dim);
        }

        .share-btn svg {
          width: 14px;
          height: 14px;
        }
      `}</style>
    </div>
  );
}
