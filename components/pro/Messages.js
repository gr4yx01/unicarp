import React from 'react'
import Button from '../common/Button'
import useMessage from '@/store/message'
import MainMessages from '../pro/MainMessages'
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
