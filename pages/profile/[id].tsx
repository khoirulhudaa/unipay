import { Line, Man1, Man2, Man3, Woman1, Woman2, Woman3 } from '@/assets/images'
import FormGroup from '@/components/formGroup'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const UpdateProfile = () => {

    const [dataProfile, setDataProfile] = useState<Record<string, any>>({})
    const [show, setShow] = useState(false)

    useEffect(() => {

    }, [])

  return (
    <div className='flex'>
      
      {/* Sidebar */}
      <Sidebar type='backToHome' show={show} />

      <div className='absolute z-[99999] right-4 top-6 rounded-lg border border-blue-500 w-[50px] h-[50px] flex md:hidden flex-col justify-center items-center cursor-pointer hover:brightness-[90%] active:scale-[0.98]' onClick={() => setShow(!show)}>
        <div className='w-full h-max flex flex-col justify-between items-center justify-between cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
        </div>
      </div>

      <div className='relative md:flex z-[-2] items-center md:ml-[26%] w-full md:w-[74%] bg-blue-100 h-max md:h-screen border-box pb-6 px-6 pt-5'>
        <div className='w-full md:w-1/2 h-max md:pb-0 pb-5 mb-5 md:mb-0 md:h-screen'>
          <Image 
            src={Man3}
            alt='faceProfile'
          />
          <div className='flex flex-wrap items-center justify-center md:justify-start w-full px-2'>
            <div className='w-[60px] h-[60px] rounded-md shadow-sm overflow-hidden bg-white mx-2 md:m-3'>
              <Image 
                src={Man1}
                alt='optionFace'
              />
            </div>
            <div className='w-[60px] border-[2px] border-blue-500 h-[60px] rounded-md shadow-sm overflow-hidden bg-blue-200 m-3'>
              <Image 
                src={Man2}
                alt='optionFace'
              />
            </div>
            <div className='w-[60px] h-[60px] rounded-md shadow-sm overflow-hidden bg-white m-3'>
              <Image 
                src={Woman1}
                alt='optionFace'
              />
            </div>
            <div className='w-[60px] h-[60px] rounded-md shadow-sm overflow-hidden bg-white m-3'>
              <Image 
                src={Woman2}
                alt='optionFace'
              />
            </div>
            <div className='w-[60px] h-[60px] rounded-md shadow-sm overflow-hidden bg-white m-3'>
              <Image 
                src={Woman3}
                alt='optionFace'
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-lg p-4">
          <FormGroup type='updateProfile' />
        </div>
      </div>

    </div>
  )
}

export default UpdateProfile
