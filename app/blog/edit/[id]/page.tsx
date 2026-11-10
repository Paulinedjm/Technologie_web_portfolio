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
        <section>
            <h1 className="text-2xl text-green-800">Modifier l'article</h1>

            <form action={editPost} className="flex flex-col gap-2 max-w-md">
                <input type="hidden" name="id" value={post.id} />
                <input name="title" defaultValue={post.title} required className="border p-1" />
                <textarea name="content" defaultValue={post.content} required className="border p-1" />
                <button className="bg-green-700 text-white p-1">Enregistrer</button>
            </form>
        </section>
    );
}