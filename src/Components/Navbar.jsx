import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

import { Link as RouterLink, useLocation } from 'react-router-dom';



export default function Navbar() {
  const location = useLocation();
  const handleScroll = (section) => {
    if (location.pathname === '/') {
      // Already on homepage - scroll to section
      scroller.scrollTo(section, {
        smooth: true,
        offset: -70, // Adjust for header height
        duration: 500
      });
    } else {
      // Navigate to homepage then scroll
      // First argument is the path, second is state
      window.location.href = `/#${section}`;
    }
  };


  return (
    <>
    <nav className='font-rubik flex justify-around items-center mx-5 my-5'>
        {/* <img src="vilvam.jpg" alt="" className='w-20' /> */}
        <RouterLink to="/" className="flex-shrink-0">
            <img src="/vilvam.jpg" alt="Logo" className="w-20" />
          </RouterLink>
        <ul className='flex items-center gap-12 '>
            {/* <li className='cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium'>Home</li> */}
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"
              activeClass="text-green-700 font-bold"
            >
              Home
            </ScrollLink>
            {/* <li className='cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium'>Products</li> */}
            <ScrollLink
              to="categories"
              smooth={true}
              duration={500}
              offset={-70} // Adjust for fixed header height
              className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"

              activeClass="text-green-700 font-bold"
            >
              Categories
            </ScrollLink>
            {/* <li className='cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium'>About</li> */}
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"

              activeClass="text-green-700 font-bold"
            >
              About
            </ScrollLink>
            {/* <li className='cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium'>Best Sellers</li> */}
            <ScrollLink
              to="bestproducts"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border py-2 px-3 font-medium"

              activeClass="text-green-700 font-bold"
            >
              Best Products
            </ScrollLink>
        </ul>
        <div className='flex items-center'>
            {/* <a href="" className='border border-[#0e402d] tracking-wide text-lg px-3 py-2 font-medium rounded-2xl hover:bg-[#0e402d] hover:text-white transition-colors'>Get in Touch</a> */}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="border border-[#0e402d] tracking-wide text-lg px-3 py-2 font-medium rounded-2xl hover:bg-[#0e402d] hover:text-white transition-colors cursor-pointer"
              activeClass="text-green-700 font-bold"
            >
              Get in touch
            </ScrollLink>
            <svg className='cursor-pointer hover:text-[#0e402d] transition-colors px-2 py-2 border border-[#0e402d] border-solid rounded-full' xmlns="http://www.w3.org/2000/svg" width="42" height="42"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
        </div>
    </nav>
    </>
  )
}
