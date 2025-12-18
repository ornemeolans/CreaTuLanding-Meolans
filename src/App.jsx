// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; // Lo crearemos en el paso 6

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* Ruta al catálogo principal */}
                    <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>} />
                    
                    {/* Ruta a productos filtrados por categoría */}
                    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoría'}/>} />
                    
                    {/* Ruta al detalle de un producto */}
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    
                    {/* Ruta 404 por si no existe la url */}
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
                
                <footer className="footer-kosa">
                    &copy; 2024 KÖSA. Diseño Curado.
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;