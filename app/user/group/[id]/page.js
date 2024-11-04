'use client'

import Button from '@/components/common/Button'
import Members from '@/components/Members'
import Messages from '@/components/Messages'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'

const GroupDetail = () => {
  const [selected, setSelected] = useState('messages')
  const router = useRouter()

  const view  = {
    'members': Members,
    'messages': Messages
  }

  const CurrentPage = view[selected]

  return (
    <>
    <div className='space-y-4 sticky top-0 bg-white mb-4'>
        <button onClick={() => router.back()} className='p-3 border flex justify-center items-center rounded-full w-12 h-12'>
          <IoArrowBack size={28} />
        </button>
      <div className='p-1 flex items-center gap-3'>
        <span className='font-semibold text-3xl text-primaryDark'>NACOS 0'24</span>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <button onClick={() => setSelected('messages')} className={`p-4 border outline-none rounded-lg ${selected === 'messages' ? "text-white font-semibold bg-primaryDark" : "text-primaryDark font-semibold"}`}>
            Messages
          </button>
          <button onClick={() => setSelected('members')} className={`p-4 border outline-none rounded-lg ${selected === 'members' ? "text-white font-semibold bg-primaryDark" : "text-primaryDark font-semibold"}`}>
            Members
          </button>
        </div>
        <Button label={"Leave Group"} />
      </div>
    </div>
      <div className='space-y-5 '>  
        <CurrentPage />
      </div>
    </>
  )
}

export default GroupDetail
