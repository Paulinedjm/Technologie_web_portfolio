"use server";

import { cacheTag, updateTag } from "next/cache";
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const tasks: { title: string; done: boolean; } [] = [];

export async function getTasks() {
    "use cache";
    cacheTag("tasks");
    return tasks;
}

export async function createTask(form: FormData) {
    const task = form.get("bonjour_lur")?.toString();
    if (task) {
        tasks.push({
            title: String(form.get('title')),
            done: false,
        })
    updateTag("tasks")
    }
}

export async function deleteTask(id: number) {
  tasks.splice(id, 1)
  redirect((await headers()).get('referer') ?? '/')
}