import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskCard( { task } ) {
    const {deleteTask} = useContext(TaskContext);

    return (
        <div className="bg-gray-800 text-white p-4 text-center rounded-md " >
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-left text-gray-500 text-sm">{task.description}</p>
            <button className="bg-red-500 mt-4 p-2 rounded-md hover:bg-red-400" onClick={() => deleteTask(task.id) }>
                Delete Task
            </button>
        </div>
    )
}

export default TaskCard
