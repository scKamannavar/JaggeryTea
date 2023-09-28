import React from 'react'
import BlendSingle from './BlendSingle'

const Blends = () => {
  return (
    <div className='bg-white md:p-12'>
        <div className='flex items-center justify-center h-full md:h-full w-full bg-[#EDE8D7] py-10 flex-wrap'>
            <BlendSingle></BlendSingle>
            <BlendSingle></BlendSingle>
            <BlendSingle></BlendSingle>
            <BlendSingle></BlendSingle>
        </div>
    </div>

  )
}

export default Blends
