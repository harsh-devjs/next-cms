import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const About = () => {
  return (
    <div className='w-full h-full min-h-[calc(100vh-164px)]'>
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg'
          fill
          alt=''
          className='object-cover grayscale-100'
        />

        <div className="absolute bottom-2 lg:bottom-6 left-2 lg:mr-auto lg:left-6 bg-green-600 text-white p-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider">Digital Storytellers</h1>
          <h2 className="text-xl md:text-2xl font-bold tracking-wider">Handcrafting award winning digital experiences.</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10 lg:text-justify">
        <div className="">
          <h1 className="text-3xl font-bold py-8 tracking-wide">Who Are We?</h1>
          <p className="text-light text-gray-300 md:text-lg tracking-wide">
            At our core, we believe in simplifying content creation and management without compromising on performance or flexibility. Our CMS is built using Next.js, offering developers and content creators a fast, scalable, and modern platform to bring their digital projects to life.
            <br />
            <br />
            With a user-friendly interface and powerful backend integration, our system enables real-time content updates, seamless collaboration, and full customization. Whether you're managing a personal blog, business site, or a complex web application, our CMS adapts to your needs effortlessly.
            <br />
            <br />
            We're continuously evolving to stay ahead of the curve, focusing on speed, security, and a smooth user experience. Our mission is to empower teams and individuals to build better websites—faster and smarter—with the technology they can trust.
          </p>
        </div>
        
        <div className="flex flex-col gap-10 items-start">
          <div className="">

            <h1 className="text-3xl font-bold py-8 tracking-wide">What We Do?</h1>
            <p className="text-light text-gray-300 lg:text-lg tracking-wide">
              At our CMS platform, we focus on helping businesses and creators manage content efficiently through a modern, performance-driven approach. Our solutions are designed to be flexible, reliable, and scalable for projects of all sizes. Here's what we do:
            </p>
            <ul className='flex flex-col gap-3 mt-4'>
              <li>- Creative Illustrations</li>
              <li>- Dynamic Websites</li>
              <li>- Fast and Handy Mobile Apps</li>
            </ul>
          </div>

          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}

export default About 
