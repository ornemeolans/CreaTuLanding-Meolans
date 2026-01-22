import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, title, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, title, price, img }; // Armo el objeto para el carrito
        addItem(item, quantity);
    };

    return (
        <article className="CardItem" style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: '0 auto' }}>
            <img src={img} alt={title} className="CardImg" style={{ height: '400px' }} />
            <div style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{title}</h2>
                <p style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Categoría: {category}</p>
                <p style={{ margin: '20px 0' }}>{description}</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${price}</p>

                <div style={{ marginTop: '20px' }}>
                    {quantityAdded > 0 ? (
                        <Link to="/cart" className="Button">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                </div>
            </div>
        </article>
    );
};
export default ItemDetail;