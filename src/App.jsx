import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturedProducts from "./Components/FeaturedProducts";
import ProductUpdate from "./Components/ProductUpdate";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ProductUpdate />
    </>
  );
}
