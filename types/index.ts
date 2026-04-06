export interface Project {
  id: string;
  title: string;
  updatedAt: Date;
  thumbnail?: string;
  color?: string;
}

export type ViewMode = "grid" | "list";
export type SortBy = "name" | "date" | "recent";
