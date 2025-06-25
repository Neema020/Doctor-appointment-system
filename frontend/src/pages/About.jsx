import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image}alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Prescripto is a smart and user-friendly doctor appointment booking system designed to simplify healthcare access. We connect patients with trusted medical professionals, allowing them to book consultations easily from anywhere. Our mission is to reduce wait times and make scheduling seamless, secure, and efficient. With Prescripto, managing your health is just a few clicks away.</p>
          <p>Whether you're seeking a general consultation or a specialist, Prescripto ensures you find the right doctor at the right time. Our platform is built with a focus on simplicity, security, and speed — empowering both patients and healthcare providers. By streamlining communication and appointment management, Prescripto helps create a more efficient and connected healthcare experience for everyone.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to revolutionize healthcare accessibility by making doctor appointments convenient, transparent, and technology-driven. We aim to build a connected ecosystem where patients and doctors can interact seamlessly, leading to better health outcomes, reduced wait times, and empowered decision-making for every individual.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p> Our platform reduces wait times and streamlines the appointment process, helping you connect with doctors faster.</p>

        </div >
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Book appointments anytime, from anywhere — no more standing in queues or long phone calls.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Get tailored doctor recommendations and health services based on your preferences and medical needs.</p>

        </div>
      </div>
      
    </div>
  )
}

export default About
