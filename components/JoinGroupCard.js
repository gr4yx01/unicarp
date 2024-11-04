import React from 'react'
import { TbUsersGroup } from "react-icons/tb";
import Button from './common/Button';

const JoinGroupCard = ({ group : {name, creator, created, members, status }}) => {
  return (
    <div className='border w-[250px] h-fit rounded-lg p-3 flex-col space-y-2'>
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
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <TbUsersGroup size={20}/>
                <span className='font-medium text-xs'> {members} Members</span>
            </div>
            <Button label={status === 'None' ? "Join" : "Pending"} bgStyle={"bg-primaryDark p-1"} textStyle={"text-white text-xs"}/>
          </div>
    </div>
  )
}

export default JoinGroupCard
