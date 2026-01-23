import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    // 👇 Eliminamos o comentamos esta línea para que siempre se muestre
    // if (totalQuantity === 0) return null;

    return (
        <Link to="/cart" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black', marginRight: '10px' }}>
            <span style={{ fontSize: '30px', marginRight: '5px' }}>🛒</span>
            
            {/* Ahora siempre mostrará el número, incluso si es 0 */}
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;