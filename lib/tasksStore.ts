"use client";

import { useEffect, useState } from "react";
import type { Task } from "./types";

const STORAGE_KEY = "project-t.tasks.v1";

function loadFromStorage(): Task[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
        return JSON.parse(raw) as Task[];     
    } catch {
        return [];
    }
}

function saveToStorage(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
    setTasks(loadFromStorage());
  }, []);
  useEffect(() => {
    saveToStorage(tasks);
  }, [tasks]);
}