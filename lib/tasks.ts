//lib/tasks

"use server";

import { cacheTag, updateTag } from "next/cache";

const tasks: string [] = ["apprendre Async/awaite", "ecouter mehdi"];

export async function getTasks() {
    "use cache";
    cacheTag("tasks");
    return tasks;
}

export async function createTask(form: FormData) {
    const task = form.get("title")?.toString();
    if (task) {
        tasks.push(task);
    }
    updateTag("tasks")
}

export async function deleteTask(form: FormData) {
    const taskToDelete = form.get("taskName")?.toString();
    const index = tasks.indexOf(taskToDelete!);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    updateTag("tasks");
}

