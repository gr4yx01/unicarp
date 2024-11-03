'use client'

import React, { useEffect, useState } from 'react'
import GroupCard from './GroupCard'
import JoinGroupCard from './JoinGroupCard'
import availableGroups from '@/data/discover.json'

const Discover = () => {
    const [selected, setSelected] = useState('public')
    const [groups, setGroups] = useState([])
    
    useEffect(() => {
      const filter = availableGroups?.filter((group) => group?.visibility === selected)
      setGroups(filter)
    }, [selected])

  return (
    <div className='flex flex-col space-y-7'>
      <span className='font-semibold text-2xl text-primaryDark'>Discover New Groups</span>
      <div className='flex gap-2'>
        <button onClick={() => setSelected('public')} className={`p-5 border outline-none rounded-lg ${selected === 'public' ? "text-white font-semibold bg-primaryDark" : "text-primaryDark font-semibold"}`}>
          Public
        </button>
        <button onClick={() => setSelected('private')} className={`p-5 border outline-none rounded-lg ${selected === 'private' ? "text-white font-semibold bg-primaryDark" : "text-primaryDark font-semibold"}`}>
          Private
        </button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {
          groups?.map((group) => (
            <JoinGroupCard group={group} />
          ))
        }
      </div>
    </div>
  )
}

export default Discover
