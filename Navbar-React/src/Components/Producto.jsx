import { useState } from "react";
function Producto(props) {
    const [contenido, setContenido] = useState(false);
    const toggleContenido = () => {
        setContenido(!contenido);
    };
    return (
        <>
            <div className="container_productos">
                <img src="" alt="" />
                <button onClick={toggleContenido}>Ver deatlles</button>
                <div className={contenido ? "container_productos--detalle" : "ocultar"}>
                    <p>
                        <span>Nombre: </span>
                        {props.nombre}
                    </p>
                    <p>
                        <span>Despcipción: </span>
                        {props.descripcion}
                    </p>
                    <p>
                        <span>Precio: </span>
                        {props.precio}
                    </p>
                    <p>
                        <span>Código: </span>
                        {props.codigo}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Producto;
