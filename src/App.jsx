import { useState } from 'react'
import './App.css'
import FormTarea from './components/FormTarea';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  }

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  }

  const marcarHecho = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].hecho = !nuevasTareas[index].hecho;
    setTareas(nuevasTareas);
  }

  return (
    <>
      <h2>Lista de Quehaceres</h2>
      <FormTarea agregarTarea={agregarTarea} />
      <div className="lista-tareas">
        {tareas.map((tarea, index) => (
          <div key={index} className="tarea">
            <label className="tarea-texto" style={{ textDecoration: tarea.hecho ? 'line-through' : 'none' }}>
              <input type="checkbox" checked={tarea.hecho} onChange={() => marcarHecho(index)} />
              {tarea.texto}
            </label>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
