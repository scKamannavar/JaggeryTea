import React, { useEffect } from 'react';
import BlendSingle from './BlendSingle';

import plain from '../assets/products/jplainPowder.png';
import elaichi from '../assets/products/jelaichiPowder.png';
import coffee from '../assets/products/jcoffeePowder.png';
import lemon from '../assets/products/jlemonPowder.png';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blends = () => {
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
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <div className='bg-white md:p-12'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={containerVariants}
        transition={{ duration: 5 }}
        className=' bg-[#EDE8D7] '
      >
        <div className='flex justify-center font-Garamond pt-6 text-5xl'>
          Our Blends
        </div>
        <motion.div
          variants={containerVariants}
          className='flex items-center justify-center h-full md:h-full w-full  bg-[#EDE8D7]  bg-repeat bg-h  py-10 flex-wrap'
        >
          <motion.div variants={itemVariants}>
            <BlendSingle
              image={plain}
              desc='Indulge in the pure essence of Desi Jaggery with our signature Plain Tea blend.'
            >
              Jaggery Plain Tea
            </BlendSingle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <BlendSingle
              image={elaichi}
              desc=' Experience the rich fusion of Desi Jaggery and aromatic cardamom in every sip of our Elaichi-infused Tea.'
            >
              Jaggery Elaichi Tea
            </BlendSingle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <BlendSingle
              image={lemon}
              desc=' Refresh your senses with the zesty twist of lemon combined with the sweetness of Desi Jaggery in our Lemon Tea.'
            >
              Jaggery Lemon Tea
            </BlendSingle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <BlendSingle
              image={coffee}
              desc='Embrace the unique fusion of Jaggery and Coffee in our special blend, a delightful choice for a cozy sip.'
            >
              Jaggery Coffee
            </BlendSingle>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blends;
