import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Helpers/Contex";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductPage/>}/>
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
