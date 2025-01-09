import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import logu from '../../public/img/logu.png'
import Menu from '../component/Menu'
import { IoIosArrowDown } from "react-icons/io";


const Navber = () => {
  return (
    <>

    <header>
    <Container>
    <div className="w-[85%] h-16 bg-white absolute right-12 rounded-l-full flex items-center justify-between">
      <div className="w-2/12 h-full flex items-center">
      <Image
        Src={logu}
        Alt={'logu'}
        className={'w-40 px-5'}
      />
      </div>
      <div className="w-5/12 h-full relative flex items-center">
      <ul>
          <div className="">
          <div className="flex items-center">
          <Menu text={'Home'}/>
          <IoIosArrowDown />
          </div>
          <div className="w-5 h-1 bg-pink-500 absolute bottom-0"></div>
          </div>
          </ul>
      </div>
      <div className="w-4/12 h-full"></div>
          
        </div>
    </Container>

    </header>
    </>
  )
}

export default Navber