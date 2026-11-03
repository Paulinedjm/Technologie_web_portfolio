import { getTasks } from "@/lib/tasks";
import { createTask } from "@/lib/tasks";

export default async function (){
    const tasks = await getTasks();
    return (
        <section>
            <h1 className= "text-2xl text-green-800">Mes tâches</h1>
            <ul className="list-disc list-inside">
                {tasks.map( (task) => (
                    <li>{task}</li>
                ))}
            </ul>

            <form action={createTask}>
                Tâche: <input name="bonjour_lur" />
                <button>Ajouter</button>
            </form>
        </section>
    )
}