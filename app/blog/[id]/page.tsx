import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/blog";

type BlogPostPageProps = {
    params: Promise<{ id: string }>;
};

export default async function BlogPostPage(props: BlogPostPageProps) {
    const id = Number((await props.params).id);
    const post = await getPost(id);

    if (!post) notFound();

    return (
        <section className="max-w-2xl mx-auto py-10 px-4">
            <Link href="/blog" className="text-sm text-slate-500 hover:text-blue-900 hover:underline">
                ← Back to blog
            </Link>

            <article className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-10 mt-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {post.title}
                </h1>
                <p className="text-xs text-slate-400 mt-2">
                    {post.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} {/* date */}
                </p>

                <p className="text-slate-700 leading-relaxed whitespace-pre-line mt-6">
                    {post.content}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                        href={`/blog/edit/${post.id}`}
                        className="text-sm font-medium text-blue-800 hover:underline"
                    >
                        Edit this post
                    </Link>
                </div>
            </article>
        </section>
    );
}