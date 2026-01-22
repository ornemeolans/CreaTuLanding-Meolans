import { useContext, useState } from "react";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { cart, total, clearCart } = useContext(CartContext);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const createOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const order = {
                buyer: formData,
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const orderRef = collection(db, "orders");
            const orderAdded = await addDoc(orderRef, order);

            setOrderId(orderAdded.id);
            clearCart();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="main-content Container"><h2>Generando orden...</h2></div>;

    if (orderId) {
        return (
            <div className="main-content Container" style={{ textAlign: 'center' }}>
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu número de orden es: <b style={{ color: 'var(--color-accent)' }}>{orderId}</b></p>
            </div>
        );
    }

    return (
        <div className="main-content Container">
            <h1>Checkout</h1>
            <form onSubmit={createOrder} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
                <input
                    className="Button" style={{ backgroundColor: 'white', color: 'black', border: '1px solid gray' }}
                    type="text" name="name" placeholder="Nombre" onChange={handleChange} required
                />
                <input
                    className="Button" style={{ backgroundColor: 'white', color: 'black', border: '1px solid gray' }}
                    type="text" name="phone" placeholder="Teléfono" onChange={handleChange} required
                />
                <input
                    className="Button" style={{ backgroundColor: 'white', color: 'black', border: '1px solid gray' }}
                    type="email" name="email" placeholder="Email" onChange={handleChange} required
                />
                <button type="submit" className="Button">Comprar</button>
            </form>
        </div>
    );
};
export default Checkout;