'use client'

import React from 'react'
import useMessage from '@/store/message'
import messages from '@/data/messages.json'
import Button from '../common/Button'
import useProGroup from '@/store/proGroup'
import useProMembers from '@/store/proMember'

const MainMessages = () => {
    const setViewMoreClicked = useMessage((state) => state.setViewMoreClick)
    const setMessageToEdit = useProMembers((state) => state.setMessageToEdit)
    const setSelected = useProGroup((state) => state.setSelected)

    const handleDelete = (message) => {
        // setViewMoreClicked(true)
        // setMessage(message)
    }

    const handleEdit = (message) => {
        setSelected('edit')
        setMessageToEdit(message)
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
            <div className='gap-3 flex'>
                <Button label={"Edit"} bgStyle={"p-1"} textStyle={"text-sm"} handleClick={() => handleEdit(message)}/>
                <Button label={"Delete"} bgStyle={"p-1"} textStyle={"text-sm text-red-500"} handleClick={() => handleDelete(message)}/>
            </div>
            </div>
        ))
    }
    </>
  )
}

export default MainMessages
