import { IKMI } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

interface alertProps {
    amount?: number,
    typePayment?: string,
    username?: string,
    id_unipay?: string,
    status?: boolean
}

const Alert: React.FC = ({ amount, typePayment, username, id_unipay, status }: alertProps) => {
  return (
    <div className={`w-screen h-screen bg-slate-500 z-[999999999999999999] bg-opacity-[0.5] fixed left-0 top-0 overflow-hidden ${status ? 'flex' :'hidden'} duration-100 items-center justify-center`}>
        <div className='relative w-max h-max rounded-[30px] bg-white shadow-lg p-8 text-center'>
           
            <div className='w-full flex items-center justify-between relative top-[-45px]'>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
            </div>

            <div className='absolute cursor-pointer hover:brightness-[90%] active:scale-[0.97] top-[-10px] right-[-10px] w-[40px] h-[40px] border-[3px] border-white bg-red-400 rounded-full flex items-center justify-center text-white'>
                <FaTimes />
            </div>

            <Image 
                src={IKMI}
                alt='logoIKMI'
                className='relative w-[20%] top-[-20px] left-1/2 transform -translate-x-[50%]'
            /> 

            <h2 className='text-green-500 font-bold text-[30px]'>Pembayaran berhasil</h2>
            {/* <p className='text-slate-500 text-[14px]'>Pembayaran Anda telah berhasil.</p> */}
            <hr className='my-6 border-[1px] border-green-200' />
            <p className='text-slate-500'>Total pembayaran</p>
            <h2 className='font-bold mb-4 text-green-500 text-[30px]'>
                IDR. 1.500.000
            </h2>
            <div className='w-full '>
                <div className='bg-green-200 w-full px-9 rounded-full mb-4 border border-white py-3'>
                    <p>Transfer</p>
                </div>
                <div className='bg-green-200 w-full px-9 rounded-full mb-4 border border-white py-3'>
                    <p>12, Oktober 2023</p>
                </div>
            </div>

            <div className='w-full flex items-center justify-between relative bottom-[-45px]'>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
                <div className='w-[30px] h-[30px] bg-white rounded-full'></div>
            </div>

        </div>
    </div>
  )
}

export default Alert
