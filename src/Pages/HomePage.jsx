import React from "react";
import HeroSection from "../Components/HomePage/HeroSection";
import FeaturedProducts from "../Components/HomePage/FeaturedProducts";
import ProductUpdate from "../Components/HomePage/ProductUpdate";
// import Benefits from "../Components/HomePage/Benefits";
import LatestProducts from "../Components/HomePage/LatestProducts";
import HeroAdBanner1 from "../Components/HomePage/HeroAdBanner1";

import Testimonials from "../Components/HomePage/Testimonials";
import Contact from "../Pages/Contact";
import CategoriesGrid from "../Components/HomePage/Categories";
import ScrollToTop from "../Components/ScrollToTop";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      scroller.scrollTo(section, {
        smooth: true,
        offset: -70,
        duration: 500,
      });
    }
  }, [location.hash]);
  return (
    <>
      <div className="relative">
        <HeroSection />
        <FeaturedProducts />
        <ProductUpdate />
        <LatestProducts />
        <CategoriesGrid />
        <HeroAdBanner1 />
        {/* <Benefits /> */}

        <Testimonials />
        <Contact />
        <ScrollToTop />
      </div>
    </>
  );
}
