import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return (
            <div className="main-content Container" style={{ marginTop: '20px', minHeight: '80vh', textAlign: 'center' }}>
                <h3>Cargando detalle...</h3>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="main-content Container" style={{ marginTop: '20px', minHeight: '80vh', textAlign: 'center' }}>
                <h3>Producto no encontrado</h3>
            </div>
        );
    }

    return (
        <div className="main-content Container" style={{ marginTop: '20px', minHeight: '80vh' }}>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
