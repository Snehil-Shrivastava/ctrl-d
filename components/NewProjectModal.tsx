"use client";

import { useState } from "react";

interface NewProjectModalProps {
  onClose: () => void;
  onCreate: (title: string) => void;
}

export default function NewProjectModal({
  onClose,
  onCreate,
}: NewProjectModalProps) {
  const [title, setTitle] = useState("");

  const handleCreate = () => {
    if (title.trim()) {
      onCreate(title.trim());
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="bg-neutral-800/70 backdrop-blur-md w-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>New Project</h2>
          <button className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 18 18" fill="none">
              <path
                d="M3 3l12 12M15 3L3 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <label>Project name</label>
          <input
            type="text"
            placeholder="My awesome project..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            autoFocus
          />
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-create"
            onClick={handleCreate}
            disabled={!title.trim()}
          >
            Create Project
          </button>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(4px);
        }

        .modal {
          background: var(--bg-elevated);
          border: 1px solid var(--border-muted);
          border-radius: 16px;
          width: 380px;
          max-width: calc(100vw - 32px);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
          animation: fadeInUp 0.25s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 0;
        }

        h2 {
          margin: 0;
          font-family: "Syne", sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .close-btn {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          padding: 0;
          transition: all 0.15s;
        }

        .close-btn:hover {
          color: var(--text-primary);
          background: var(--bg-void);
        }

        .close-btn svg {
          width: 12px;
          height: 12px;
        }

        .modal-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        label {
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        input {
          background: var(--bg-input);
          border: 1px solid gray;
          border-radius: 9px;
          padding: 11px 14px;
          color: var(--text-primary);
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        input::placeholder {
          color: var(--text-muted);
        }

        input:focus {
          border-color: var(--accent-orange);
        }

        .modal-footer {
          display: flex;
          gap: 10px;
          padding: 0 20px 20px;
        }

        .btn-cancel {
          flex: 1;
          padding: 10px;
          border-radius: 9px;
          background: var(--bg-card);
          border: 1px solid var(--border-muted);
          color: var(--text-secondary);
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .btn-cancel:hover {
          color: var(--text-primary);
        }

        .btn-create {
          flex: 2;
          padding: 10px;
          border-radius: 9px;
          background: var(--accent-orange);
          border: none;
          color: white;
          font-family: "Syne", sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.15s;
        }

        .btn-create:hover:not(:disabled) {
          opacity: 0.88;
        }

        .btn-create:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
