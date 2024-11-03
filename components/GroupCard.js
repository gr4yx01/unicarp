import { useRouter } from 'next/navigation';
import React from 'react'
import { TbUsersGroup } from "react-icons/tb";

const GroupCard = ({ group:  { name, creator, created, members} }) => {
  const router = useRouter()

  return (
    <div onClick={() => router.push('/user/group/1293')} className='border w-[250px] h-fit rounded-lg p-3 flex-col space-y-2'>
          <span className='font-semibold text-primaryDark'>{name}</span>
          <div className=''>
          <div className='font-medium text-xs'>
            <span>Creator: </span>
            <span>{creator}</span>
          </div>
          </div>
          <div className='font-medium text-xs'>
            <span>Created: </span>
            <span>{created}</span>
          </div>
          <div className='flex items-center gap-3'>
            <TbUsersGroup size={20}/>
            <span className='font-medium text-xs'> {members} Members</span>
          </div>
    </div>
  )
}

export default GroupCard
