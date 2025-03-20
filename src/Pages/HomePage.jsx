import React from 'react'
import HeroSection from "../Components/HomePage/HeroSection";
import FeaturedProducts from "../Components/HomePage/FeaturedProducts";
import ProductUpdate from "../Components/HomePage/ProductUpdate";
import Benefits from "../Components/HomePage/Benefits";
import LatestProducts from "../Components/HomePage/LatestProducts";
import HeroAdBanner1 from "../Components/HomePage/HeroAdBanner1";
import HeroAdBanner2 from "../Components/HomePage/HeroAdBanner2";
import Testimonials from "../Components/HomePage/Testimonials";
import Contact from "../Pages/Contact";
import CategoriesGrid from "../Components/HomePage/Categories";
import ScrollToTop from "../Components/ScrollToTop";

export default function HomePage() {
  return (
    <>
    <div className="relative">
    <HeroSection />
      <FeaturedProducts />
      <ProductUpdate />
      <LatestProducts />
      <CategoriesGrid />
      <HeroAdBanner1 />
      <Benefits />
      <HeroAdBanner2 />
      <Testimonials />
      <Contact />
      <ScrollToTop />

      </div>
      </>
  )
}
