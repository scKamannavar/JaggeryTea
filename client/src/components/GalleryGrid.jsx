import React from 'react'

import Banner2 from '../assets/banner/sliderBanner2.png'
import Banner3 from '../assets/banner/sliderBanner3.png'
import Banner4 from '../assets/banner/sliderBanner4.png'
import Gallery1 from '../assets/gallery/gallery1.jpg'
import Gallery2 from '../assets/gallery/gallery2.jpg'
import Gallery3 from '../assets/gallery/gallery3.jpg'
import Gallery4 from '../assets/gallery/gallery4.jpg'
import Gallery5 from '../assets/gallery/gallery5.jpg'
import Gallery6 from '../assets/gallery/gallery6.jpg'
import Gallery7 from '../assets/gallery/gallery7.jpg'
import Gallery8 from '../assets/gallery/gallery8.jpg'
const GalleryGrid = () => {
    const images = [Gallery1,
        Gallery2,
        Gallery3,
        Gallery4,
        Gallery5,
        Gallery6,
        Gallery7,
        Gallery8]
  return (
    <div className=' py-10 h-full'>
        <div className='flex items-center justify-center'>
            <h1 className='text-[32px] font-Cabin'>
                Gallery
            </h1>
        </div>
        <div className='grid h-full grid-cols-3 md:grid-cols-4 gap-4 p-4 md:p-10'>
            {images.map((img)=>(
                <div className='flex relative object-fill bg-green-100  border-[6px] border-solid border-[#723C18] aspect-w-1 aspect-h-1 '>
                    <img className=' bg-green-100 object-cover w-full h-full hover:scale-105 transition-transform duration-700 overflow-hidden' src={img}  />  
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default GalleryGrid
