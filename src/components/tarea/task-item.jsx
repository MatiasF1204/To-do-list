// Cada vez que creemos una carpeta o archivo con algun componente debemos importar react
import React, { useState } from 'react'

// importamos los estilos
import './task-item.css'

//Importación de iconos
import { FaRegCircle, FaTrash } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";


// componente de los items de tareas, el cual recibe las priopiedades de manera desestructurada
const TaskItem = ({task, deleteTask}) => {

    // se crea un estado para el botón de tarea realizada (check)
    const [IsDone, setIsDone] = useState(false)
    const HandleLikeCheck = () => {
        setIsDone(!IsDone)

    }

    return (

        <div className='container2'>

            <div className='box'>

                <div className='circle-box'>
                    {
                        IsDone
                            ? <FaCircleCheck onClick={HandleLikeCheck} />
                            : <FaRegCircle onClick={HandleLikeCheck} className='circle-icon' />
                    }
                </div>

                <div className='task-item'>
                    <span className='title'>{task.title}</span>
                    <span className='description'>{task.description}</span>
                    <span className='fecha-inicio'>{task.createdAt}</span>
                </div>

                <div className='trash-icon'>
                    <FaTrash onClick={() => deleteTask(task.id)}/>
                </div>

            </div>

        </div>
    )
}

// lo exportamos al app.jsx para que tome este componente
export { TaskItem }
