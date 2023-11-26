import React, { useState } from "react"
import './task-form.css'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ addTask }) => {

    // estado para que se muestre el formulario cuando se hace click en el botón
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const HandleSubmitTask = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const newTask = {
            title,
            description,
            id: uuidv4(),
            createdAt: new Date().toLocaleString()
        }
        addTask(newTask)
        closeModal()
    }
    return (

        <div>
            <button onClick={openModal} className="btn-crear-tarea">Crear tarea</button>
            {
                isOpen && (

                    <div className="modal">

                        {/* formulario de ingreso de datos para la creación de la nueva tarea */}
                        <form onSubmit={HandleSubmitTask}>

                            <div className="input-container">
                                <label htmlFor="title">Título: </label>
                                <input type="text" id="title" name="title" placeholder="Ingrese el título..." required/>
                            </div>


                            <div className="input-container descripcion">
                                <label htmlFor="description">Descripción: </label>
                                <textarea name="description" id="description" placeholder="Ingrese una descripción..." required></textarea>
                            </div>

                            <div className="controls-form">
                                <button role="button" onClick={closeModal}>Cancelar</button>
                                <button type="submit">Agregar</button>
                            </div>

                        </form>

                    </div>


                )
            }


        </div>

    )
}

export { TaskForm }
