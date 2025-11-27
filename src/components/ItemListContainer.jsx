// src/components/ItemListContainer.js
import React from 'react';

const ItemListContainer = (props) => {
    
    const containerStyle = {
        padding: '50px',
        textAlign: 'center',
        margin: '50px auto',
        maxWidth: '90%',
    };
    
    const greetingStyle = {
        color: 'var(--color-accent)', // Siena Quemado
        fontSize: '2.2rem',
        fontWeight: '700'
    };

    return (
        <div style={containerStyle}>
            <h1 style={greetingStyle}>{props.greeting}</h1>
            <p style={{marginTop: '15px'}}>Aquí se mostrará el catálogo de productos (futura funcionalidad).</p>
        </div>
    );
}

export default ItemListContainer;