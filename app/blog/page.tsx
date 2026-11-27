
import Link from "next/link";
import { deletePost, getPosts } from "@/lib/blog";

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <section className="max-w-2xl mx-auto py-10 px-4">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        My blog
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Thoughts and notes about what I&apos;m learning.
                    </p>
                </div>

                <Link
                    href="/blog/new"
                    className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg px-4 py-2 transition-colors"
                >
                    + New post
                </Link>
            </div>

            {posts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow p-8 text-center text-slate-500">
                    No posts yet.
                </div>
            ) : (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="bg-white rounded-2xl shadow border border-slate-100 p-6 hover:shadow-lg transition-shadow"
                        >
                            <Link href={`/blog/${post.id}`} className="block">
                                <h2 className="text-xl font-bold text-slate-900 hover:text-blue-900">
                                    {post.title}
                                </h2>
                                <p className="text-xs text-slate-400 mt-1">
                                    {post.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} {/* date */}
                                </p>
                                <p className="text-sm text-slate-600 mt-3 line-clamp-2">
                                    {post.content}
                                </p>
                            </Link>

                            <form action={deletePost.bind(null, post.id)} className="mt-4">
                                <button className="text-red-600 hover:underline text-sm">
                                    Delete
                                </button>
                            </form>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}