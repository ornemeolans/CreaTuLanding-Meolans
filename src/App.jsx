import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;