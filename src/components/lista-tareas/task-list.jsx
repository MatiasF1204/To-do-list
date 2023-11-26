import React from "react";
import './task-list.css'
import { TaskItem } from "../tarea/task-item";


const TaskList = ({ tasks, deleteTask, searchString, currentTasks, handleFilterChange }) => {

    return (
        <div className="header">


            {
                tasks.length == 0 && <p className="aviso">¡ Aún no has ingresado tareas !</p>
            }
            {
                tasks.length != 0 && searchString != '' && currentTasks.length == 0 && <p className="inexiste">No existen tareas con ese nombre.</p>
            }

            {currentTasks.map(task => (
                <TaskItem task={task} key={task.id} deleteTask={deleteTask}></TaskItem>
            ))}

            


        </div>
    )
}

export { TaskList }