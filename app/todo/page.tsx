
import { createTask, deleteTask, editTask, getTasks } from "@/lib/tasks";

export const instant = false;

export default async function (){
    const tasks = await getTasks();
    return (
        <section className="mx-auto w-full max-w-2xl p-6">
            <h1 className= "text-2xl text-blue-800">Mes tâches</h1>
            <ul className="flex flex-col gap-3">
                {tasks.map((task, index) => (
                    <li key={task.id} className="flex items-center gap-3 rounded-lg border border-blue-100 bg-white p-3 shadow-sm transition hover:shadow-md">
                        
                        {/* Formulaire de modification */}
                        <form action={editTask} className="flex flex-1 items-center gap-3">
                            <input type="hidden" name="id" value={task.id} />
                            <input
                                type="checkbox"
                                name="done"
                                defaultChecked={task.done}
                            />
                            <input
                                name="title"
                                defaultValue={task.title}
                                required
                                className="flex-1 rounded-md border border-blue-200 px-3 py-1.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 peer-checked:text-gray-400 peer-checked:line-through"
                            />
                            <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700">
                                Enregistrer
                            </button>
                        </form>

                        {/* Formulaire de suppression */}
                        <form action={deleteTask.bind(null, task.id)}>
                            <button className="rounded-md border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50">
                                Supprimer
                            </button>
                        </form>
                    </li>
                ))}
            </ul>

            <form action={createTask} className="mt-4">
                Tâche : <input name="title"
                         required 
                         placeholder="Nouvelle tâche"
                         className="flex-1 rounded-md border border-blue-200 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

                <button className="rounded-md bg-blue-700 px-4 py-2 font-medium text-white transition hover:bg-blue-800">
                    Ajouter
                </button>
            </form>
        </section>
    )
}

