import Link from "next/link";
import { notFound } from "next/navigation";
import { editPost, getPost } from "@/lib/blog";

type EditPostPageProps = {
    params: Promise<{ id: string }>;
};

export default async function EditPostPage(props: EditPostPageProps) {
    const id = Number((await props.params).id);
    const post = await getPost(id);

    if (!post) notFound();

    return (
        <section className="max-w-2xl mx-auto py-10 px-4">
            <Link href={`/blog/${post.id}`} className="text-sm text-slate-500 hover:text-blue-900 hover:underline">
                ← Back to post
            </Link>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mt-4">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Edit post
                </h1>

                <form action={editPost} className="flex flex-col gap-4">
                    <input type="hidden" name="id" value={post.id} />

                    <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                        Title
                        <input
                            name="title"
                            defaultValue={post.title}
                            required
                            className="border border-slate-300 rounded-lg px-3 py-2 text-base font-normal
                                       focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                        Content
                        <textarea
                            name="content"
                            defaultValue={post.content}
                            rows={8}
                            required
                            className="border border-slate-300 rounded-lg px-3 py-2 text-base font-normal
                                       focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                        />
                    </label>

                    <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg py-2.5 transition-colors">
                        Save changes
                    </button>
                </form>
            </div>
        </section>
    );
}