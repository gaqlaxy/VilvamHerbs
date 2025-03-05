import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturedProducts from "./Components/FeaturedProducts";
import ProductUpdate from "./Components/ProductUpdate";
import Benefits from "./Components/Benefits";
import LatestProducts from "./Components/LatestProducts";
import HeroAdBanner1 from "./Components/HeroAdBanner1";
import HeroAdBanner2 from "./Components/HeroAdBanner2";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ProductUpdate />
      <LatestProducts />
      <HeroAdBanner1 />
      <Benefits />
      <HeroAdBanner2 />
      <Footer />
    </>
  );
}
