import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='h-full min-h-[calc(100vh-164px)]'>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-8 text-center">Let's Keep in Touch</h1>
      <div className="flex w-full mt-14">
        <div className="hidden lg:block relative w-1/2 h-[400px]">
          <Image src='/contact.png' alt='' fill className='object-contain' />
        </div>
        <div className="w-full lg:w-1/2 h-[400px] flex items-center justify-center">
          <form action="" className='flex flex-col gap-3 w-full'>
            <input className='outline-none p-3 border border-gray-300 w-full lg:w-[400px] rounded-md' type="text" name='name' placeholder='Enter your name' />
            <input className='outline-none p-3 border border-gray-300 w-full lg:w-[400px] rounded-md' type="text" name='email' placeholder='Enter your email' />
            <textarea className='outline-none p-3 border border-gray-300 w-full lg:w-[400px] rounded-md' name="message" rows={8} placeholder='Enter your message'></textarea>
            <Button url='/' text='Send' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
