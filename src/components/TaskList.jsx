import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react';

function TaskList() {

    const {tasks} = useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1 className='text-white font-bold text-2xl text-center mt-8'>No hay tareas aun...</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-3  mx-auto'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList
