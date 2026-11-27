//lib/blog.ts

"use server";

import { cacheTag, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export type Post = {
    id: number;
    title: string;
    content: string;
};

const posts: Post[] = [
    { id: 1, title: "Mon premier article", content: "Bienvenue sur mon blog !" },
    { id: 2, title: "Next.js et le SSR", content: "J'apprends le rendu côté serveur." },
];

let nextId = 3;

export async function getPosts() {
    "use cache";
    cacheTag("posts");
    return posts;
}

export async function getPost(id: number) {
    "use cache";
    cacheTag("posts");
    return posts.find((p) => p.id === id);
}

export async function createPost(form: FormData) {
    const title = form.get("title")?.toString();
    const content = form.get("content")?.toString();
    if (title && content) {
        posts.push({ id: nextId++, title, content });
    }
    updateTag("posts");
    redirect("/blog");
}

export async function editPost(form: FormData) {
    const id = Number(form.get("id"));
    const title = form.get("title")?.toString();
    const content = form.get("content")?.toString();
    const post = posts.find((p) => p.id === id);
    if (post && title && content) {
        post.title = title;
        post.content = content;
    }
    updateTag("posts");
    redirect(`/blog/${id}`);
}

export async function deletePost(id: number) {
    const index = posts.findIndex((p) => p.id === id);
    if (index > -1) {
        posts.splice(index, 1);
    }
    updateTag("posts");
}