import { parseMarkdown } from '@/helper/markdown'
import useMessage from '@/store/message'
import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

const MessageDetail = () => {
    const setViewMoreClick = useMessage((state) => state.setViewMoreClick)
    const message = useMessage((state) => state.message)

    const parsedDescription = parseMarkdown(message?.description)

    const backToMessage = () => {
        setViewMoreClick(false)
    }

    console.log(message)

  return (
    <div className='space-y-4'>
        <button onClick={backToMessage}>
            <IoArrowBackCircleOutline size={30}/>
        </button>
        <div className='flex flex-col space-y-3 justify-start items-center'>
          <span className='font-semibold text-3xl text-secondary'>{message?.title}</span>
          <div className='text-sm'>
            <span>Published: </span>
            <span>{message?.created}</span>
          </div>
          <div
          className='w-1/3 text-left leading-7 pt-5' 
            dangerouslySetInnerHTML={{ __html: parsedDescription }}
        />
          {/* <span>{message?.description}</span> */}
        </div>
    </div>
  )
}

export default MessageDetail
