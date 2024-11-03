'use client'

import { useEffect, useState } from 'react'
import GroupCard from './GroupCard'
import groups from '@/data/groups.json'

const UserHomePage = () => {
    const [selected, setSelected] = useState('public')
    const [selectedGroups, setSelectedGroups] = useState([])

    useEffect(() => {
        const result = groups?.filter((group) => group?.visibility === selected)

        setSelectedGroups(result)
    }, [selected])

  return (
    <div className='flex flex-col space-y-7'>
      <span className='font-semibold text-2xl text-primaryDark'>Welcome back 👋</span>
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
            selectedGroups?.map((group) => (
                <GroupCard group={group} />
            ))
        }
      </div>
    </div>
  )
}

export default UserHomePage
