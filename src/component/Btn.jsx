import React from 'react'

const Btn = ({btnText,className}) => {
  return (
    <button className={`p-3 rounded-full text-white text-base font-dm bg-cyan-500 ${className}`}>{btnText}</button>
  )
}

export default Btn