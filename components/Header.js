'use client'

import React from 'react'
import Button from './common/Button'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()

  return (
    <div className='p-5 flex justify-between items-center border-b z-10 bg-white h-20 mb-8'>
        <div className='flex items-center relative space-x-1'>
            <div className='w-8 h-8 rounded-tl-full rounded-bl-full bg-primaryDark '/>
            <p className='text-primaryDark font-bold text-2xl'>Unicarp</p>
            <div className='w-8 h-8 rounded-tr-full rounded-br-full bg-primaryDark '/>
        </div>
        <div className='space-x-4'>
            <Button label={"Register"} handleClick={() => router.push('/auth/register')}/>
            <Button label={"Login"} bgStyle={"bg-primaryDark"} textStyle={"text-white"} handleClick={() => router.push('/auth/login')}/>
        </div>
    </div>
  )
}

export default Header
