import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='flex w-full h-[70vh] items-center justify-center flex-col space-y-6'>
      <span className='text-3xl tracking-wider flex flex-col space-y-5 text-center items-center'>
        <span className='w-3/4'>Get Information from <span className='text-primary font-semibold'>Private</span> and <span className='text-primary font-semibold'>Public</span> groups on campus</span>
        <span className='text-sm font-medium text-primaryDark'>Get Informed on latest news</span>
      </span>
      <Button label={"Explore"}/>
    </div>
  )
}

export default Hero
