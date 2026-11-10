
import Link from "next/link";
import { deletePost, getPosts } from "@/lib/blog";

export default async function BlogPage() {
    const posts = await getPosts();
    return (
        <section>
            <h1 className="text-2xl text-green-800">Mon blog</h1>

            <Link href="/blog/new" className="text-blue-600 hover:underline">
                + Nouvel article
            </Link>

            <ul className="list-disc list-inside mt-4">
                {posts.map((post) => (
                    <li key={post.id} className="flex items-center justify-between gap-4">
                        <Link href={`/blog/${post.id}`} className="hover:underline">
                            {post.title}
                        </Link>

                        <form action={deletePost.bind(null, post.id)}>
                            <button className="text-red-600 hover:underline text-sm">
                                Supprimer
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
        </section>
    );
}