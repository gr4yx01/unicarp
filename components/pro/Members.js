import React from 'react'
import MemberCard from './MemberCard'
import useProMembers from '@/store/proMember'

const Members = () => {
  const members = useProMembers((state) => state.members)

  return (
    <div className='space-y-5'>
        <span>Total Members: {members?.length}</span>
        {
          members?.map((member) => (
            <MemberCard member={member} />
          ))
        }
    </div>
  )
}

export default Members
