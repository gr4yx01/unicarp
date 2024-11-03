import React from 'react'
import Button from './Button'
import MainMessages from './MainMessages'
import useMessage from '@/store/message'
import MessageDetail from './MessageDetail'

const Messages = () => {
    const viewMoreClicked = useMessage((state) => state.viewMoreClicked)

  return (
   <>
   {
    !viewMoreClicked ? (
        <MainMessages />
    ) : <MessageDetail />
   }
   </>
  )
}

export default Messages
