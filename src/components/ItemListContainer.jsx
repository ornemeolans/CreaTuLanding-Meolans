import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = ({ greeting }) => {
    // Guardamos un objeto con los datos Y la categoría a la que pertenecen
    const [dataPayload, setDataPayload] = useState({
        products: [],
        loadedCategory: null // Para saber de qué categoría son los productos actuales
    });

    const { categoryId } = useParams();

    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });

                // Actualizamos todo junto: los productos y la "firma" de la categoría actual
                setDataPayload({
                    products: productsAdapted,
                    loadedCategory: categoryId // Guardamos qué categoría acabamos de cargar
                });
            })
            .catch((error) => console.log(error));
    }, [categoryId]);

    // Lógica para la imagen de fondo (Parallax)
    const bgImage = categoryId
        ? "/img/matera-minimal.png"
        : "/img/vajilla-nordica.png";

    // LÓGICA DE CARGA:
    // Si lo que pide la URL (categoryId) es distinto a lo que tenemos guardado (loadedCategory)
    // significa que estamos cargando datos nuevos.
    const isLoading = dataPayload.loadedCategory !== categoryId;

    if (isLoading) {
        return (
            <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Cargando productos Kósa...</h3>
            </div>
        );
    }

    return (
        <div>
            {/* SECCIÓN PARALLAX */}
            <div className="parallax-header" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="parallax-overlay"></div>
                <h1 className="parallax-title">
                    {greeting} {categoryId && `| ${categoryId.toUpperCase()}`}
                </h1>
            </div>

            {/* CONTENIDO */}
            <div className="main-content Container">
                <ItemList products={dataPayload.products} />
            </div>
        </div>
    );
};

export default ItemListContainer;