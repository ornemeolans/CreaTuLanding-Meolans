// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget'; 
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar-kosa">
            <Link to='/' className="brand-kosa">
                KÖSA
            </Link>

            <div className="nav-links-kosa">
                {/* isActive nos permite dar estilos si estamos en esa ruta */}
                <NavLink to={`/category/hogar-y-cocina`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hogar y Cocina</NavLink>
                <NavLink to={`/category/decoracion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Decoración</NavLink>
                <NavLink to={`/category/libreria`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Librería</NavLink>
            </div>

            <CartWidget />
        </nav>
    );
}

export default NavBar;