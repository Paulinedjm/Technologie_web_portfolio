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
        <section>
            <h1 className="text-2xl text-green-800">{post.title}</h1>
            <p className="my-4">{post.content}</p>

            <div className="flex gap-4">
                <Link href="/blog" className="hover:underline">← Retour</Link>
                <Link href={`/blog/edit/${post.id}`} className="text-blue-600 hover:underline">
                    Modifier
                </Link>
            </div>
        </section>
    );
}