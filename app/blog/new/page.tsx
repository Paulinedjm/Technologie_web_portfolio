import Link from "next/link";
import { createPost } from "@/lib/blog";

export default function NewPostPage() {
    return (
        <section className="max-w-2xl mx-auto py-10 px-4">
            <Link href="/blog" className="text-sm text-slate-500 hover:text-blue-900 hover:underline">
                ← Back to blog
            </Link>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mt-4">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                    New post
                </h1>

                <form action={createPost} className="flex flex-col gap-4">
                    <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                        Title
                        <input
                            name="title"
                            placeholder="My new post"
                            required
                            className="border border-slate-300 rounded-lg px-3 py-2 text-base font-normal
                                       focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                        Content
                        <textarea
                            name="content"
                            placeholder="Write something..."
                            rows={8}
                            required
                            className="border border-slate-300 rounded-lg px-3 py-2 text-base font-normal
                                       focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                        />
                    </label>

                    <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg py-2.5 transition-colors">
                        Publish
                    </button>
                </form>
            </div>
        </section>
    );
}