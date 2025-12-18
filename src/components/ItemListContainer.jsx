// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    
    // Obtenemos la categoría de la URL (será undefined si estamos en el Home)
    const { categoryId } = useParams();

    // ESTADO NUEVO: Guardamos qué categoría es la que está cargada actualmente en 'products'.
    // Iniciamos con null para forzar la carga inicial.
    const [loadedCategory, setLoadedCategory] = useState(null);

    useEffect(() => {
        // Elimino el setLoading(true) síncrono que causaba el error.

        // Selecciono la función según si hay categoría o no
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
                // Una vez que llegan los datos, actualizo "loadedCategory"
                // para indicar que ya tengo lo que pide la URL.
                setLoadedCategory(categoryId);
            })
            .catch(error => {
                console.error(error);
            });
            
    }, [categoryId]); // Se ejecuta cada vez que cambia la categoría en la URL

    // LÓGICA CLAVE: ¿Estamos cargando?
    // Si la categoría de la URL (categoryId) es diferente a la que tenemos guardada (loadedCategory),
    // significa que el usuario cambió de página y todavía estamos esperando los datos nuevos.
    const isLoading = categoryId !== loadedCategory;

    if(isLoading) return <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Cargando productos...</h3>

    return (
        <div className="item-list-container">
            <h1 className="greeting-title">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;