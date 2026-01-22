import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    // Si no hay items, ocultamos el widget para que quede más limpio
    if (totalQuantity === 0) return null;

    return (
        <Link to="/cart" className="cart-widget" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
            {/* Asegurate que esta imagen exista en public/img/ o usa un emoji 🛒 si prefieres */}
            <img src="/img/cubiertos.png" alt="cart" style={{ width: 30 }} />
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;