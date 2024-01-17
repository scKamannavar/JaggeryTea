import React, { useEffect } from 'react';
import FranchiseImg from '../assets/franchise/franchise.jpg';
import Button from './Button';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Franchise = () => {
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
      className='flex flex-col md:flex-row h-full w-full p-6  justify-center items-center'
    >
      <motion.div
        variants={itemVariants}
        className='flex flex-1 items-center justify-center'
      >
        <img className='w-[400px]' src={FranchiseImg} alt='' />
      </motion.div>
      <motion.div
      variants={containerVariants}
        className='flex flex-col flex-1 gap-6 md:px-20'
      >
        <motion.h1 
        variants={itemVariants}
         className='font-Sans text-[30px] md:text-[40px] font-bold text-center'>
          Say goodbye to other high franchise costs!
        </motion.h1>
        <motion.h1
        variants={itemVariants}
         className='font-Cabin md:text-[24px] text-[20px] text-gray-500 font-bold text-center'>
          Open our tea franchise for free and start earning more. Join our tea legacy without any initial investment. Seize the chance to share the delight of Desi Jaggery's Tea in your community. Begin your entrepreneurial journey with us today.
        </motion.h1>
        <motion.div
        variants={itemVariants}
        className='flex justify-center items-center'>
          <Button onclick={handleCallNow}>Call Now</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Franchise;
