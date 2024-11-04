'use client'

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6"
import Button from '../common/Button';
import usePage from '@/store/page';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const setCurrentPage = usePage((state) => state.setCurrentPage)
  const currentPage = usePage((state) => state.currentPage)
  const router = useRouter()

  const handleClick = (page) => {
    setCurrentPage(page)
    router.push('/user/dashboard')
  }

  return (
    <div className='h-screen w-1/6  border-r border-gray-300  flex flex-col items-center justify-between p-7 sticky top-0'>
      <div className='flex flex-col space-y-10 items-center'>
        <p className='text-4xl font-semibold text-primaryDark'>Unimart</p>
        <ol className='space-y-10'>
          <li onClick={() => handleClick('home')} className={`flex space-x-5 p-5 px-8 ${currentPage === 'home' && " bg-primaryDark text-white rounded-lg"}`}>
            <IoHomeOutline size={20}/>
            <span className='font-semibold'>Home</span>
          </li>
          <li onClick={() => handleClick('discover')} className={`flex space-x-5 p-5 px-8 ${currentPage === 'discover' && " bg-primaryDark text-white rounded-lg"}`}>
          <FaPeopleGroup size={20} />
            <span className='font-semibold'>Groups</span>
          </li>
          <li onClick={() => handleClick('profile')} className={`flex space-x-5 p-5 px-8 ${currentPage === 'profile' && " bg-primaryDark text-white rounded-lg"}`}>
            <FaRegUserCircle size={20}/>
            <span className='font-semibold'>Profile</span>
          </li>
        </ol>
      </div>
      <Button label={"Logout"} />
    </div>
  )
}

export default Sidebar
