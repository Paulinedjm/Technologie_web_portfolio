import { createPost } from "@/lib/blog";

export default function NewPostPage() {
    return (
        <section>
            <h1 className="text-2xl text-green-800">Nouvel article</h1>

            <form action={createPost} className="flex flex-col gap-2 max-w-md">
                <input name="title" placeholder="Titre" required className="border p-1" />
                <textarea name="content" placeholder="Contenu" required className="border p-1" />
                <button className="bg-green-700 text-white p-1">Créer</button>
            </form>
        </section>
    );
}