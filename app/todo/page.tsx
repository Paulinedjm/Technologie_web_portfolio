import { deleteTask, getTasks } from "@/lib/tasks";
import { createTask } from "@/lib/tasks";

export default async function (){
    const tasks = await getTasks();
    return (
        <section>
            <h1 className= "text-2xl text-green-800">Mes tâches</h1>
            <ul className="list-disc list-inside">
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center justify-between gap-4">
                        <span>{task}</span>
                        
                        {/* Formulaire de suppression pour chaque tâche */}
                        <form action={deleteTask}>
                            <input type="hidden" name="taskName" value={task} />
                            <button className="text-red-600 hover:underline text-sm">
                                Supprimer
                            </button>
                        </form>
                    </li>
                ))}
            </ul>

            <form action={createTask}>
                Tâche: <input name="title" />
                <button>Ajouter</button>
            </form>
        </section>
    )
}