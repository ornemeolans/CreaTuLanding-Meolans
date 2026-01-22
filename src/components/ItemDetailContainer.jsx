import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    // Eliminamos el estado 'loading' manual para evitar el error de ESLint

    const { itemId } = useParams();

    useEffect(() => {
        // Ya no usamos setLoading(true) aquí.

        const docRef = doc(db, "products", itemId);

        getDoc(docRef)
            .then((response) => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProduct(productAdapted);
                } else {
                    console.log("El producto no existe");
                }
            })
            .catch((error) => console.log(error));
        // No necesitamos finally() porque el renderizado condicional se encarga
    }, [itemId]);

    // LÓGICA DE CARGA DERIVADA:
    // ¿Está cargando? Sí, si no hay producto cargado todavía,
    // O si el producto que tenemos en memoria no es el que pide la URL.
    const isLoading = !product || product.id !== itemId;

    if (isLoading) {
        return (
            <div className="main-content Container" style={{ marginTop: '20px', minHeight: '80vh', textAlign: 'center' }}>
                <h3>Cargando detalle...</h3>
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