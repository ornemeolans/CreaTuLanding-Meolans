import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { getCategories } from "../asyncMock";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <nav className="NavBar">
            <Link to="/">
                <h3 className="Logo">KÕSA</h3>
            </Link>
            <div className="Categories">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'Active Option' : 'Option'}
                    end
                >
                    Inicio
                </NavLink>
                {categories.map((cat) => (
                    <NavLink 
                        key={cat.id} 
                        to={`/category/${cat.id}`} 
                        className={({ isActive }) => isActive ? 'Active Option' : 'Option'}
                    >
                        {cat.label}
                    </NavLink>
                ))}
                <NavLink 
                    to="/nosotros" 
                    className={({ isActive }) => isActive ? 'Active Option' : 'Option'}
                >
                    Nosotros
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
