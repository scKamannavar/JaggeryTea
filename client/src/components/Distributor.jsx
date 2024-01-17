import React,{useEffect} from 'react'
import DistributorImg from '../assets/distributor/distributor.png'
import Button from './Button'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Distributor = () => {

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

  const handleCallNow=()=>{
    window.location.href = 'tel:' + 9513421639
  }

  return (
    <motion.div 
    ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      transition={{ duration: 2 }} 
      className='flex flex-col md:flex-row h-full w-full p-6 bg-red-100 justify-center items-center'>
        <motion.div 
        variants={containerVariants}
        className='flex flex-col flex-1 gap-6 md:px-20'>
            <motion.h1 
            variants={itemVariants}
            className='font-Sans text-[30px] md:text-[40px] font-bold text-center'>
            Maximize your earnings by becoming our distributor in your city!
            </motion.h1>
            <motion.h1
            variants={itemVariants}
            className='font-Cabin text-[20px] font-bold text-gray-500 text-center'>
             Join hands with us to distribute our premium Jaggery Tea powder. Tap into a lucrative opportunity to expand your business and bring the rich flavors of Desi Jaggery's Tea to a broader audience. Start earning more as a key player in our distribution network.
            </motion.h1>
            <motion.div
            variants={itemVariants}
            className='flex justify-center items-center  '>
                <Button onclick={handleCallNow}>Call Now</Button>
            </motion.div>
        </motion.div>
        <motion.div 
        variants={itemVariants}
        className='flex flex-1 items-center justify-center'>
            <img className='w-[400px]' src={DistributorImg} alt="" />
        </motion.div>
    </motion.div>
  )
}

export default Distributor
