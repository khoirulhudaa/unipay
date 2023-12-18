"use client"
import Alert from '@/components/alert'
import SweetAlert from '@/components/alert/sweetAlert'
import FormGroup from '@/components/formGroup'
import InputField from '@/components/inputField'
import Sidebar from '@/components/sidebar'
import { isEqual } from '@/helpers'
import { Building, Canteen, PKKMB, Purple2, Sertification, Test, Transfer, UP } from '@/public/images'
import { authSignIn } from '@/redux/authSlice'
import ProviderMain from '@/redux/provider'
import store from '@/redux/store'
import API from '@/services/api'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './globals.css'

const DynamicTable = dynamic(() => import('../components/table'), {
  ssr: false,
});

const Home = () => {

  const [typePayment, setTypePayment] = useState<string>('tf-administration')
  const [statusModal, setStatusModal] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [show, setShow] = useState<boolean>(false)
  const [dataUser, setDataUser] = useState<Record<string, any>>({})

  const auth = useSelector((state: any) => state.authSlice.auth)
  const dispatch = useDispatch()
  console.log('auth', auth)

  useEffect(() => {
    (async () => {
      const response = await API.getAccountById(auth?.user_id)
      if(!isEqual(dataUser, response.data.data)) {
        dispatch(authSignIn(response.data.data))
        setDataUser(response.data.data)
      }
    })()
  }, [dataUser, dispatch])

  const handleFormAdmin = (type: string, typeForm: string ) => {
    localStorage.setItem('typePayment', type)
    setStatusModal(true)
    setTypePayment(typeForm)
    setShow(false)
  }

  const handleCloseModal = () => {
    setStatusModal(false)
  }

  const handleResponse = (response: string) => {
    if(response === "Password successfully reset!") {
      setErrorMessage("")
      SweetAlert({
        text:`Pembayaran ${typePayment} berhasil!`,
        title: 'Success',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Masuk kembali',
      })
    }
  }

  const handleErrorMessage = (error: string) => {
    setErrorMessage(error)
  }

  return (
    <div className='relative w-screen h-screen flex'>

      {/* Alert */}
      <Alert />
      
      {/* Sidebar */}
      <Sidebar show={show} onClick={() => handleFormAdmin('Top-up', 'Top-up')} />

      <div className='absolute z-[99999] right-4 top-6 rounded-lg border border-blue-500 w-[50px] h-[50px] flex md:hidden flex-col justify-center items-center cursor-pointer hover:brightness-[90%] active:scale-[0.98]' onClick={() => setShow(!show)}>
        <div className='w-full h-max flex flex-col justify-between items-center justify-between cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
        </div>
      </div>

      {/* Form sidebar */}
      <div className={`w-full md:w-[74vw] overflow-hidden fixed items-center right-0 flex top-0 h-screen duration-100 ease ${statusModal ? 'z-[999999] bg-blue-500' : 'z-[-1] bg-blue-100'}`}>
        <div className={`w-[60%] md:block hidden relative ${statusModal ? 'top-[0%]' : 'top-[100%]'} duration-300 ease-in h-screen bg-blue-300 bg-opacity-[0.5] p-6`}>
          <div className='mb-5 text-white'>
            <InputField 
              label='Username'
              name='unipay_id'
              // onChange={() => null)} 
              placeholder="Cari nama pengguna..." 
            />
          </div>
          <div className='flex items-center flex-wrap w-full'>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
            <div className='rounded-full mx-2 my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.97] overflow-hidden w-[60px] h-[60px] bg-white'></div>
          </div>
        </div>
        <div className={`relative w-full md:w-[40%] ${statusModal ? 'bottom-[0%]' : 'bottom-[100%]'} duration-300 ease-in h-screen bg-blue-100 p-6`}>
          {/* form */}
          <FormGroup type={typePayment} typePayment={typePayment ?? ''} onClick={handleCloseModal} handleResponse={(e) => handleResponse(e)} handleErrorMessage={(e) => handleErrorMessage(e)} />
        </div>
      </div>

      {/* Main menu */}
      <div className='relative md:ml-[26%] w-full md:w-[74%] bg-blue-100 h-max border-box pb-6 px-4 md:px-6 pt-7 md:pt-5'>

        {/* Intro */}
        <div className='w-full md:w-[80%] md:ml-[30px] flex items-center mb-[40px] md:mb-6 z-[999999]'>
          <div>
            <Link href={'/profile'}>
              <div className='w-[50px] h-[50px] overflow-hidden rounded-full bg-slate-400 mr-4 active:scale-[0.98]'>
                <Image 
                  src={`/images/${dataUser ? dataUser.typePhoto : ''}.svg`}
                  alt='fotoFace'
                  width={100}
                  height={100}
                  />
              </div>
            </Link>
          </div>
          <div>
            <div className='md:flex items-center'>
              <p className='overflow-hidden md:flex hidden max-w-[94%] whitespace-nowrap overflow-ellipsis'>
                {dataUser?.fullName} 
              </p>
              <p className='font-normal bg-blue-300 rounded-full px-4 py-1 text-center text-white md:ml-2'>
                {dataUser.NIM}
              </p>
            </div>
          </div>
        </div>
        
        {/* Card and menu payments */}
        <div className='w-full h-max md:h-1/2 flex items-center justify-between'>
          <div className='w-full md:flex items-center relative h-max md:h-full rounded-lg'>
            
            <div className='hidden md:inline w-[50%] h-[250px] md:h-[250px] relative'>
              <Image 
                src={Purple2}
                alt='cardImage'
                className='absolute left-0 top-0 md:mt-[-20px]'
              />
              <div className='z-[222] absolute text-white text-[24px] md:bottom-[135px] left-[50px] flex items-center justify-between'>
                <p>{dataUser?.accountNumber ? dataUser.accountNumber.replace(/(\d{4})/g, '$1 ') : 0}</p>
              </div>
              <div className='z-[222] absolute text-white md:bottom-[40px] left-[50px]'>
                <p>Account name</p>
                <small>{dataUser?.fullName}</small>
              </div>
            </div>

            <div className='w-full md:w-[50%] h-[215px]'>
              <div className='md:w-[103%] w-full z-[4444] h-full py-2 px-2 md:px-8 md:left-[-50px] bg-blue-200 relative bottom-1 rounded-[20px] flex flex-col items-center'>
                <div className='w-full h-1/2 flex md:flex-no-wrap flex-wrap items-center justify-between'>
                  <div className='text-center flex flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('Semesteran', 'tf-administration')} className='w-[50px] h-[50px] p-3 rounded-full bg-orange-300 border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                        src={Building}
                        alt='icon'
                        /> 
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>Semesteran</small>
                  </div>
                  <div className='text-center flex flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('PKKMB', 'tf-administration')} className='w-[50px] h-[50px] p-3 rounded-full bg-purple-400 border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                        src={PKKMB}
                        alt='icon'
                        /> 
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>PKKMB</small>
                  </div>
                  <div className='text-center flex flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('UTS', 'tf-administration')} className='w-[50px] h-[50px] p-3 rounded-full bg-blue-400 border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                        src={Test}
                        alt='icon'
                        /> 
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>UTS</small>
                  </div>
                  <div className='text-center flex flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('UAS', 'tf-administration')} className='w-[50px] h-[50px] p-3 rounded-full bg-[#bef264] border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                        src={Test}
                        alt='icon'
                        /> 
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>UAS</small>
                  </div>
                  <div className='text-center hidden md:flex flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('Sertification', 'tf-administration')} className='w-[50px] h-[50px] p-3 rounded-full bg-red-400 border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                        src={Sertification}
                        alt='icon'
                        /> 
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>Sertification</small>
                  </div>
                </div>
                <div className='w-full h-1/2 flex items-center justify-between'>
                  <div className='text-center flex flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('UP', 'tf-administration')} className='w-[50px] h-[50px] p-3 rounded-full bg-cyan-300 border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                        src={UP}
                        alt='icon'
                        /> 
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>Remedial</small>
                  </div>
                  <div className='text-center flex flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('Canteen', 'tf-administration')} className='w-[50px] h-[50px] p-3 rounded-full bg-[#38bdf8] border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                        src={Canteen}
                        alt='icon'
                        /> 
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>Canteen</small>
                  </div>
                  <div className='text-center flex md:hidden flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('Sertification', 'tf-administration')} className='w-[50px] h-[50px] p-3 rounded-full bg-red-400 border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                        src={Sertification}
                        alt='icon'
                        />  
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>Sertification</small>
                  </div>
                  <div className='text-center flex flex-col items-center justify-center w-[25%] md:w-[50px]'>
                    <div onClick={() => handleFormAdmin('Transfer', 'transfer')} className='w-[50px] h-[50px] p-3 rounded-full bg-yellow-200 border border-white flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                      <Image 
                          src={Transfer}
                          alt='icon'
                        />  
                    </div>  
                    <small className='mt-2 font-normal text-[12px] text-slate-600'>Transfer</small>
                  </div>
                  <div className='w-[50px] h-[50px] p-3 hidden md:flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                  </div>  
                  <div className='w-[50px] h-[50px] p-3 hidden md:flex items-center justify-center flex-col text-center cursor-pointer hover:brightness-[90%] active:scale-[0.96] duration-100'>
                  </div>  
                </div>
              </div>
            </div>
          
          </div>
        </div>

        <div className='relative w-full md:w-[92%] z-[222222] ml-auto mr-auto mt-6 mb-[40px]'>
          <div className='w-full mb-6 md:flex items-center justify-between'>
            <h2 className='text-[26px]'>History</h2>
            <div className='flex items-center md:mt-0 mt-6'>
              <div className='text-center text-[14px] md:text-[16px] md:ml-5 rounded-full border border-blue-500 bg-blue-500 text-white w-max px-4 py-2 cursor-pointer hover:brightness-[90%] active:scale-[0.96]'>
                Transfer
              </div>
              <div className='text-center text-[14px] md:text-[16px]  ml-2 md:ml-5 rounded-full border border-blue-500 w-max px-4 py-2 hover:bg-blue-200 cursor-pointer active:scale-[0.96]'>
                Administrasi
              </div>
              <div className='text-center text-[14px] md:text-[16px] ml-2 md:ml-5 rounded-full border border-blue-500 w-max px-4 py-2 hover:bg-blue-200 cursor-pointer active:scale-[0.96]'>
                Canteen
              </div>
            </div>
          </div>
          <DynamicTable />
        </div>
      </div>

    </div>
  )
}

export default () => (
  <ProviderMain store={store}>
    <Home />
  </ProviderMain>
);