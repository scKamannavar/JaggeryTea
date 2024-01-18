import React, { useEffect } from 'react';
import img1 from '../assets/about/about1.jpg';
import img2 from '../assets/about/about2.jpg';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SplitContainer = ({ order, content }) => {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    }
    if (inView2) {
      controls2.start('visible');
    }
  }, [controls1, controls2, inView1, inView2]);

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
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={containerVariants}
        transition={{ duration: 2 }}
        className='flex flex-col md:flex-row h-full md:h-full w-full '>
        <motion.div
          variants={itemVariants}
          className={`flex flex-col flex-1 md:gap-6 justify-center items-center md:items-start py-6 px-6 md:px-20  sm:pl-0 sm:pb-6`}>
          <>
            <div className='font-Cabin font-bold text-4xl md:text-4xl' > About Desi Jaggery'z Tea</div>
            <div className='font-sans text-slate-500 sm:text-xl text-md text-center md:text-left' >{content}</div>
          </>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`flex h-[80vh] sm:h-full justify-center items-center flex-1 object-fit sm:pl-20 order-first`}>
          <img className='h-auto w-auto md:w-100' src={img2} alt="" title="Image by Freepik" />
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={containerVariants}
        transition={{ duration: 2 }}
        className='flex flex-col md:flex-row h-full md:h-full w-full order '>
        <motion.div
          variants={itemVariants}
          className={`flex h-[80vh] sm:h-full justify-center items-center flex-1 object-fit sm:pr-20`}>
          <img className='h-auto w-auto md:w-[100%]' src={img1} alt="" />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`flex flex-col flex-1 md:gap-6 justify-center items-center md:items-start py-6 px-6 md:px-20 order-first sm:pl-0 sm:pb-6 `}>
          <>
            <div className='font-sans text-slate-500 sm:text-xl text-md text-center md:text-left' >Our <span className='text-2xl sm:text-4xl text-black'>vision</span> is to improve global health and well-being by creating and promoting healthy products that enhance people's lives.</div>
            <br />
            <div className='font-sans text-slate-500 sm:text-xl text-md text-center md:text-left' >Our <span className='text-2xl sm:text-4xl text-black'>mission</span> is to empower aspiring entrepreneurs in major cities worldwide, by providing them with the necessary tools, resources, and support to establish successful businesses and contribute to the growth of the world economy.</div>
          </>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SplitContainer;
