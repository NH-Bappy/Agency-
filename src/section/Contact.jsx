import React from 'react'
import Container from '../component/Container'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from '../component/Image';
import flag from '../../public/img/Rectangle 4447.png'
import { FaAngleDown } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
    <Container className={'pt-3'}>
        <div className="w-[85%] h-7 bg-top rounded-r-full flex justify-between">
          <div className="flex items-center">            
            <p className='font-dm text-white text-xs pl-20 pr-5'>Welcome to Ortencey Digital Market Agency</p>
            <div className="w-[1px] h-4  bg-bc flex self-center"></div>
            <div className="flex items-center px-3 gap-x-1">
            <FaPhoneAlt className='text-Ic text-xs' />
            <data value="number" className='text-white text-xs'>+88 ( 5548 ) 6548</data>
            </div>
            <div className="w-[1px] h-4  bg-bc flex self-center"></div>

            <div className="flex items-center px-3 gap-x-1">
            <MdEmail className='text-Ic text-xs' />
            <data value="gmail" className='text-white text-xs'>infoyour@gmail.com</data>
            </div>
            <div className="w-[1px] h-4  bg-bc flex self-center"></div>
            </div>

          <div className="flex items-center gap-3">
          <div className="flex items-center">
          <Image
          Src={flag}
          Alt={"flag"}
          className={'w-4 h-3 items-center'}
          />
          <p className='font-dm text-white text-xs px-1'>English</p>
          <FaAngleDown className='text-white text-xs' />
          </div>
          <div className="flex gap-2">
          <div className="flex gap-2">
          <GrFacebookOption className='text-bc hover:text-Ic'/>
          <div className="w-[1px] h-4  bg-bc flex self-center"></div>
          </div>
          <div className="flex gap-2">
          <FaLinkedinIn className='text-bc hover:text-Ic' />
          <div className="w-[1px] h-4  bg-bc flex self-center"></div>
          </div>
          <div className="flex gap-2">
          <FaTwitter className='text-bc hover:text-Ic'/>
          <div className="w-[1px] h-4  bg-bc flex self-center"></div>
          </div>
          <FaYoutube className='text-bc hover:text-Ic'/>
          <div className="w-[1px] h-4"></div>
          </div>
          </div>
        </div>

    </Container>
    </>
  )
}

export default Contact