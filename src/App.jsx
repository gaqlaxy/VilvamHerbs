import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import CategoryProductsPage from "./Pages/CategoryProductsPage";
import ProductPage from "./Pages/ProductPage";


export default function App() {
  return (
    <>
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
          </Routes>
          <Footer />
        </Router>
      </AnimatePresence>
    </>
  );
}
