import { NavLink } from "react-router-dom";
import "./navbar.css";


const Navbar = () =>
{
    return (
        <nav className="navbar-container">
            <div className="navbar">
                <div className="navlink-container">
                    <NavLink className='navlink' to='/' id='active-link'>Inicio</NavLink>
                    <NavLink className='navlink' to='/sobreMi' id='active-link'>Sobre Mi</NavLink>
                    <NavLink className='navlink' to='/proyectos' id='active-link'>Proyectos</NavLink>
                    <NavLink className='navlink' to='/contacto' id='active-link'>Contacto</NavLink>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar