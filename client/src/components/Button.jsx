import React from 'react'

const Button = ({children, onclick}) => {
  return (
    <div id='orderButton'> 
        <button type='button' onClick={onclick} className='flex justify-center border border-black py-2 px-6 text-xs m-2  hover:bg-black hover:text-white transition-colors duration-400'>
           {children}
        </button>
    </div>
  )
}

export default Button
