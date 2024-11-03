'use client'

import React, { useState } from 'react'
import GroupCard from './GroupCard'
import JoinGroupCard from './JoinGroupCard'

const Discover = () => {
    const [selected, setSelected] = useState('public')

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
        <JoinGroupCard />
        <JoinGroupCard />
        <JoinGroupCard />
        <JoinGroupCard />
        <JoinGroupCard />
        <JoinGroupCard />
      </div>
    </div>
  )
}

export default Discover
