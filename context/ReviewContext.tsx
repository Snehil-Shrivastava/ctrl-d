"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type CommentId = "grammar" | "alignment" | "logo" | "";
export type Status = "review" | "completed" | "ignored";

export interface CommentItem {
  id: CommentId;
  category: string;
  check: string;
  status: Status;
}

interface ReviewContextProps {
  isReady: boolean;
  comments: CommentItem[];
  updateCommentStatus: (id: CommentId, status: Status) => void;
  activeImage: CommentId;
  setActiveImage: (id: CommentId) => void;
}

const ReviewContext = createContext<ReviewContextProps | undefined>(undefined);

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const [activeImage, setActiveImage] = useState<CommentId>("");

  // Initial list of comments with "review" status
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "grammar",
      category: "grammar",
      check: 'Spelling "Participants"',
      status: "review",
    },
    {
      id: "alignment",
      category: "design",
      check: "Left hand alignment issue",
      status: "review",
    },
    {
      id: "logo",
      category: "design",
      check: "Logo should be on the right - Brand guidelines",
      status: "review",
    },
  ]);

  // Loading timer runs only once here, making tab switching instant later
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const updateCommentStatus = (id: CommentId, status: Status) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c)),
    );
  };

  return (
    <ReviewContext.Provider
      value={{
        isReady,
        comments,
        updateCommentStatus,
        activeImage,
        setActiveImage,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = () => {
  const ctx = useContext(ReviewContext);
  if (!ctx)
    throw new Error("useReviewContext must be used within a ReviewProvider");
  return ctx;
};
