import React from 'react'

const NavbarElements = ({children,scrollTo, sectionRef, setterFunc, footer}) => {

  const handleScroll=()=>{
    scrollTo(sectionRef)
    {setterFunc && setterFunc(false)} 
  }
  return (
    <div className={`md:text-sm lg:text-lg text-[#86561F] font-Cabin font-bold ${footer&&'text-xs md:text-xs lg:text-xs'} cursor-pointer hover:text-yellow-500`} onClick={handleScroll} >
      {children}
    </div>
  )
}

export default NavbarElements
