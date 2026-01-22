import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>KÕSA</h3>
            </Link>
            <div className="Categories">
                <NavLink to="/category/bazar" className={({ isActive }) => isActive ? 'Active Option' : 'Option'}>Bazar</NavLink>
                <NavLink to="/category/deco" className={({ isActive }) => isActive ? 'Active Option' : 'Option'}>Deco</NavLink>
                <NavLink to="/category/sets" className={({ isActive }) => isActive ? 'Active Option' : 'Option'}>Sets</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};
export default NavBar;