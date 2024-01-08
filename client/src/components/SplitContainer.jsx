import React from 'react'

const SplitContainer = ({order}) => {
  return (
    <div className='flex flex-col md:flex-row h-screen md:h-[60vh] w-full order'>
      <div className='flex h-full flex-1'>
        <img className='h-full w-full md:w-[90%]' src="https://jkfenner.com/wp-content/uploads/2019/11/default.jpg" alt="" />
      </div>
      <div className={`flex flex-col flex-1 md:gap-6 justify-center items-center md:items-start py-6 px-6 md:p-20 ${order && 'order-first'} `}>
      
          <div className=' font-Montser font-bold text-sm text-left'><h1>Best Taste Better Health</h1></div>
          <div className='font-Garamond text-4xl md:text-6xl' >Desi Jaggery Tea</div>
          <div className=' font-Garamond text-slate-500 text-md text-center md:text-left' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita cupiditate dolorum voluptas quae animi sit nam veniam voluptatibus quidem labore sapiente dolores molestiae excepturi saepe aspernatur vero veritatis, nostrum quaerat!</div>

      </div>
    </div>
  )
}

export default SplitContainer
