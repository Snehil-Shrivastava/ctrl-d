"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

interface TopBarProps {
  onNewProject: () => void;
}

export default function TopBar({ onNewProject }: TopBarProps) {
  const [search, setSearch] = useState("");

  const { data: session } = useSession();

  console.log("session data", session);

  const name = session?.user?.name;

  return (
    <div className="flex items-center gap-6 fade-up">
      {/* Welcome */}
      <div className="flex items-center gap-3.5 flex-[0.25]">
        {/* <div className="avatar">{name?.charAt(0).toUpperCase()}</div> */}
        <div className="w-15 h-15 bg-amber-500 rounded-md" />
        <div className="flex flex-col leading-[1.1]">
          <span className="text-lg">Welcome,</span>
          <span className="text-2xl font-semibold">{name}</span>
        </div>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-120 mx-auto relative bg-neutral-800 rounded-xl">
        <svg className="search-icon" viewBox="0 0 20 20" fill="none">
          <circle
            cx="8.5"
            cy="8.5"
            r="5.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M13 13l3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* New Project */}
      <button
        className="flex bg-none border-none p-0 flex-[0.25] justify-end"
        onClick={onNewProject}
      >
        <div className="cursor-pointer flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="none" className="new-project-icon">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="3"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M12 8v8M8 12h8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="17" cy="7" r="4" fill="var(--accent-orange)" />
            {/* <path
              d="M17 5v4M15 7h4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            /> */}
          </svg>
          <span>New Project</span>
        </div>
      </button>

      <style jsx>{`
        .search-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: var(--text-muted);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          padding: 11px 42px 11px 16px;
          color: var(--text-primary);
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          outline: none;
          transition:
            border-color 0.2s,
            background 0.2s;
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .search-input:focus {
          border-color: var(--border-muted);
          background: #272727;
        }

        .new-project-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 0;
          flex-shrink: 0;
          margin-left: auto;
          transition: opacity 0.2s;
        }

        .new-project-btn:hover {
          opacity: 0.8;
        }

        .new-project-icon {
          width: 36px;
          height: 36px;
          color: var(--accent-orange);
        }

        .new-project-btn span {
          font-family: "Syne", sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
      `}</style>
    </div>
  );
}
