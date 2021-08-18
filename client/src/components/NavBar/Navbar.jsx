import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"
import Banner from "../Banner/Banner"

const Navbar = () => {
    return (
        <div className="NavBarContainer">
            <Link to="/" className="Links">Inicio</Link>
            <Link to="/Actividades" className="Links">Paquete de actividades</Link>
            <Link to="/Miagenda" className="Links">Mi Agenda</Link>
            <Link to="/usuarios" className="Links">Cuenta</Link>
        </div>
    )
}

export default Navbar
