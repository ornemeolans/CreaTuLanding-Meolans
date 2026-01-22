import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";
import "./App.css"; // (O index.css)

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a KÕSA"} />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Categoría"} />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;