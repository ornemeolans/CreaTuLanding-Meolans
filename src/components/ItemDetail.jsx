import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import Toast from "./Toast";

const ItemDetail = ({ id, title, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const [showToast, setShowToast] = useState(false);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, title, price, img };
        addItem(item, quantity);
        setShowToast(true);
    };

    const handleCloseToast = () => {
        setShowToast(false);
    };

    return (
        <>
            <article className="ItemDetailContainer">
                <div className="ItemDetail">
                    <img src={img} alt={title} className="ItemDetailImg" loading="lazy" />
                    <div className="ItemDetailInfo">
                        <h2 className="ItemDetailTitle">{title}</h2>
                        <p className="ItemDetailCategory">Categoría: {category}</p>
                        <p className="ItemDetailDescription">{description}</p>
                        <p className="ItemDetailPrice">${price}</p>

                        <div style={{ marginTop: '20px' }}>
                            {quantityAdded > 0 ? (
                                <Link to="/cart" className="Button">Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )}
                        </div>
                    </div>
                </div>
            </article>
            
            {showToast && (
                <Toast 
                    message={`${title} agregado al carrito!`} 
                    type="success"
                    onClose={handleCloseToast}
                />
            )}
        </>
    );
};

export default ItemDetail;
