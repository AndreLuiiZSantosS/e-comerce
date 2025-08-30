import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-lg font-semibold'>Our Mission</p>
          <p>To provide the best online shopping experience for our customers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To offer a wide range of high-quality products at competitive prices.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
          <p>Quality Assurance</p>
          <p className='text-gray-600'>We source our products from trusted suppliers to ensure quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
          <p>Convenience</p>
          <p className='text-gray-600'>We offer a seamless shopping experience with easy navigation and fast checkout.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
          <p>Exceptional Customer Service</p>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist you.</p>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About
