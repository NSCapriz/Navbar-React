import React from "react";
import { useState } from "react";
import logo from "../assets/img/barra-navegación.png"
import Menu from "../assets/img/menu-hamburguesa.png"

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  
    const toggleMenu = () => {
      setMenu(!menu);
    };
  
    return (
      <div className="container_navbar">
        <div className="container_navbar--logo">
            <img src={ logo } alt="Logo" />
            <p>NavBar</p>
        </div>
        <div className={`container_navbar--links ${menu ? 'open' : ''}`}>
            <button onClick={toggleMenu} ><img src={ Menu } alt="menu" /></button>
            <ul className={`nav-list ${menu ? 'show' : ''}`}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </div>
      </div>
    );
  };

export default Navbar

