import React,{useEffect} from 'react'
import ProductFiller from '../assets/banner/powderBox.png'
import Button from './Button'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const ProductsFiller = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6, // Adjust the stagger duration as needed
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40,},
    
  };
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={containerVariants}
    transition={{ duration: 2 }} 
    className='flex flex-col md:flex-row h-full items-center justify-center w-full relative bg-fixed bg-fillerProductBg md:px-24 md:m-6' >
        <motion.div
        variants={itemVariants}
         className='flex flex-1 p-4 text-2xl font-bold text-center font-Cabin items-center justify-center '>
            <h1>"Explore our premium tea blends, Enjoy richness in every cup"</h1>
        </motion.div>
        <motion.div
        variants={itemVariants}
         className='flex flex-1 items-center justify-center  '>
            {/* <Button scrollTo={scrollTo} sectionRef={blendsRef}> Discover our Products</Button> */}
            <Button> SHOP NOW</Button>
        </motion.div>
        <motion.div
        variants={itemVariants}       
        className='flex flex-1 items-center justify-center' id='imagee'>
            <img src={ProductFiller} className='h-full w-full' alt="" />
        </motion.div>
    </motion.div>
  )
}

export default ProductsFiller
