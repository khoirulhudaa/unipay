import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaPenAlt } from 'react-icons/fa'
import '../../src/app/globals.css'
import { useSelector } from 'react-redux'
import ProviderMain from '@/redux/provider'
import store from '@/redux/store'
import API from '@/services/api'

const History = () => {

  const [show, setShow] = useState(false)
  const [dataUser, setDataUser] = useState<Record<string, any>>({})

  const auth = useSelector((state: any) => state.authSlice.auth)

  useEffect(() => {
    (async () => {
      const response = await API.getAccountById(auth?.user_id)
      setDataUser(response.data.data)
    })()
  }, [dataUser])

  return (
    <div className='flex h-max bg-blue-100'>
        {/* Sidebar */}

        <Sidebar type='backToHome' show={show} />

        <div className='absolute z-[99999] right-4 top-6 rounded-lg border border-blue-500 w-[50px] h-[50px] flex md:hidden flex-col justify-center items-center cursor-pointer hover:brightness-[90%] active:scale-[0.98]' onClick={() => setShow(!show)}>
          <div className='w-full h-max flex flex-col justify-between items-center justify-between cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
            <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
            <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
            <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
          </div>
        </div>

        <div className='relative md:ml-[26%] w-full md:w-[74%] bg-blue-100 h-screen border-box pb-6 px-6 pt-5'>
            <div className='relative mt-[30px] md:mt-0 flex items-center justify-center h-[68%] w-full'>
                <Image 
                  src={dataUser ? `/images/${dataUser.typePhoto}.svg` : 'man1.svg'}
                  alt='faceMemotion'
                  objectFit='contain'
                  layout='fill'
                />
            </div>
            <div className='relative bg-blue-300 rounded-[30px] bg-opacity-30 backdrop-blur-lg backdrop-opacity-60 bottom-0 right-0 w-full h-max md:h-[32%] p-6'>
              <div className='md:flex items-center max-w-full md:overflow-hidden'>
                <div className='text-blue-500'>
                  <h2 className='font-bold text-[24px] md:text-[30px]'>{dataUser ? dataUser.fullName : ''}</h2>
                  <p className='text-slate-400'>{dataUser ? dataUser.NIM : ''} - {dataUser ? dataUser.prodi : ''}</p>
                </div>
                <Link href={`/profile/${dataUser ? dataUser.user_id : ''}`} className='z-40'>
                  <div className='rounded-full md:mt-0 mt-3 md:ml-[30px] p-1 text-white w-[50px] h-[50px] bg-blue-500 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.97]'>
                    <FaPenAlt />
                  </div>
                </Link>
              </div>
              <hr className='my-4' />
              <div className='relative w-full md:w-max h-max flex flex-wrap items-center flex-wrap'>
                <div className='md:flex hidden rounded-full mr-2 mb-2 bg-blue-300 border border-blue-500 w-max h-max px-5 py-2 text-blue-500 text-center'>
                  Years, 2021
                </div>
                <div className='md:flex hidden rounded-full mr-2 mb-2 bg-blue-300 border border-blue-500 w-max h-max px-5 py-2 text-blue-500 text-center'>
                  Iam {dataUser ? dataUser.gender : ''}
                </div>
                <div className='md:flex hidden rounded-full mr-2 mb-2 bg-blue-300 border border-blue-500 w-max h-max px-5 py-2 text-blue-500 text-center'>
                  IKMI CIREBON
                </div>
                <div className='rounded-full mr-2 mb-2 bg-blue-300 border border-blue-500 w-max h-max px-5 py-2 text-blue-500 text-center'>
                {dataUser ? dataUser.email : ''}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default () => (
  <ProviderMain store={store}>
    <History />
  </ProviderMain>
);

