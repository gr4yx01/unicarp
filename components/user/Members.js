'use client'

import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import MemberCard from './MemberCard'
import members from '@/data/members.json'

console.log(members)

const Members = () => {
  const [result, setResult] = useState([])

  useEffect(() => { 
    const filter = members?.filter((member) => member?.status === 'member')
    setResult(filter)
  }, [members])

  return (
    <div className='space-y-5'>
        <span>Total Members: {result?.length}</span>
        {
          result?.map((member) => (
            <MemberCard member={member} />
          ))
        }
    </div>
  )
}

export default Members
