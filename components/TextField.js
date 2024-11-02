import React from 'react'

const TextField = ({ label, type, placeholder, inputStyle }) => {
  return (
    <div className={`flex flex-col items-start space-y-1 ${inputStyle}`}>
      <span className='text-gray-500 text-sm'>{label}</span>
      <input type={type} placeholder={placeholder} className='border rounded-md p-2 w-full outline-none'/>
    </div>
  )
}

export default TextField
