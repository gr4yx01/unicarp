'use client'

import Button from '@/components/common/Button'
import Members from '@/components/pro/Members'
import Messages from '@/components/pro/Messages'
import useProMembers from '@/store/proMember'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import groupMembers from '@/data/members.json'
import CreateMessage from '@/components/pro/CreateMessage'
import EditMessage from '@/components/pro/EditMessage'
import useProGroup from '@/store/proGroup'

const GroupDetail = () => {
  const selected = useProGroup((state) => state.selected)
  const setSelected = useProGroup((state) => state.setSelected)
  const currentMemberState = useProMembers((state) => state.currentState)
  const setCurrentMemberState = useProMembers((state) => state.setCurrentState)
  const setMembers = useProMembers((state) => state.setMembers)
  const router = useRouter()

  const view  = {
    'members': Members,
    'messages': Messages,
    'post': CreateMessage,
    'edit': EditMessage
  }

  const CurrentPage = view[selected]

  const handleClick = (state) => {
    setCurrentMemberState(state)
  }
  
  useEffect(() => {
    const filter = groupMembers?.filter((member) => member?.status === currentMemberState)
    setMembers(filter)
  }, [currentMemberState])

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
        <div className='space-x-3'>
          <Button label={"Post"} handleClick={() => setSelected('post')}/>
          <Button label={"Delete Group"} textStyle={"text-red-500 text-sm "}/>
        </div>
      </div>
      <div className='flex gap-3'>
        {
          selected === 'members' && (
            <>
              <Button handleClick={() => handleClick('member')} label={"Group"} bgStyle={`${currentMemberState === 'member' && "bg-primaryDark"}`} textStyle={`${currentMemberState === 'member' && "text-white"}`}/>
              <Button handleClick={() => handleClick('banned')}  label={"Banned"} bgStyle={`${currentMemberState === 'banned' && "bg-primaryDark"}`} textStyle={`${currentMemberState === 'banned' && "text-white"}`}/>
              <Button handleClick={() => handleClick('pending')}  label={"Requests"} bgStyle={`${currentMemberState === 'pending' && "bg-primaryDark"}`} textStyle={`${currentMemberState === 'pending' && "text-white"}`}/>
            </>
          )
        }
      </div>
    </div>
      <div className='space-y-5 '>  
        <CurrentPage />
      </div>
    </>
  )
}

export default GroupDetail
