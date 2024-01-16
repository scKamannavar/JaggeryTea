import React from 'react'

const TeaStallsBar = () => {
  return (
    <div className='flex items-center animate-marquee whitespace-nowrap justify-center md:h-10 h-6  p-4 bg-[#723C18]'>
        <marquee className='flex flex-row md:text-xl text-yellow-200 font-bold'>
        <h1>
            We supply desi Jaggery'z  tea premix for all teastall/ cafe franchises | Call now For details 9449018655
        </h1>

       
        </marquee> 
        {/* <marquee className='text-xl font-bold'>
        We supply desi Jaggery'z  tea premix for all teastall/ cafe franchises
        </marquee>  */}
    </div>
  )
}

export default TeaStallsBar
