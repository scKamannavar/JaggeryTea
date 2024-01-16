import React, { useState, useEffect } from 'react'
import NavbarElements from './NavbarElements'
import viteLogo from '/vite.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
import Logo from '../assets/logo/logo1.png'
import { AnimatePresence, motion } from "framer-motion"
import TeaStallsBar from './TeaStallsBar'

const Navbar = ({scrollTo, aboutRef, homeRef, blendsRef, contactRef}) => {

    const [displayNavMob, setDisplayNavMob] = useState(false)
    // const [displayNavDesk, setDisplayNavDesk] = useState(true)

    const navElements = ['HOME','OUR BLENDS','ABOUT US','CONTACT US','BRANCHES']

    //logic for color change
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const scrollDistance = window.innerHeight * 0.1; // 10% of the screen height
    
          if (scrollPosition > scrollDistance) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToRef=()=>{
        
      }

  return (
    <div className='flex flex-col  h-auto w-full fixed top-0 z-50'>
        <div>
          <TeaStallsBar/> 
        </div>
        <div className='flex flex-col md:flex-row justify-between'>   
        {/* --------------Navbar Container------------------- */}

        <div className={`flex justify-between w-full items-center p-2 h-21 ${scrolled ?'bg-white bg-transition':'bg-white md:bg-transparent' }  px-6 md:px-[8%] z-40 shadow-md  transition-shadow duration-700 ${displayNavMob && 'shadow-none'}`}>
            {/* --------------Logo-------------- */}
            <div id='logo'>
                <img src={Logo} className=" w-[70px] md:w-[100px]"alt="" />
            </div>
            {/* --------------Desktop View Nav Elements-------------- */}
            <div id='navigationElements' className='md:flex md:flex-row md:justify-center gap-[50px] w-full pl-12  md:block hidden '>
                {/* {navElements.map((ele)=>
                <NavbarElements >{ele}</NavbarElements>
                )}           */}
                <NavbarElements scrollTo={scrollTo} sectionRef={homeRef} >HOME</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={blendsRef} >OUR BLENDS</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={aboutRef} >ABOUT US</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={aboutRef} >FREE FRANCHISE</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={aboutRef} >BECOME A DISTRIBUTOR</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={contactRef} >CONTACT US</NavbarElements>
                {/* <NavbarElements scrollTo={scrollTo} sectionRef={aboutRef} >About Us</NavbarElements> */}

            </div>
            {/* ---------- Menu icon(Only for smaller screens) and Franchise Button ---------- */}
            <div className='flex' id='specialNavigationElements'>
                <a href="tel:9513421639" className='flex justify-center items-center w-[115px] hidden text-bold md:block border-[1px] border-black py-1 px-2  rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors duration-500'>
                    CALL NOW <i class="fa fa-phone"></i>
                </a>
                <div className='md:hidden' onClick={()=>setDisplayNavMob(!displayNavMob)}> 
                    {displayNavMob?<img src={Close} alt="" />:<img src={Menu} alt="" />}
                    <span></span>
                </div>
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
                {/* {navElements.map((ele, index)=>
                <motion.NavbarElements
                     key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0,transition:{duration: 0.3, delay: index * 0.2 } }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    
                >
                    {ele}
                </motion.NavbarElements>
                )}           */}
                {/* <NavbarElements scrollTo={scrollTo} sectionRef={aboutRef} setterFunc={setDisplayNavMob} >About Us</NavbarElements> */}
                <NavbarElements scrollTo={scrollTo} sectionRef={homeRef} setterFunc={setDisplayNavMob}>HOME</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={blendsRef} setterFunc={setDisplayNavMob}>OUR BLENDS</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={aboutRef} setterFunc={setDisplayNavMob}>ABOUT US</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={contactRef} setterFunc={setDisplayNavMob}>CONTACT US</NavbarElements>
            </motion.div>   
        }
        </AnimatePresence>        
        
    </div>
  )
}

export default Navbar
