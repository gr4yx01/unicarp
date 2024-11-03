'use client'

import Discover from '@/components/Discover'
import Profile from '@/components/Profile'
import UserHomePage from '@/components/UserHomePage'
import usePage from '@/store/page'
import { useEffect, useState } from 'react'

const pages =  [UserHomePage, Discover, Profile]


const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentPage = usePage((state) => state.currentPage)

  const getPageIndex = (page) => {
    switch(page) {
      case 'home':
        return 0;
      case 'discover':
        return 1;
      case 'profile':
        return 2;
      default:
        return -1
    }
  }

  useEffect(() => {
    setCurrentIndex(getPageIndex(currentPage))
  }, [currentPage])

  const PageComponent = pages[currentIndex]
  
  return (
    <div className='space-y-5'>
      <PageComponent />
    </div>
  )
}

export default Dashboard
