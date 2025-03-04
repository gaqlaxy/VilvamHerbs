import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturedProducts from "./Components/FeaturedProducts";
import ProductUpdate from "./Components/ProductUpdate";
import Benefits from "./Components/Benefits";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ProductUpdate />
      <Benefits />
    </>
  );
}
