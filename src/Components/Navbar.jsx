import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className='font-rubik flex justify-between items-center mx-5 my-5'>
        <h1>Vilvam Herbs</h1>
        <ul className='flex justify-between items-center gap-12 '>
            <li className='cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border'>Home</li>
            <li className='cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border'>Products</li>
            <li className='cursor-pointer hover:text-[#0e402d] transition-colors text-lg tracking-wide nav-border'>About</li>
        </ul>
        <div className='flex items-center'>
            <a href="" className='border border-[#0e402d] tracking-wide text-xl px-3 py-2 rounded-2xl hover:bg-[#0e402d] hover:text-white transition-colors'>Get in Touch</a>
            <svg className='cursor-pointer hover:text-[#0e402d] transition-colors px-2 py-2 border border-[#0e402d] border-solid rounded-full' xmlns="http://www.w3.org/2000/svg" width="42" height="42"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
        </div>
    </nav>
    </>
  )
}
