import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./Components/Navbar";
import Formulario from "./Components/Formulario";
import Contador from "./Components/Contador";
import Producto from "./Components/Producto";
import Listado from "./Components/Listado";

function App() {
    return (
        <>
            <Navbar />
            <Formulario />
            <Contador />
            <Producto nombre="Nombre del Producto" descripcion="Esta es la descripción del Producto" precio="Precio del producto" codigo="El código del producto" />
            <Listado />
        </>
    );
}
export default App;
