import { Card, Woman2 } from '@/assets/images'
import Button from '@/components/button'
import Image from 'next/image'
import { FaArrowLeft, FaSignOutAlt, FaWallet } from 'react-icons/fa'
import '../../app/globals.css'
import Link from 'next/link'

const Sidebar = ({ type, show }: { type?: string, show?: boolean }) => {
  switch(type) {
    case "auth": 
      return (
        <div className={`fixed flex ${show ? 'z-[99999999] left-[0%] shadow-lg' : 'left-[-100%] md:left-[0%] z-[9999999] '} md:flex bottom-0 w-[80vw] md:w-[26%] bg-blue-200 flex item-center duration-200 justify-center h-screen overflow-hidden`}>

          <div className='absolute flex items-center justify-between w-full px-5 top-5'>
            <h1 className='text-blue-500 font-bold text-[50px] leading-[1.4em]'>Unipay for Campus.</h1>
          </div>
    
          <div className='relative flex items-center justify-center z-[1]'>
            <Image 
              src={Woman2}
              alt='face'
              className='z-40'
            />
            <div className='absolute w-max left-[50%] bottom-[10%] transform -translate-x-1/2 -translate-y-1/2 px-6 h-[50px] rounded-full text-center flex items-center bg-white text-blue-500 shadow-lg z-40'>
              <div className='rounded-full border-[4px] border-white bg-blue-400 flex items-center justify-center text-[24px] mr-4 text-white w-[70px] h-[70px]'>
                <FaWallet />
              </div> 
              Rp. 300.000
            </div>
            <div className='absolute w-[400px] h-[400px] border border-blue-400 rounded-full'></div>
            <div className='absolute w-[300px] h-[300px] border border-blue-400 rounded-full'></div>
            <div className='absolute w-[200px] h-[200px] border border-blue-200 rounded-full'></div>
          </div>
        </div>
      )
    case "backToHome":
      return (
        <div className={`fixed flex ${show ? 'z-[99999999] left-[0%] shadow-lg' : 'left-[-100%] md:left-[0%] z-[9999999] '} md:flex bottom-0 w-[80vw] md:w-[26%] bg-blue-200 duration-200 flex item-center justify-center h-screen overflow-hidden`}>
          <div className='absolute flex items-center justify-between w-full px-5 top-5'>
            <div className='flex items-center w-max rounded-full text-[20px] top-8 bg-white text-blue-500 px-5 py-1 text-center'>
              <p>Rp. 150.000</p>  
            </div>
            <Link href={'/'} className='z-40'>
              <div className='w-[50px] h-[50px] z-[111] p-2 rounded-full overflow-hidden bg-blue-400 flex items-center justify-center cursor-pointer hover:brightnes-[90%] active:scale-[0.96] text-white'>
                <FaArrowLeft />
              </div>
            </Link>
          </div>
    
          <div className='relative flex items-center justify-center z-[1]'>
          <div className='absolute w-[400px] h-[400px] border border-blue-400 rounded-full'></div>
          <div className='absolute w-[300px] h-[300px] border border-blue-400 rounded-full'></div>
          <div className='absolute w-[200px] h-[200px] border border-blue-200 rounded-full'></div>
          </div>
          <Image 
            src={Card}
            alt='Card-image'
            className='w-full absolute left-[50%] transform -translate-x-1/2 -translate-y-1/2 top-[50%] z-[2] scale-[1.8] h-auto'
          />
        </div>
      )
    default :
      return (
        <div className={`fixed flex ${show ? 'z-[99999999] left-[0%] shadow-lg' : 'left-[-100%] md:left-[0%] z-[9999999] '} md:flex bottom-0 w-[80vw] md:w-[26%] bg-blue-200 flex item-center duration-200 justify-center h-screen overflow-hidden`}>
          <div className='absolute flex items-center justify-between w-full px-5 top-5'>
            <div className='flex items-center w-max rounded-full text-[20px] top-8 bg-white text-blue-500 px-5 py-1 text-center'>
              <p>Rp. 150.000</p>  
            </div>
            <Link href={'/auth'} className='z-40'>
              <div className='w-[50px] h-[50px] z-[111] p-2 rounded-full overflow-hidden bg-red-400 flex items-center justify-center cursor-pointer hover:brightnes-[90%] active:scale-[0.96] text-white'>
                <FaSignOutAlt />
              </div>
            </Link>
          </div>
    
          <div className='relative flex items-center justify-center z-[1]'>
          <div className='absolute w-[400px] h-[400px] border border-blue-400 rounded-full'></div>
          <div className='absolute w-[300px] h-[300px] border border-blue-400 rounded-full'></div>
          <div className='absolute w-[200px] h-[200px] border border-blue-200 rounded-full'></div>
          </div>
          <Image 
            src={Card}
            alt='Card-image'
            className='w-full absolute left-[50%] transform -translate-x-1/2 -translate-y-1/2 top-[50%] z-[2] scale-[1.8] h-auto'
          />
          <Button text='Withdraw' status='primary' style='w-[75%] absolute bottom-10 z-40' />
        </div>
      )
  }
}

export default Sidebar