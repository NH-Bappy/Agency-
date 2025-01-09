import React from 'react'

const Menu = ({className,text}) => {
  return (
    <li className={`text-bl text-base font-dm ${className}`}>{text}</li>
  )
}

export default Menu