import SweetAlert from '@/components/alert/sweetAlert'
import FormGroup from '@/components/formGroup'
import Sidebar from '@/components/sidebar'
import { Man1, Man2, Man3, Woman1, Woman2, Woman3 } from '@/public/images'
import ProviderMain from '@/redux/provider'
import store from '@/redux/store'
import { updateProfileUseFormik } from '@/utils/validations/updateProfile'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const UpdateProfile = () => {

  const navigate = useRouter()

  const [show, setShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [typePhoto, setTypePhoto] = useState<string>("")

  const handleResponse = (response: string) => {
    if(response === "Successfully for update data account!") {
      setErrorMessage("")
      SweetAlert({
        text:'Berhasil perbarui data pribadi!',
        title: 'Success',
        icon: 'success',
        showCancelButton: false,
        navigate: navigate,
        route: '/profile'
      })
    }
  }

  const handleErrorMessage = (error: string) => {
    setErrorMessage(error)
  }

  const handleChangeTypePhoto = (e: string) => {
    setTypePhoto(e)
  }

  return (
    <div className='flex'>
      
      {/* Sidebar */}
      <Sidebar type='backToHome' router={'/profile'} show={show} />

      <div className='absolute z-[99999] right-4 top-6 rounded-lg border border-blue-500 w-[50px] h-[50px] flex md:hidden flex-col justify-center items-center cursor-pointer hover:brightness-[90%] active:scale-[0.98]' onClick={() => setShow(!show)}>
        <div className='w-full h-max flex flex-col justify-between items-center justify-between cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
          <div className='w-[30px] h-[3px] rounded-full bg-blue-400 my-1'></div>
        </div>
      </div>

      <div className='relative md:ml-[26%] w-full md:w-[70%] bg-blue-100 h-max md:flex block md:items-center md:h-screen border-box pb-6 px-6 pt-5'>
        <div className='w-full md:w-1/2 h-max md:pb-0 pb-5 mb-5 md:mb-0 md:h-screen'>
          <Image 
            src={Man3}
            alt='faceProfile'
          />
          <div className='flex flex-wrap w-full md:w-[90%] items-center justify-center w-full px-2'>
            <div onClick={() => handleChangeTypePhoto('man1')} className='w-[60px] h-[60px] cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden bg-white mx-2 md:m-3'>
              <Image 
                src={Man1}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('man2')} className='w-[60px] h-[60px] cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden m-3'>
              <Image 
                src={Man2}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('man3')} className='w-[60px] border-[2px] border-blue-500 h-[60px] rounded-md shadow-sm overflow-hidden bg-blue-200 m-3'>
              <Image 
                src={Man3}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('woman1')} className='w-[60px] h-[60px] cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden bg-white m-3'>
              <Image 
                src={Woman1}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('woman2')} className='w-[60px] h-[60px] cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden bg-white m-3'>
              <Image 
                src={Woman2}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('woman3')} className='w-[60px] h-[60px] cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden bg-white m-3'>
              <Image 
                src={Woman3}
                alt='optionFace'
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-lg p-4">
          <FormGroup type='updateProfile' typePhoto={typePhoto} handleErrorMessage={(e) => handleErrorMessage(e)} handleResponse={(e) => handleResponse(e)} error={errorMessage} />
        </div>
      </div>

    </div>
  )
}

export default () => (
  <ProviderMain store={store}>
    <UpdateProfile />
  </ProviderMain>
);
