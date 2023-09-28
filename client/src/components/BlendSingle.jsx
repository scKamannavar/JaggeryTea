import React from 'react'

const BlendSingle = () => {
  return (
    <div className={`flex flex-col justify-center items-center gap-3 pt-12 h-[500px] w-[350px] bg-window bg-center bg-no-repeat bg-contain`}>
        <div className='font-Montser font-semibold text-md'>LEMON JAGGERY TEA</div>
        <div className='flex justify-center items-center h-[150px] w-[150px] rounded-full overflow-hidden'>
            <img src="https://jkfenner.com/wp-content/uploads/2019/11/default.jpg" alt="" />
        </div>
        <div className='text-center text-sm font-Montser text-slate-600 px-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquamconsectetur adipisicing elit. Quidem aliquam.</div>
        <div id='orderButton'> 
            <button type='button' className='flex justify-center border border-black p-4 text-xs font-Montser'>
                ORDER NOW !
            </button>
        </div>
    </div>
  )
}

export default BlendSingle
