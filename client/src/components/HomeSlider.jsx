import React,{useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Button from './Button'
import Banner1 from '../assets/banner/sliderBanner1.png'
import Banner2 from '../assets/banner/sliderBanner2.png'
import Banner3 from '../assets/banner/sliderBanner3.png'
import Banner4 from '../assets/banner/sliderBanner4.png'
// import Banner3 from '../assets/banner/bg3.png'

const HomeSlider = () => {

  const images = [Banner4,Banner3,Banner2]
  const slideTexts = [
    'BEST TASTE BETTER HEALTH',
    'Second Slide Text',
    'Third Slide Text',
  ];
  const [currentImage, setCurrentImage] = useState(0)
  const totalImages = images.length;


  

  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-full pt-[120px] top-0 md:pt-[0px] overflow-hidden'>
      <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} interval={2000} swipeable={true} showThumbs={false}
      showStatus={false} emulateTouch={true}>
        {images.map((image, index) => (
          <div className='h-full  w-full object-cover ' key={index}>
            <img className='h-full w-screen object-cover ' src={image} alt={`Image ${index}`} />
            {/* <div className='absolute top-[50%] left-[10%] font-Poppins font-bold text-[60px]'>{slideTexts[index]}</div> */}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default HomeSlider
