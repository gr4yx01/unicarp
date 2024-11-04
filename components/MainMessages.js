'use client'

import React from 'react'
import Button from './common/Button'
import useMessage from '@/store/message'
import messages from '@/data/messages.json'

const MainMessages = () => {
    const setViewMoreClicked = useMessage((state) => state.setViewMoreClick)
    const setMessage = useMessage((state) => state.setMessage)

    const handleClick = (message) => {
        setViewMoreClicked(true)
        setMessage(message)
    }

  return (
    <>
    {
        messages?.map((message) => (
        <div key={message?.id} className='w-2/4 border rounded-lg h-20 p-3 flex justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <span className='font-semibold'>{message?.title}</span>
                <span className='text-sm'>{message?.created}</span>
            </div>
            <Button label={"View more"} bgStyle={"p-1"} handleClick={() => handleClick(message)}/>
            </div>
        ))
    }
    </>
  )
}

export default MainMessages
