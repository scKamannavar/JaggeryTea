import React from 'react'
import Logo from '../assets/logo/logo1.png'
import TeaCup from '../assets/products/plainCupCrop.png'
import NavbarElements from './NavbarElements'
const Footer = ({scrollTo, aboutRef, homeRef, blendsRef, contactRef, franchiseRef, distributorRef, galleryRef}) => {
  return (
    <div className='flex flex-col justify-center font-Garamond h-[full] gap-4 bg-[#723C18] bg-center bg-fillerProductBg bg-cover bg-fixed'>
      <div className='flex flex-1 flex-row items-center justify-around p-4'>
        <div className='flex flex-1 flex-col items-center text-xs justify-around font-Garamond  sm:gap-10 gap-2'>
            <div>
              <img src={Logo} className=" w-[70px] md:w-[100px]"alt="" />
            </div>
            <div className='flex flex-col justify-center items-center text-xs md:text-xl font-Cabin'>
                  {/* <h1>
                  DESI JAGGERY'Z TEA
                  </h1> */}
                  <h1 className='text-center font-Cabin font-bold  text-[#723C18]'>
                  Desi Jaggery'z Tea is a premium brand of jaggery tea that offers a unique and flavorful tea experience.
                  </h1>
            </div>
        </div>
        <div className='flex flex-1 flex-col items-center text-xs justify-around font-Garamond  gap-2'>
          {/* <div>HOME</div>
          <div>OUR BLENDS</div>
          <div>ABOUT US</div>
          <div>FREE FRANCHISE </div>
          <div>BECOME A DISTRIBUTOR </div>
          <div>CONTACT US </div> */}
          <h1 className='font-Cabin font-bold text-xl'>Quick Links</h1>
           <NavbarElements scrollTo={scrollTo} sectionRef={homeRef} footer='1'>HOME</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={blendsRef} footer='1'>OUR BLENDS</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={aboutRef} footer='1'>ABOUT US</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={franchiseRef} footer='1'>FREE FRANCHISE</NavbarElements>
                <NavbarElements scrollTo={scrollTo} sectionRef={distributorRef} footer='1'>DISTRIBUTOR</NavbarElements>
                {/* <NavbarElements scrollTo={scrollTo} sectionRef={galleryRef} >GALLERY</NavbarElements> */}
                <NavbarElements scrollTo={scrollTo} sectionRef={contactRef} footer='1'>CONTACT US</NavbarElements>
        </div>
        <div className='flex flex-1 flex-col items-center text-xs justify-around font-Garamond  sm:gap-10 gap-2 hidden md:flex'>
            <div>
              <img src={TeaCup} className=" w-[70px] md:w-[120px]"alt="" />
            </div>
            <div className='flex flex-col justify-center items-center text-xs md:text-xl font-Cabin'>
                  {/* <h1>
                  DESI JAGGERY'Z TEA
                  </h1> */}
                  <h1 className='text-center font-Cabin font-bold  text-[#723C18]'>
                  Unlock new income streams! 
                  </h1>
            </div>
        </div>
      </div>
      <div className='flex items-center text-xs md:text-sm text-white justify-center bg-[#723C18] p-2'>
        <h1 className='text-center'>DesiJaggeryTea © 2023 All Rights Reserved | Designed and Developed by <a href="https://portfolio-sagarck.vercel.app/">SagarcK</a> </h1>
      </div>
    </div>
  )
}

export default Footer
