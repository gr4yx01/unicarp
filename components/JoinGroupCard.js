import React from 'react'
import { TbUsersGroup } from "react-icons/tb";
import Button from './Button';

const JoinGroupCard = () => {
  return (
    <div className='border w-[250px] h-fit rounded-lg p-3 flex-col space-y-2'>
          <span className='font-semibold text-primaryDark'>NACOS 0'24</span>
          <div className=''>
          <div className='font-medium text-xs'>
            <span>Creator: </span>
            <span>Computer Science</span>
          </div>
          </div>
          <div className='font-medium text-xs'>
            <span>Created: </span>
            <span>14th January, 2024</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <TbUsersGroup size={20}/>
                <span className='font-medium text-xs'> 24 Members</span>
            </div>
            <Button label={"Join"} bgStyle={"bg-primaryDark p-1"} textStyle={"text-white text-xs"}/>
          </div>
    </div>
  )
}

export default JoinGroupCard
