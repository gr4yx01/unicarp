'use client'

import Button from '@/components/common/Button'
import TextField from '@/components/common/TextField'
import React from 'react'
import { useRouter } from 'next/navigation'

const Register = () => {
    const router = useRouter()

  return (
    <div className='flex h-screen w-full justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <div className='space-y-4 flex flex-col items-center'>
                <span className='text-2xl font-semibold text-primaryDark tracking-wider'>Register your account</span>
                <div className='border w-[28vw] h-fit text-center p-3 rounded-md space-y-5 shadow-md border-gray-100 py-5'>
                    <TextField label={"Name"} inputStyle={"px-8"}/>
                    <TextField label={"Email"} inputStyle={"px-8"}/>
                    <TextField label={"Faculty"} inputStyle={"px-8"}/>
                    <TextField label={"Department"} inputStyle={"px-8"}/>
                    <TextField label={"Password"} type={"password"} inputStyle={"px-8"}/>
                    <Button label={"Sign up"} />
                </div>
                <div className='space-x-1'>
                    <span className='text-sm '>
                        Already have an account?
                    </span>
                    <button onClick={() => router.push('/auth/login')} className='font-semibold text-primaryDark'>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
