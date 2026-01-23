import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    // Si no hay productos, ocultamos el carrito
    if (totalQuantity === 0) return null;

    return (
        <Link to="/cart" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black', marginRight: '10px' }}>
            {/* 👇 Aquí está el cambio: Usamos el emoji directamente */}
            <span style={{ fontSize: '30px', marginRight: '5px' }}>🛒</span>
            
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;