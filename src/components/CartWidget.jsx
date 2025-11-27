// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
    const style = {
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: 'var(--color-primary)', 
        position: 'relative',
        marginLeft: '20px',
        display: 'flex',
        alignItems: 'center'
    };

    const counterStyle = {
        backgroundColor: 'var(--color-accent)', // Siena Quemado
        color: 'white',
        borderRadius: '50%',
        padding: '2px 8px',
        fontSize: '0.7rem',
        fontWeight: '700',
        marginLeft: '5px',
        lineHeight: '1'
    };

    return (
        <div style={style}>
            🛒
            <span style={counterStyle}>3</span> 
        </div>
    );
}

export default CartWidget;