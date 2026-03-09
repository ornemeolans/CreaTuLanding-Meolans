import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../asyncMock";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = categoryId 
            ? getProductsByCategory(categoryId)
            : getProducts();

        fetchProducts.then((data) => {
            setProducts(data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [categoryId]);

    // Category labels for display
    const categoryLabels = {
        bazar: "Bazar",
        deco: "Deco",
        sets: "Sets"
    };

    const displayCategory = categoryId ? categoryLabels[categoryId] || categoryId : null;

    // Lógica para la imagen de fondo (Parallax)
    const bgImage = categoryId
        ? "/img/matera-minimal.png"
        : "/img/vajilla-nordica.png";

    if (loading) {
        return (
            <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Cargando productos KÕSA...</h3>
            </div>
        );
    }

    return (
        <div>
            {/* SECCIÓN PARALLAX */}
            <div className="parallax-header" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="parallax-overlay"></div>
                <h1 className="parallax-title">
                    {greeting} {displayCategory && `| ${displayCategory.toUpperCase()}`}
                </h1>
            </div>

            {/* CONTENIDO */}
            <div className="main-content Container">
                <ItemList products={products} />
            </div>
        </div>
    );
};

export default ItemListContainer;
