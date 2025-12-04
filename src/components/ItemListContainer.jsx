// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div className="item-list-container">
            <h1 className="greeting-title">{props.greeting}</h1>
            <p className="greeting-subtitle">Aquí se mostrará el catálogo de productos (futura funcionalidad).</p>
        </div>
    );
}

export default ItemListContainer;