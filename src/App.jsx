// src/App.jsx
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
            
            <footer className="footer-kosa">
                &copy; 2024 KÖSA. Diseño Curado.
            </footer>
        </>
    );
}

export default App;