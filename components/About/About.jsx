import React from 'react'
import mask from "../../assets/image/Mask-group.png"

 function About() {
  return (
  <section className=' py-20 px-6 lg:px-20'>
    <div className='max-w-7xl mx-auto flex flex-col lg:flex-row item-center gap-16' >
      <div className='lg:w-1/2' > <img src={mask} alt="mask img" className='w-full '  /></div>
    </div>
    <div className='lg:w-1/2'>
        <h2 className='text-4xl font-bold leading-tight'>We Help You To Find Your Dream Home </h2>
        <P className ='text-gray leading-8 mt-6'> From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</P>
        <div flex justify-between mt-2>
            <div> <h3 className='text-4xl font-bold '>8K</h3>
            <p className='text-gray-500 mt-2'>Houses Available</p>
            </div>
            <div><h3 className='text-4xl font-bold '>6K</h3>
            <p className='text-gray-500 mt-2'>Houses Sold</p></div>
            <div><h3 className='text-4xl font-bold '>2K+</h3>
            <p className='text-gray-500 mt-2'>Trusted Agents</p></div>
        </div>
    </div>
  </section> 
  )
}
export default About;