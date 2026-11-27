//lib/blog.ts

"use server";

import { cacheTag, updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth";

// export type Post = {
//     id: number;
//     title: string;
//     content: string;
// };

// const posts: Post[] = [
//     { id: 1, title: "Mon premier article", content: "Bienvenue sur mon blog !" },
//     { id: 2, title: "Next.js et le SSR", content: "J'apprends le rendu côté serveur." },
// ];

// let nextId = 3;

export type Post = typeof postsTable.$inferSelect;

export async function getPosts() {
    "use cache";
    cacheTag("posts");
    return db.select().from(postsTable).orderBy(desc(postsTable.createdAt));
}

export async function getPost(id: number) {
    "use cache";
    cacheTag("posts");
    const [post] = await db.select().from(postsTable).where(eq(postsTable.id, id));
    return post;
}

export async function createPost(form: FormData) {
    const title = form.get("title")?.toString();
    const content = form.get("content")?.toString();
    if (title && content) {
        await db.insert(postsTable).values({ title, content });
    }
    updateTag("posts");
    redirect("/blog");
}

export async function editPost(form: FormData) {
    const id = Number(form.get("id"));
    const title = form.get("title")?.toString();
    const content = form.get("content")?.toString();
    if (title && content) {
        await db.update(postsTable).set({ title, content }).where(eq(postsTable.id, id));
    }
    updateTag("posts");
    redirect(`/blog/${id}`);
}

export async function deletePost(id: number) {
    await db.delete(postsTable).where(eq(postsTable.id, id));
    updateTag("posts");
}