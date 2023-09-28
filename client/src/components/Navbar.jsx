import React, { useState } from 'react'
import NavbarElements from './NavbarElements'
import viteLogo from '/vite.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {

    const [displayNavMob, setDisplayNavMob] = useState(false)
    // const [displayNavDesk, setDisplayNavDesk] = useState(true)

    const navElements = ['HOME','OUR BLENDS','ABOUT US','CONTACT US']
  return (
    <div className='flex flex-col md:flex-row justify-between h-auto w-full fixed top-0 z-50'>
        {/* --------------Navbar Container------------------- */}
        <div className='flex justify-between w-full items-center p-2 h-20 bg-white px-6 md:px-[8%] z-40 shadow-md'>
            {/* --------------Logo-------------- */}
            <div id='logo'>
                <img src={viteLogo} alt="" />
            </div>
            {/* --------------Desktop View Nav Elements-------------- */}
            <div id='navigationElements' className='md:flex md:flex-row md:justify-center gap-[50px] w-full pl-12  md:block hidden'>
                {navElements.map((ele)=>
                <NavbarElements>{ele}</NavbarElements>
                )}          
            </div>
            {/* ---------- Menu icon(Only for smaller screens) and Franchise Button ---------- */}
            <div className='flex' id='specialNavigationElements'>
                <div className='flex justify-center items-center hidden text-bold md:block border-[1px] border-black py-1 px-2  rounded-full cursor-pointer
                                hover:bg-black hover:text-white transition-colors duration-500
                '>
                    FRANCHISE
                </div>
                <div className='md:hidden' onClick={()=>setDisplayNavMob(!displayNavMob)}> 
                    {displayNavMob?<img src={Close} alt="" />:<img src={Menu} alt="" />}
                    <span></span>
                </div>
            </div>
        </div>
        {/* ---------- Menu(Nav Elements) Dropdown For Mobile view ---------- */}
        <AnimatePresence>
        {displayNavMob &&
            <motion.div
             id='navigationElementsMobile'
             initial={{ translateY: '-100%' }}
             animate={{ translateY: 0 }}
             exit={{ translateY: '-100%' }}
             transition={{ type: 'tween',duration: 0.3, ease: 'linear' }}
             className=' flex flex-col gap-8 justify-center items-center h-screen md:flex-row p-2 pb-20  md:hidden bg-white z-30'>
                {navElements.map((ele, index)=>
                <motion.NavbarElements
                     key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                    {ele}
                </motion.NavbarElements>
                )}          
            </motion.div>   
        }
        </AnimatePresence>        
        
    </div>
  )
}

export default Navbar
