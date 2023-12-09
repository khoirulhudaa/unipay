import { Success } from '@/assets/images'
import Button from '@/components/button'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SuccessPayment = () => {
  return (
    <div className='flex w-full'>
        <Sidebar type='backToHome' />
        <div className='relative flex flex-col items-center justify-center md:ml-[26%] w-full md:w-[74%] bg-blue-100 h-max md:h-screen border-box pb-6 px-6 pt-5'>
            <Image 
                src={Success}
                alt='succesIcon'
            />
             <h2 className="font-bold mt-5 text-[30px]">Success Payment</h2>
            <p className="mt-2 text-[14px] text-slate-500 w-[50%]">Your payment is successful, it's time to wait for the order to come</p>
            <Link href={'/'}>
                <Button status="primary" text="Back to home" style="mt-10" />
            </Link>
        </div>
    </div>
  )
}

export default SuccessPayment
