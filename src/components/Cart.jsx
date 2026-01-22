import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="main-content Container" style={{ textAlign: 'center' }}>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Button" style={{ marginTop: '20px', display: 'inline-block' }}>Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="main-content Container">
            <h1>Tu Carrito</h1>
            <div style={{ marginTop: '20px' }}>
                {cart.map((p) => (
                    <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                        <div>
                            <h3>{p.title}</h3>
                            <p>Cantidad: {p.quantity}</p>
                            <p>Subtotal: ${p.price * p.quantity}</p>
                        </div>
                        <button className="Button" style={{ backgroundColor: '#cc0000', height: '40px' }} onClick={() => removeItem(p.id)}>X</button>
                    </div>
                ))}
            </div>
            <h2 style={{ marginTop: '20px' }}>Total: ${total}</h2>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button onClick={() => clearCart()} className="Button" style={{ backgroundColor: 'gray' }}>Limpiar Carrito</button>
                <Link to="/checkout" className="Button">Finalizar Compra</Link>
            </div>
        </div>
    );
};
export default Cart;