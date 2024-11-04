import React from 'react'
import Button from '../common/Button'

const MemberCard = ({ member : { name, status }}) => {
  console.log(status)
  return (
    <div className='w-2/5 border rounded-lg h-16 p-5 flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <span className='font-medium'>{name}</span>
        </div>
        <div>
          {
            status === 'banned' && (
              <Button label={"Restore"}/>
            )
          }
          {
            status === 'pending' && (
              <Button label={"Approve"}/>
            )
          }
          {
            status === 'member' && (
              <div className='flex gap-2'>
                <Button label={"Remove"}/>
                <Button label={"Ban"}/>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default MemberCard
