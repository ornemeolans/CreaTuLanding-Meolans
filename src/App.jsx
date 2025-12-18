import React from 'react';
// 👇 Cambiamos BrowserRouter por HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css'; 

function App() {
    return (
        <div className="App">
            {/* Usamos HashRouter para que funcione en GitHub Pages sin errores al recargar */}
            <HashRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;