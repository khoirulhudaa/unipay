import { KHS } from '@/assets/images'
import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'

const Table = () => {
  return (
    <div className='w-full'>
        <div className='w-full flex items-center justify-between py-4 duration-100 active:scale-[0.99] border-b border-green-400 mb-2 cursor-pointer'>
            <div className='w-max md:w-[40%] flex items-center'>
                <div className='w-[50px] h-[50px] mr-3 rounded-md overflow-hidden bg-white shadow-md'>
                    <Image 
                        src={KHS}
                        alt='iconTypePayment'
                    />
                </div>
                <div>
                    <h3>KHS</h3>
                    <small>3 November 2023</small>
                </div>
            </div>
            <div className='w-max'>
                <div className='flex items-center w-max bg-red-400 py-2 px-3 text-white rounded-full'>
                    <div className='md:flex hidden'>
                        <FaArrowDown />
                    </div>
                    <p className='text-[12px] md:text-[16px] flex md:ml-2 items-center text-center'>
                        Rp. 100.000
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-between py-4 duration-100 active:scale-[0.99] border-b border-green-400 mb-2 cursor-pointer'>
            <div className='w-max md:w-[40%] flex items-center'>
                <div className='w-[50px] h-[50px] mr-3 rounded-md overflow-hidden bg-white shadow-md'>
                    <Image 
                        src={KHS}
                        alt='iconTypePayment'
                    />
                </div>
                <div>
                    <h3>Top-up</h3>
                    <small>3 November 2023</small>
                </div>
            </div>
            <div className='w-max'>
                <div className='flex items-center w-max bg-green-400 py-2 px-3 text-white rounded-full'>
                    <div className='md:flex hidden'>
                        <FaArrowDown />
                    </div>
                    <p className='text-[12px] md:text-[16px] flex md:ml-2 items-center text-center'>
                        Rp. 100.000
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-between py-4 duration-100 active:scale-[0.99] border-b border-green-400 mb-2 cursor-pointer'>
            <div className='w-max md:w-[40%] flex items-center'>
                <div className='w-[50px] h-[50px] mr-3 rounded-md overflow-hidden bg-white shadow-md'>
                    <Image 
                        src={KHS}
                        alt='iconTypePayment'
                    />
                </div>
                <div>
                    <h3>KHS</h3>
                    <small>3 November 2023</small>
                </div>
            </div>
            <div className='w-max'>
                <div className='flex items-center w-max bg-red-400 py-2 px-3 text-white rounded-full'>
                    <div className='md:flex hidden'>
                        <FaArrowDown />
                    </div>
                    <p className='text-[12px] md:text-[16px] flex md:ml-2 items-center text-center'>
                        Rp. 100.000
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table
