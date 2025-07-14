import Button from '@/components/Button'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='h-full min-h-[calc(100vh-164px)] w-full flex flex-col items-center justify-center lg:flex-row'>
      <div className="h-1/2 w-full lg:w-1/2 flex items-center">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-snug sm:leading-[3rem] lg:leading-[4.5rem] tracking-wide">
            Better design for your digital products.
          </h1>
          <p className="font-light text-gray-300 text-sm md:text-base lg:text-xl leading-6 tracking-wider">
            Turning your Idea into Reality. We bring together the teams from the global tech industry.
          </p>
          <Button url='/portfolio' text='See Our Works' />
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[510px] lg:-mt-20 flex items-center justify-center px-4">
        <Image src='/hero.png' fill alt='' className='object-contain p-4' priority />
      </div>
    </div>
  )
}

export default Home
