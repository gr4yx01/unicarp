'use client'

import { useEffect, useState } from 'react'
import groups from '@/data/groups.json'
import GroupCard from './GroupCard'
import Button from '../common/Button'

const Groups = () => {
    const [selected, setSelected] = useState('public')
    const [selectedGroups, setSelectedGroups] = useState([])

    useEffect(() => {
        const result = groups?.filter((group) => group?.visibility === selected)

        setSelectedGroups(result)
    }, [selected])

  return (
    <div className='flex flex-col space-y-7'>
      <span className='font-semibold text-2xl text-primaryDark'>Welcome PRO 👋</span>
      <div className='flex justify-between w-full items-center'>
        <div className='flex gap-2'>
          <button onClick={() => setSelected('public')} className={`p-5 border outline-none rounded-lg ${selected === 'public' ? "text-white font-semibold bg-primaryDark" : "text-primaryDark font-semibold"}`}>
            Public
          </button>
          <button onClick={() => setSelected('private')} className={`p-5 border outline-none rounded-lg ${selected === 'private' ? "text-white font-semibold bg-primaryDark" : "text-primaryDark font-semibold"}`}>
            Private
          </button>
        </div>
        <Button label={"Create Group"} bgStyle={"p-1"} textStyle={"text-sm"} />
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

export default Groups
