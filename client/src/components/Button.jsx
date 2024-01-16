import React from 'react'

const Button = ({children, onclick, onOrder, scrollTo, sectionRef,color }) => {
  const handleClick=()=>{
    {onclick&&onclick()}
    {onOrder&&onOrder()}
    {scrollTo && 
      console.log('scrollTO ---',scrollTo(sectionRef)) 
      scrollTo(sectionRef)}
  }
  return (
    <div id='orderButton'> 
        <button type='button' onClick={handleClick} className={`flex justify-center border border-black py-2 px-6 text-xs m-2  hover:bg-black ${color && 'text-white bg-black'}  hover:text-white transition-colors duration-400`}>
           {children}
        </button>
    </div>
  )
}

export default Button
