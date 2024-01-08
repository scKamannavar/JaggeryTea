import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blends from './components/Blends'
import SplitContainer from './components/SplitContainer'
import Footer from './components/Footer'
import HomeSlider from './components/HomeSlider'

function App() {
  const [count, setCount] = useState(0)
  const aboutRef = useRef(null)
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }
  return (
    <>
      <Navbar scrollTo ={scrollToRef} aboutRef={aboutRef}></Navbar>
      {/* <Home></Home> */}
      <HomeSlider/>
      <Blends></Blends>
      <div ref={aboutRef}>
        <SplitContainer order ='1'></SplitContainer>
      </div>
      
      <SplitContainer ></SplitContainer>
      <Footer/>
    </>
  )
}

export default App
