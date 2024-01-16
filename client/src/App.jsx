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
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import ProductsFiller from './components/ProductsFiller';
import Franchise from './components/Franchise';
import Distributor from './components/Distributor';
import Gallery from './components/Gallery';
import GalleryGrid from './components/GalleryGrid';
import TeaStallsBar from './components/TeaStallsBar';
// import GallerySlick from './components/GallerySlick';

function App() {
  const [count, setCount] = useState(0)
  const aboutRef = useRef(null)
  const homeRef = useRef(null)
  const blendsRef = useRef(null)
  const contactRef = useRef(null)
  const franchiseRef = useRef(null)
  const distributorRef = useRef(null)
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
      <div>
       
      </div>
      <Navbar 
        scrollTo ={scrollToRef}
        aboutRef={aboutRef}
        homeRef={homeRef}
        blendsRef={blendsRef}
        contactRef={contactRef}
        >
      </Navbar>
      

      <div ref={homeRef} >
        <HomeSlider/>
        {/* <Home scrollTo ={scrollToRef} blendsRef={blendsRef} ></Home> */}
      </div>
      <div>
        <ProductsFiller/>
      </div>
      <div ref={aboutRef}>
        <AboutUs/>
      </div>
      
      <div ref={blendsRef} >
        <Blends/>
      </div>
      <div ref={franchiseRef}>
        <Franchise/>
      </div>
      <div ref={distributorRef}>
        <Distributor/>
      </div>
      <div>
        {/* <Gallery/> */}
        <GalleryGrid/>
      </div>
      <div ref={contactRef}>
        <ContactUs/>
      </div>
      <Footer/>
    </>
  )
}

export default App
