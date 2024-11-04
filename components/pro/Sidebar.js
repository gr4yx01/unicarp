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
    router.push('/pro/dashboard')
  }

  return (
    <div className='h-screen w-1/6  border-r border-gray-300  flex flex-col items-center justify-between p-7 sticky top-0'>
      <div className='flex flex-col space-y-10 items-center'>
      <div className='flex items-center relative space-x-1'>
            <div className='w-8 h-8 rounded-tl-full rounded-bl-full bg-primaryDark '/>
            <p className='text-primaryDark font-bold text-2xl'>Unicarp</p>
            <div className='w-8 h-8 rounded-tr-full rounded-br-full bg-primaryDark '/>
        </div>
        <ol className='space-y-10'>
          <li onClick={() => handleClick('groups')} className={`flex space-x-5 p-5 px-8 ${currentPage === 'groups' && " bg-primaryDark text-white rounded-lg"}`}>
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
