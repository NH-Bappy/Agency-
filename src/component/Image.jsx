import React from 'react'

const Image = ({Src,Alt,className}) => {
  return (
    <img src={Src} alt={Alt} className={`${className}`}/>
  )
}

export default Image