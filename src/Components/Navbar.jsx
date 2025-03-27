import React, { useState, useRef, useEffect } from "react";
import { Router, Link as RouterLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleScroll = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -10,
        duration: 500,
      });
    } else {
      window.location.href = `/#${section}`;
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { section: "hero", label: "Home" },
    { section: "products", label: "Best Sellers" },
    { section: "categories", label: "Categories" },
    { section: "about", label: "About" },
    { section: "contact", label: "Contact" },
  ];

  return (
    <nav className="font-rubik flex justify-between items-center mx-5 my-5 md:justify-around relative">
      {/* Logo */}
      <RouterLink to="/" className="flex-shrink-0 z-50">
        <img src="/v1.png" alt="Logo" className="w-20" />
      </RouterLink>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-12">
        {menuItems.slice(0, -1).map((item) => (
          <motion.li
            key={item.section}
            onClick={() => handleScroll(item.section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"
          >
            {item.label}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2"
                aria-label="Close menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#0e402d"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Menu Items */}
              <ul className="flex flex-col gap-5 mt-14">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.section}
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    onClick={() => handleScroll(item.section)}
                    className="cursor-pointer text-xl hover:text-[#0e402d] transition-colors py-3 px-4"
                  >
                    {item.label}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="md:hidden p-2 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#0e402d"
          strokeWidth={2}
        >
          {!isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          ) : null}
        </svg>
      </motion.button>

      {/* Desktop Contact Section */}
      <motion.div
        className="hidden md:flex items-center gap-1 group" // Add 'group' class here
        whileHover="hover"
        whileTap="tap"
      >
        <motion.button
          variants={{ hover: { scale: 1.05 }, tap: { scale: 0.95 } }}
          onClick={() => handleScroll("contact")}
          className="border-2 border-[#0e402d] tracking-wide text-lg px-4 py-2 font-medium rounded-2xl transition-colors group-hover:bg-[#0e402d] group-hover:text-white"
        >
          Get in Touch
        </motion.button>
        <motion.svg
          variants={{ hover: { rotate: 45 }, tap: { scale: 0.9 } }}
          onClick={() => handleScroll("contact")}
          className="cursor-pointer px-[11px] py-[11px] border-2 border-[#0e402d] rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
        >
          <path
            stroke="#0e402d"
            strokeWidth="2"
            d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
          />
        </motion.svg>
      </motion.div>

      
        <RouterLink
          to="/cart"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="font-medium">{cart.length}</span>
        </RouterLink>
      
    </nav>
  );
}
