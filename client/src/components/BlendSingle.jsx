import React from 'react'
import Button from './Button'


const BlendSingle = ({children,image,desc}) => {
  const handleOrder=()=>{
    window.open(`https://wa.me/919449018655?text=Hello! I'm interested in purchasing ${children} from Desi Jaggery Tea. Can you please provide me with more details and assist with my order?`,'_blank')  
  }
  return (
    <div className={`flex flex-col justify-center items-center gap-3 pt-12 h-[500px] w-[350px] bg-window bg-center bg-no-repeat bg-contain hover:scale-110 duration-300 `}>
        <div className='font-semibold text-md'>{children}</div>
        <div className='flex justify-center items-center h-[150px] w-[150px] rounded-full overflow-hidden'>
            <img src={image} alt="" />
        </div>
        <div className='text-center text-md font-Cabin text-slate-600 px-12'>{desc}</div>
        <div id='orderButton'> 
            {/* <button type='button' className='flex justify-center border border-black py-3 px-4 text-xs font-Montser'>
                ORDER NOW !
            </button> */}
            <Button onOrder={handleOrder}>ORDER NOW !</Button>
        </div>
    </div>
  )
}

export default BlendSingle
