import React,{useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import Button from './Button'
import Banner1 from '../assets/banner/Banner1.png'
import Banner2 from '../assets/banner/Banner2.png'
import Banner3 from '../assets/banner/Banner3.png'

const Home = ({scrollTo,blendsRef}) => {

  const images = [Banner1,Banner2,Banner3]
  const [currentImage, setCurrentImage] = useState(0)
  const totalImages = images.length;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % totalImages); // Loop through images
    }, 5000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [totalImages]);

  function handleLocationClick(){
    alert('Location Pressed!')
    window.location.href = 'tel:' + 9513421639
  }

  function handleShopClick(){
    alert('Shop Pressed!')
    scrollTo(blendsRef)
  }

  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-screen bg-pink-100 md:bg-bgBig bg-cover pt-24 md:pt-0'>
      {/* -----------------Left Container--------------------- */}
      <div className='flex flex-1 justify-center items-center h-screen w-ful md:pl-[10%] order-1'>
        <div className='flex flex-col gap-6 text-center md:text-left'>
          <div className=' font-Montser font-bold text-sm'><h1>Best Taste Better Health</h1></div>
          <div className='font-Garamond text-5xl md:text-7xl' >Desi Jaggery Tea</div>
          <div className=' font-Garamond text-slate-500 text-dm' >A premium brand of jaggery tea that offers a unique and flavorful tea experience</div>
          <div className='flex justify-center md:justify-start' > 
          <div className='sm:hidden'>
          <Button onclick={handleLocationClick} color = 'bg-black'> Connect Now</Button>
          </div>
            
            <Button scrollTo={scrollTo} sectionRef={blendsRef}> Discover our Products</Button>
          </div>
        </div>
      </div>
      {/* -----------------Right Container--------------------- */}
      <div className='flex flex-1 items-center h-screen w-full overflow-hidden md:pt-20 justify-center sm:order-2 '>
        <div className='flex relative justify-center w-[350px] h-[350px] md:w-[100%] md:h-[100%] '>
          <AnimatePresence mode='wait'>
            {images.map((img, index) => (
              index === currentImage && (
                <motion.img
                className='md:h-[300px] md:mt-[120px] lg:mt-[0px] lg:h-[100%]'
                  key={index}
                  src={img}
                  alt={`Image ${index}`}
                  style={{
                    position: 'absolute',
                    // width: '100%',
                    // height: '100%',
                    objectFit: 'cover',
                    left: 0,
                    top: 0,
                  }}
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95,x:-100  }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Home
