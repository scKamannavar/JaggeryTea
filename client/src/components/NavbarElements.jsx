import React from 'react'

const NavbarElements = ({children,scrollTo, sectionRef, setterFunc}) => {

  const handleScroll=()=>{
    scrollTo(sectionRef)
    setterFunc(false)
  }
  return (
    <div className='text-sm font-Montser font-bold text-slate-700 cursor-pointer ' onClick={handleScroll} >
      {children}
    </div>
  )
}

export default NavbarElements
