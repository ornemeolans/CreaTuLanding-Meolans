// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget'; 

const NavBar = () => {
    return (
        <nav className="navbar-kosa">
            <a href="#" className="brand-kosa">
                KÖSA
            </a>

            <div className="nav-links-kosa">
                <a href="#" className="nav-link-kosa">INICIO</a>
                <a href="#" className="nav-link-kosa">TIENDA</a>
                <a href="#" className="nav-link-kosa">SOBRE KÖSA</a>
                <a href="#" className="nav-link-kosa">CONTACTO</a>
            </div>

            <CartWidget />
        </nav>
    );
}

export default NavBar;