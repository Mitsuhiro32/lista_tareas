import { useState } from "react";
import PropTypes from "prop-types";

const FormTarea = (props) => {
    const [nuevaTarea, setNuevaTarea] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        props.agregarTarea({ texto: nuevaTarea, hecho: false });
        setNuevaTarea("");
    }

    return (
        <form onSubmit={enviarFormulario}>
            <input type="text" placeholder="Agregar una nueva tarea" value={nuevaTarea} onChange={(e) => {setNuevaTarea(e.target.value); }} />
            <div className="form-button">
                <button type="submit">Agregar</button>
            </div>
        </form>
    );
}

FormTarea.propTypes = {
    agregarTarea: PropTypes.func.isRequired
};

export default FormTarea;