import React from 'react'

const Button = ({ label, handleClick, bgStyle, textStyle }) => {
  return (
    <button onClick={handleClick} className={`rounded-lg px-5 border p-2 ${bgStyle}`}>
      <span className={`text-primaryDark font-semibold ${textStyle}`}>{label}</span>
    </button>
  )
}

export default Button
