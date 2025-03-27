import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/CartContext"; // Add this import

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import CategoryProductsPage from "./Pages/CategoryProductsPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";


export default function App() {
  return (
    <>
      <CartProvider> {/* Add CartProvider here */}
      <AnimatePresence mode="wait">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/category/:categoryId"
              element={<CategoryProductsPage />}
            />
            <Route
              path="/product/:productId"
              element={<ProductPage />}
            />
            <Route path="/cart" element={<CartPage />} />

          </Routes>
          <Footer />
        </Router>
      </AnimatePresence>
      </CartProvider> {/* Add CartProvider here */}
    </>
  );
}
