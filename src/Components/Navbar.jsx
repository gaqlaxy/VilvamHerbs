// // -------------------

// import React, { useState } from "react";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import { scroller } from "react-scroll";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleScroll = (section) => {
//     if (location.pathname === "/") {
//       // Already on homepage - scroll to section
//       scroller.scrollTo(section, {
//         smooth: true,
//         offset: -10, // Adjust for header height
//         duration: 500,
//       });
//     } else {
//       // Navigate to homepage then scroll
//       // First argument is the path, second is state
//       window.location.href = `/#${section}`;
//     }
//     setIsMenuOpen(false);
//   };
//   const menuItems = [
//     { section: "hero", label: "Home" },
//     { section: "products", label: "Best Sellers" },
//     { section: "categories", label: "Categories" },
//     { section: "about", label: "About" },
//     { section: "contact", label: "Contact" },
//   ];

//   return (
//     <>
//       <nav className="font-rubik flex justify-around items-center mx-5 my-5 relative">
//         {/* <img src="vilvam.jpg" alt="" className='w-20' /> */}
//         <RouterLink to="/" className="flex-shrink-0">
//           <img src="/vilvam.jpg" alt="Logo" className="w-20" />
//         </RouterLink>
//         <ul className="hidden md:flex items-center gap-12 ">
//           {menuItems.slice(0, -1).map((item) => (
//             <motion.li
//               key={item.section}
//               onClick={() => handleScroll(item.section)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"
//             >
//               {item.label}
//             </motion.li>
//           ))}
//         </ul>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-5"
//             >
//               {/* Menu Content */}
//               <ul className="flex flex-col gap-6">
//                 {menuItems.map((item) => (
//                   <motion.li
//                     key={item.section}
//                     initial={{ x: -20 }}
//                     animate={{ x: 0 }}
//                     onClick={() => handleScroll(item.section)}
//                     className="cursor-pointer text-2xl hover:text-[#0e402d] transition-colors py-2 border-b border-gray-100"
//                   >
//                     {item.label}
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Mobile Menu Button - Updated Z-index */}
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           className="md:hidden p-2 z-[60] absolute top-5 right-5 transition-all" // Higher z-index than overlay
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="#0e402d" // Ensure visible color
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </motion.button>

//         <div className="hidden md:flex items-center gap-4">
//           <motion.button
//             onClick={() => handleScroll("contact")}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="border-2 border-[#0e402d] tracking-wide text-lg px-4 py-2 font-medium rounded-2xl hover:bg-[#0e402d] hover:text-white transition-colors"
//           >
//             Get in Touch
//           </motion.button>

//           <motion.svg
//             whileHover={{ rotate: 45 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => handleScroll("contact")}
//             className="cursor-pointer p-2 border-2 border-[#0e402d] rounded-full"
//             xmlns="http://www.w3.org/2000/svg"
//             width="50"
//             height="50"
//           >
//             <path
//               stroke="#0e402d"
//               strokeWidth="2"
//               d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
//             />
//           </motion.svg>
//         </div>
//       </nav>
//     </>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
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
        <img src="/vilvam.jpg" alt="Logo" className="w-20" />
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
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
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
      <div className="hidden md:flex items-center gap-4">
        <motion.button
          onClick={() => handleScroll("contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#0e402d] tracking-wide text-lg px-4 py-2 font-medium rounded-2xl hover:bg-[#0e402d] hover:text-white transition-colors"
        >
          Get in Touch
        </motion.button>
        <motion.svg
          whileHover={{ rotate: 45 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleScroll("contact")}
          className="cursor-pointer p-2 border-2 border-[#0e402d] rounded-full"
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
      </div>
    </nav>
  );
}