import SweetAlert from '@/components/alert/sweetAlert'
import FormGroup from '@/components/formGroup'
import Sidebar from '@/components/sidebar'
import { Man1, Man2, Man3, Woman1, Woman2, Woman3 } from '@/public/images'
import { authSignIn } from '@/redux/authSlice'
import ProviderMain from '@/redux/provider'
import store from '@/redux/store'
import API from '@/services/api'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UpdateProfile = () => {

  const navigate = useRouter()

  const [show, setShow] = useState<boolean>(false)
  const [update, setUpdate] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [typePhoto, setTypePhoto] = useState<string>("")
  const [dataUser, setDataUser] = useState<Record<string, any>>({})

  const auth = useSelector((state: any) => state.authSlice.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const response = await API.getAccountById(auth?.user_id)
      setDataUser(response.data.data)
      dispatch(authSignIn(response.data.data))
      setUpdate(false)
    })()
  }, [update])

  const handleResponse = (response: string) => {
    if(response === "Successfully for update data account!") {
      setErrorMessage("")
      setUpdate(true)
      SweetAlert({
        text:'Berhasil perbarui data pribadi!',
        title: 'Berhasil',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Lanjut',
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

      <div className='relative md:ml-[26%] w-full bg-blue-100 h-max md:flex block md:items-center md:min-h-screen border-box pb-6 px-2 md:px-6 pt-5'>
        <div className='retive w-full md:w-1/2 h-max md:pb-0 pb-5 mb-5 md:mb-0 md:h-screen'>
          <div className='relative h-[60%]'>
            <Image 
              src={`/images/${typePhoto ? typePhoto : dataUser?.typePhoto}.svg`}
              alt='faceProfile'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <p className='mb-4 flex md:mt-0 mt-[50px] ml-3 md:hidden'>Foto akun</p>
          <div className='relative flex flex-wrap w-[80%] md:w-[90%] items-center md:mb-0 mb-6 md:justify-center w-full px-2'>
            <div onClick={() => handleChangeTypePhoto('man1')} className={`w-[50px] h-[50px] md:w-[60px] md:h-[60px] ${typePhoto === 'man1' ? 'border-[2px] border-blue-500 bg-blue-200' : dataUser?.typePhoto === 'man1' ? 'hidden' : ''} cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden mr-3 mb-3 md:m-3`}>
              <Image 
                src={Man1}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('man2')} className={`w-[50px] h-[50px] md:w-[60px] ${typePhoto === 'man2' ? 'border-[2px] border-blue-500 bg-blue-200' : dataUser?.typePhoto === 'man2' ? 'hidden' : ''} md:h-[60px] cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden mr-3 mb-3 md:m-3`}>
              <Image 
                src={Man2}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('man3')} className={`w-[50px] h-[50px] md:w-[60px] md:h-[60px] ${typePhoto === 'man3' ? 'border-[2px] border-blue-500 bg-blue-200' : dataUser?.typePhoto === 'man3' ? 'hidden' : ''} hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden mr-3 mb-3 md:m-3`}>
              <Image 
                src={Man3}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('woman1')} className={`w-[50px] h-[50px] md:w-[60px] md:h-[60px] ${typePhoto === 'woman1' ? 'border-[2px] border-blue-500 bg-blue-200' : dataUser?.typePhoto === 'woman1' ? 'hidden' : ''} cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden mr-3 mb-3 md:m-3`}>
              <Image 
                src={Woman1}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('woman2')} className={`w-[50px] h-[50px] md:w-[60px] md:h-[60px] ${typePhoto === 'woman2' ? 'border-[2px] border-blue-500 bg-blue-200' : dataUser?.typePhoto === 'woman2' ? 'hidden' : ''} cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden mr-3 mb-3 md:m-3`}>
              <Image 
                src={Woman2}
                alt='optionFace'
              />
            </div>
            <div onClick={() => handleChangeTypePhoto('woman3')} className={`w-[50px] h-[50px] md:w-[60px] md:h-[60px] ${typePhoto === 'woman3' ? 'border-[2px] border-blue-500 bg-blue-200' : dataUser?.typePhoto === 'woman3' ? 'hidden' : ''} cursor-pointer hover:bg-blue-300 hover:border-[2px] hover:border-blue-500 active:scale-[0.97] rounded-md shadow-sm overflow-hidden mr-3 mb-3 md:m-3`}>
              <Image 
                src={Woman3}
                alt='optionFace'
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-lg p-2 md:p-4 mt-[-60px]">
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
