'use client'

import Button from '@/components/common/Button'
import TextField from '@/components/common/TextField'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    const [selected, setSelected] = useState('member')

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center space-y-4'>
            <span className='text-2xl font-semibold text-primaryDark tracking-wider '>Sign into your Account</span>
            <div className='border w-[30vw] h-fit text-center p-3 rounded-md space-y-5 shadow-md border-gray-100 py-5'>
                <div className='mx-8 flex'>
                    <button onClick={() => setSelected('PRO')} className={`border p-3 rounded-l-full flex-1  ${selected === 'PRO' && "bg-primaryDark text-white"}`}>
                        <span className={`text-sm ${selected === 'PRO' && 'font-bold'}`}>Public Relation Officer</span>
                    </button>
                    <button onClick={() => setSelected('member')} className={`border p-3 rounded-r-full flex-1 ${selected === 'member' && "bg-primaryDark text-white"}`}>
                        <span className={`text-sm ${selected === 'member' && 'font-bold'}`}>Member</span>
                    </button>
                </div>
                <TextField label={"Email"} inputStyle={"px-8"}/>
                <TextField label={"Password"} type={"password"} inputStyle={"px-8"}/>
                <Button label={"Sign in"} />
            </div>
            <div className='space-x-1'>
                <span className='text-sm '>
                    Don't have an account?
                </span>
                <button onClick={() => router.push('/auth/register')} className='font-semibold text-primaryDark'>
                    Sign up
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login
