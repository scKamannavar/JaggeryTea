import React from 'react'
import DistributorImg from '../assets/distributor/distributor.png'
import Button from './Button'
const Distributor = () => {
  return (
    <div className='flex flex-col md:flex-row h-full w-full p-6 bg-red-100 justify-center items-center'>
        <div className='flex flex-col flex-1 gap-6 md:px-20'>
            <h1 className='font-Sans text-[30px] md:text-[40px] font-bold text-center'>
            Maximize your earnings by becoming our distributor in your city!
            </h1>
            <h1 className='font-Cabin text-[20px] font-bold text-center'>
             Join hands with us to distribute our premium Jaggery Tea powder. Tap into a lucrative opportunity to expand your business and bring the rich flavors of Desi Jaggery's Tea to a broader audience. Start earning more as a key player in our distribution network.
            </h1>
            <div className='flex justify-center items-center  '>
                <Button>Call Now</Button>
            </div>
        </div>
        <div className='flex flex-1 items-center justify-center'>
            <img className='w-[400px]' src={DistributorImg} alt="" />
        </div>
    </div>
  )
}

export default Distributor
