import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./projet/Navbar/Navbar";
import Home from "./projet/Home";
import Footer from "./projet/Footer/Footer";
import LoginSignup from "./projet/LoginSingup/LoginSingup";
import ProductsCat from "./projet/product/ProductsCat";
import ProductsDog from "./projet/product/ProductsDog";
import Cart from "./projet/Cart/Cart";
import PaymentForm from "./projet/PaymentForm";
import "./projet/Cart/Cart.css";
import "./projet/App.css"

function App() {
  const [cart, setCart] = useState([]); // State to manage cart items

  return (
    <Router>
      <div className="app-container">
        <Navbar cart={cart} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route
              path="/productsCat"
              element={<ProductsCat cart={cart} setCart={setCart} />}
            />
            <Route
              path="/productsDog"
              element={<ProductsDog cart={cart} setCart={setCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/payment" element={<PaymentForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
