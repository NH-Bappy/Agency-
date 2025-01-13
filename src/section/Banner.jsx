import React from 'react'
import Contact from './Contact'
import Navber from './Navber'
import Container from '../component/Container'
import Text from '../component/Text'
import Btn from '../component/Btn'

const Banner = () => {
  return (
    <>
    <div className="">
    <div className="bg-banneri bg-no-repeat bg-center bg-cover">
    <Contact/>
    <Navber/>
    <div className="py-40">
    <Container className={'flex'}>
      <div className="w-1/12"></div>
      <div className="w-5/12">
      <Text text={'Your Trusted Ortencey Agency'} tag={"p"} className={'py-5 text-base font-medium font-dm bg-gradient-to-r from-[#FE651B] via-[#FFAA52] to-[#FFAA52] text-transparent bg-clip-text'}/>

      <Text text={'Our Digital Agency With Excellence Services'} tag={"h1"} className={'py-5 leading-[60px] text-4xl text-white font-semibold font-dm'}/>

      <Text text={'The 3 golden rules professional Digital Marketing Agency don’twant you to know about.'} tag={"p"} className={'leading-10 py-5 text-base text-white font-medium font-dm'}/>

      <Btn btnText={'Discover More'} className={'text-base font-medium font-dm bg-gradient-to-r from-[#FE651B] via-[#FE651B] to-[#FFAA52] text-white'}/>
      </div>
    </Container>
    </div>
    </div>
</div>
    </>
  )
}

export default Banner