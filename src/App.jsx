// src/App.js
import React from 'react';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer'; 

const App = () => {
    // String a pasar como prop
    const welcomeMessage = "Bienvenido a KÖSA: Diseño Curado para tu Hogar";

    return (
        <>
            <NavBar />

            {/* Pasando la prop 'greeting' a ItemListContainer */}
            <ItemListContainer greeting={welcomeMessage} />
            
            <footer style={{textAlign: 'center', padding: '15px', position: 'fixed', bottom: '0', width: '100%', backgroundColor: 'var(--color-primary)', color: 'var(--color-support)', fontSize: '0.8rem'}}>
                 &copy; 2024 KÖSA. Diseño Curado.
            </footer>
        </>
    );
}

export default App;