import React from 'react'
import useMessage from '@/store/message'
import MainMessages from './MainMessages'
import MessageDetail from '../MessageDetail'

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
