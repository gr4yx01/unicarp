import React from 'react'

const MemberCard = ({ member: { name, status }}) => {
  return (
    <div className='w-2/5 border rounded-lg h-12 p-3 flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <span className='font-medium'>{name}</span>
        </div>
        <span className='text-sm font-semibold text-primaryDark'>2020/244411</span>
    </div>
  )
}

export default MemberCard
