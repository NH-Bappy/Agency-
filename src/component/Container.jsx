import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-Container m-auto ${className}`} >
        {children}
    </div>
  )
}

export default Container