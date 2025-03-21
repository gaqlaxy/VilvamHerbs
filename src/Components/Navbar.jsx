// -------------------

import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const handleScroll = (section) => {
    if (location.pathname === "/") {
      // Already on homepage - scroll to section
      scroller.scrollTo(section, {
        smooth: true,
        offset: -10, // Adjust for header height
        duration: 500,
      });
    } else {
      // Navigate to homepage then scroll
      // First argument is the path, second is state
      window.location.href = `/#${section}`;
    }
  };

  return (
    <>
      <nav className="font-rubik flex justify-around items-center mx-5 my-5">
        {/* <img src="vilvam.jpg" alt="" className='w-20' /> */}
        <RouterLink to="/" className="flex-shrink-0">
          <img src="/vilvam.jpg" alt="Logo" className="w-20" />
        </RouterLink>
        <ul className="flex items-center gap-12 ">
          <motion.li
            onClick={() => handleScroll("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"
          >
            Home
          </motion.li>

          <motion.li
            onClick={() => handleScroll("products")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"
          >
            Best Sellers
          </motion.li>
          <motion.li
            onClick={() => handleScroll("categories")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"
          >
            Categories
          </motion.li>

          <motion.li
            onClick={() => handleScroll("about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"
          >
            About
          </motion.li>
        </ul>
        <div className="flex items-center">
          <motion.a
            onClick={() => handleScroll("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#0e402d] tracking-wide text-lg px-3 py-2 font-medium rounded-2xl hover:bg-[#0e402d] hover:text-white transition-colors"
          >
            Get in Touch
          </motion.a>

          <motion.svg
            whileHover={{ rotate: 45 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScroll("contact")}
            className="cursor-pointer px-2 py-2 border border-[#0e402d] border-solid rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
          >
            <path
              stroke="#0e402d"
              strokeWidth="2"
              d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
            />
          </motion.svg>
        </div>
      </nav>
    </>
  );
}
