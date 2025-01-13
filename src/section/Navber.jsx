import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import logu from '../../public/img/logu.png'
import Menu from '../component/Menu'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";






const Navber = () => {
  return (
    <>


    <header>

      <Container>
    <div className="w-[90%] h-16 bg-white absolute right-0 rounded-l-full flex items-center">
      <div className="w-2/12 h-full flex items-center">
      <Image
        Src={logu}
        Alt={'logu'}
        className={'w-40 px-5'}
      />
      </div>
      <div className="w-6/12 h-full relative flex items-center">
      <ul className='flex gap-5'>

          <div className="flex items-center gap-1">
          <Menu text={'Home'}/>
          <IoIosArrowDown className='text-xs'/>
          <div className="w-10 h-0.5 bg-pink-500 absolute bottom-0"></div>
          </div>
          

          <div className="flex items-center gap-1">
          <Menu text={' About'}/>
          <div className="w-10 h-0.5 bg-pink-500 absolute bottom-0"></div>
          </div>
          


          <div className="flex items-center gap-1">
          <Menu text={'Services'}/>
          <IoIosArrowDown className='text-xs'/>
          <div className="w-20 h-0.5 bg-pink-500 absolute bottom-0"></div>
          </div>

          <div className="flex items-center gap-1">
          <Menu text={'Team'}/>
          <IoIosArrowDown className='text-xs'/>
          <div className="w-10 h-0.5 bg-pink-500 absolute bottom-0"></div>
          </div>

          <div className="flex items-center gap-1">
          <Menu text={'Pages'}/>
          <IoIosArrowDown className='text-xs'/>
          <div className="w-10 h-0.5 bg-pink-500 absolute bottom-0"></div>
          </div>


          <div className="flex items-center gap-1">
          <Menu text={'News'}/>
          <IoIosArrowDown className='text-xs'/>
          <div className="w-10 h-0.5 bg-pink-500 absolute bottom-0"></div>
          </div>


          <div className="flex items-center gap-1">
          <Menu text={'Contact'}/>
          <div className="w-16 h-0.5 bg-pink-500 absolute bottom-0"></div>
          </div>


          </ul>
      </div>
      <div className="w-4/12 h-full flex items-center gap-3 ">
    <div className="gap-2  flex justify-between items-center ">
    <div className="text-xl w-10 h-10 rounded-full bg-blue-200 border-2   border-blue-600 text-blue-600 flex justify-center items-center"><IoSearchSharp /></div>
    <div className="text-xl w-10 h-10 rounded-full bg-blue-200 border-2   border-blue-600 text-blue-600 flex justify-center items-center"><HiOutlineShoppingBag /></div>
    </div>

    <div className="gap-2 p-3 rounded-full text-white text-base font-dm bg-[#3661FC] flex justify-between items-center">
      <button>Free Quote</button>
      <FaArrowRightLong />
      </div>


      </div>
        </div>
      </Container>

    </header>
    </>
  )
}

export default Navber