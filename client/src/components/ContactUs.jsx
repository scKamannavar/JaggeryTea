import React from 'react'
import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import youtube from '../assets/icons/youtube.svg'

const ContactUs = () => {
  return (
    <div className='flex flex-col h-[40vh] p-4  text-white bg-contactBg bg-cover sm:bg-fit'>
        <div className='flex justify-center font-Garamond py-4 text-4xl sm:text-5xl'>
            Keep in Touch
          </div>
        <div className='flex-1 flex flex-col text-xl font-bold font-montser smm:items-end items-center justify-center'> 
            {/* <h1>Email</h1> */}
            <h1>desijaggerytea@gmail.com</h1>  
            <h1>(+91)9449018655</h1>   
        </div> 
        {/* <div className='flex-1 flex h-full flex-col text-xl font-bold  items-center justify-center'>
            <h1>Phone</h1>
            <h1>(+91)9449018655</h1>  
        </div>  */}
        <div className='flex flex-row items-center justify-center smm:justify-end gap-10 sm:gap-20 p-4'>
          <a href="https://instagram.com/desijaggerytea?igshid=MzRlODBiNWFlZA==" target='_blank' className='hover:translate-x-2 duration-500' ><img src={instagram} alt="Instagram" className='w-[30px]' /></a>
          <a href="https://www.facebook.com/profile.php?id=100091894424009&mibextid=ZbWKwL" target='_blank' className='hover:translate-x-2 duration-500'><img src={facebook} alt="facebook" className='w-[30px]' /></a>
          <a href="https://youtube.com/@DesiJaggeryTea" target='_blank' className='hover:translate-x-2 duration-500'><img src={youtube} alt="youtube" className='w-[40px]' /></a>
          <a href="http://api.whatsapp.com/send?phone=919449018655&text=" target='_blank' className='hover:translate-x-2 duration-500'><img src={whatsapp} alt="whatsapp" className='w-[30px]' /></a>              
        </div>

    </div>
  )
}

export default ContactUs
