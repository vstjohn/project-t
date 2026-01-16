export type Energy = "low" | "medium" | "high";
export type Minutes = 2 | 5 | 10 | 20;
export type Task = {
  id: string;
  title: string;
  minutes: Minutes;
  energy: Energy;
  dueDate?: string;
  createdAt: string;
  lastSuggestedAt?: string;
  completedAt?: string;
};
