import React from 'react'

const NavbarElements = ({children,scrollTo, sectionRef, setterFunc}) => {

  const handleScroll=()=>{
    scrollTo(sectionRef)
    {setterFunc && setterFunc(false)} 
  }
  return (
    <div className='text-lg text-[#86561F] font-Cabin font-bold cursor-pointer ' onClick={handleScroll} >
      {children}
    </div>
  )
}

export default NavbarElements
