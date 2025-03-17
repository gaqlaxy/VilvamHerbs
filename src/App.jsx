import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HomePage/HeroSection";
import FeaturedProducts from "./Components/HomePage/FeaturedProducts";
import ProductUpdate from "./Components/HomePage/ProductUpdate";
import Benefits from "./Components/HomePage/Benefits";
import LatestProducts from "./Components/HomePage/LatestProducts";
import HeroAdBanner1 from "./Components/HomePage/HeroAdBanner1";
import HeroAdBanner2 from "./Components/HomePage/HeroAdBanner2";
import Footer from "./Components/Footer";
import Testimonials from "./Components/HomePage/Testimonials";
import Contact from "./Pages/Contact";

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
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
