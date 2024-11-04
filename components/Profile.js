import React from 'react'
import Button from './common/Button'

const Profile = () => {
  return (
    <div className='justify-center flex flex-col p-10 space-y-7 border rounded-lg items-center w-2/4'>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='bg-gray-200 w-32 h-32 rounded-full'>
            </div>
        </div>
        <div className='w-full flex justify-between items-center'>
            <span>Name: </span>
            <input type='text' className='border p-2 rounded-lg w-96 outline-none' value={"Henry Nnamani"} />
        </div>
        <div className='w-full flex justify-between items-center'>
            <span>Email: </span>
            <input type='text' className='border p-2 rounded-lg w-96 outline-none' value={"henrynnamani12304@gmail.com"} />
        </div>
        <div className='w-full flex justify-between items-center'>
            <span>Faculty: </span>
            <input type='text' className='border p-2 rounded-lg w-96 outline-none' value={"Physical Sciences"} />
        </div>
        <div className='w-full flex justify-between items-center'>
            <span>Department: </span>
            <input type='text' className='border p-2 rounded-lg w-96 outline-none' value={"Computer Sciences"} />
        </div>
        <div className='w-full flex justify-between items-center'>
            <span>Academic Level: </span>
            <input type='text' className='border p-2 rounded-lg w-96 outline-none' value={"100"} />
        </div>
        <Button label={"Update"} />
    </div>
  )
}

export default Profile
