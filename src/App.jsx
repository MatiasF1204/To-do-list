import React, { useEffect, useState } from 'react'

// se importa el index css para los estilos
import './index.css'

//importamos iconos
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

// se importan los 2 componentes a utilizar
import { TaskForm, TaskList } from './components'


function App() {

  // se crea el estado principal, el cual va a tener un array vacío
  const [tasks, setTasks] = useState([])

  const [currentTasks, setCurrentTasks] = useState([])

  // como acá esta mi estado de tareas, acá tengo que hacer la lógica para añadir la tarea del formulario a la tarea
  const addTask = (task) => {

    //los 3 puntos es para sacarle una copia a mis tareas y le agrego las que recibi del formulario
    setTasks([...tasks, task])
  }

  //estado para eliminar tarea
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  // estado para buscar tarea
  const [searchString, setSearchString] = useState('')

  const handleFilterChange = (e) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    setCurrentTasks(tasks.filter(task => task.title.toLowerCase().includes
      (searchString.toLowerCase())))
  }, [searchString, tasks])



  // Acá llamo a mis componentes y funciones creadas dentro de un div padre
  return (

    <div className='container'>

      <div className='padre'>

        {/* titulo del task */}
        <h1 className="titulo-principal">TO DO LIST</h1>


        {/* bucador de tareas */}
        <div className='buscador'>
          <IoSearch className="search-icon" />
          <input type="search" value={searchString} placeholder="Buscar tarea..." onChange={handleFilterChange} />
        </div>

        {/* añadir tarea */}
        <div className='crear-tarea'>
          <IoMdAdd className='añadir-icon'/>
          <TaskForm addTask={addTask}></TaskForm>
        </div>

        {/* lista de tareas agregadas */}
        <TaskList currentTasks={currentTasks} tasks={tasks} searchString={searchString} deleteTask={deleteTask}></TaskList>

      </div>

    </div>

  )
}

export default App


