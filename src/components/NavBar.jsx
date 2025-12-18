import React from 'react';
import CartWidget from './CartWidget'; 
import { NavLink, Link } from 'react-router-dom';
// Asegúrate de importar el CSS en App.jsx, no aquí necesariamente, pero debe estar cargado.

const NavBar = () => {
    return (
        <nav className="navbar-kosa">
            <Link to='/' className="brand-kosa">
                KÖSA
            </Link>

            <div className="nav-links-kosa">
                <NavLink to={`/category/hogar-y-cocina`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hogar y Cocina</NavLink>
                <NavLink to={`/category/decoracion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Decoración</NavLink>
                <NavLink to={`/category/libreria`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Librería</NavLink>
            </div>

            <CartWidget />
        </nav>
    );
}

export default NavBar;