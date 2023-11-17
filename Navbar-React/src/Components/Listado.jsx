import { useState } from "react";
import { Tarea } from "./Tareas";

const Items = ({ tarea, completado }) => {
    return (
        <>
            <li>
                {tarea} {completado ? "✅" : "❌"}
            </li>
        </>
    );
};



function Listado() {

    let listadoCosas = [
        { id: 0, tarea: "Tarea 1", completado: true },
        { id: 1, tarea: "Tarea 2", completado: true },
        { id: 2, tarea: "Tarea 3", completado: false },
        { id: 3, tarea: "Tarea 4", completado: false },
    ];

    const [array, setArray] = useState(listadoCosas);
    const agregarTarea = (ingreso)=>{
        let sinEspacio = ingreso.trim()
        if (sinEspacio < 1) return
        const envio ={
            id: array.length + 1,
            tarea : val,
            visto : false
        }
        setArray([...array,envio])
    }

    return (
        <>
            <div>
                <h2>¿Quieres agregar una tarea?</h2>
                <Tarea agregarTarea={agregarTarea}/>
                <h3>Listado de tareas:</h3>
                <ol>{array.map(item => <Items key={item.id} tarea={item.tarea} completado={item.completado}/>)}</ol>
            </div>
        </>
    );
}
true;
export default Listado;
