import React from 'react'
import SplitContainer from './SplitContainer'

const AboutUs = () => {

    const aboutContent = ['DESI JAGGERY TEA is a premium brand of jaggery tea that offers a unique and flavorful tea experience. Our teas are made from the finest ingredients and are designed to promote health and wellness. We always believe that tea should be more than just a beverage. It should be an experience that invigorates the senses and promotes well-being. We offer a variety of blends, including classic plain jaggery tea, masala jaggery tea, elaichi jaggery tea, lemon jaggery tea, jaggery hot coffee, jaggery cold coffee and more. At DESI JAGGERY TEA, From our premium quality blends to our commitment to sustainability and ethical sourcing we are committed to providing our customers with the best possible tea experience and wellness through the power of tea and coffee.',
                          'Our vision is to improve global health and well-being by creating and promoting healthy products that enhance people\'\s lives.'  
                        ]
  return (
    <div className='h-full md:pb-10'>
        {/* <div className='flex justify-center font-Cabin py-6 text-4xl sm:text-5xl'>
            About Desi Jaggery Tea
          </div> */}
        <SplitContainer order ='1' content={aboutContent[0]}></SplitContainer>
        {/* <SplitContainer  /> */}
    </div>
  )
}

export default AboutUs
