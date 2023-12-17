import { paymentAdminUseFormik } from '@/utils/validations/paymentAdmin'
import { paymentUseFormik } from '@/utils/validations/topUpValidation'
import { paymentWithdrawUseFormik } from '@/utils/validations/withdrawValidation'
import Button from '../button'
import InputField from '../inputField'
import { signupUseFormik } from '@/utils/validations/signupValidation'
import Link from 'next/link'
import { signinUseFormik } from '@/utils/validations/signinValidation'
import { forgotPasswordUseFormik } from '@/utils/validations/forgotPassword'
import { resetPasswordUseFormik } from '@/utils/validations/resetPassword'
import { updateProfileUseFormik } from '@/utils/validations/updateProfile'
import ErrorMessage from '../errorMessage'
import { useEffect } from 'react'

interface formGroupProps {
    type?: string,
    handleErrorMessage?: (args: string) => void,
    handleResponse?: (args: string) => void,
    typePayment?: string,
    onClick?: () => void,
    onClick2?: () => void,
    error?: string,
    typePhoto?: string
}

const FormGroup = ({ 
    type, 
    handleErrorMessage, 
    handleResponse,
    onClick,
    onClick2,
    error,
    typePhoto
}: formGroupProps) => {

// Transfer original 
const formik = paymentUseFormik({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

// Transfer administration 
const formikAdmin = paymentAdminUseFormik({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

// Transfer withdraw 
const formikWithdraw = paymentWithdrawUseFormik({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

// Transfer withdraw 
const formikSignup = signupUseFormik({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

// Transfer withdraw 
const formikSignin = signinUseFormik({ 
    onError: handleErrorMessage, 
})

// Transfer withdraw 
const formikForgot = forgotPasswordUseFormik({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

// Transfer withdraw 
const formikResetPassword = resetPasswordUseFormik({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

// Transfer withdraw 
const formikUpdateProfile = updateProfileUseFormik({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

useEffect(() => {
    formikUpdateProfile.setFieldValue('type_photo', typePhoto)
}, [typePhoto])

const genderList = [
    {label: 'Select your gender', value: ''},
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'}
]

const prodiList = [
    {label: 'Select your prodi', value: ''},
    {label: 'TI', value: 'Teknik Informatika'},
    {label: 'RPL', value: 'Rekayasa Perangkat Lunak'},
    {label: 'SI', value: 'Sistem Informasi'},
    {label: 'MK', value: 'Manajemen komputerisasi'}
]

const listPayment = [
    {label: 'Select payment method', value: ''},
    {label: 'BCA', value: 'ID_BCA'},
    {label: 'BNI', value: 'ID_BNI'},
    {label: 'BRI', value: 'ID_BRI'},
    {label: 'MANDIRI', value: 'ID_MANDIRI'},
    {label: 'BSI', value: 'ID_BSI'},
    {label: 'DANA', value: 'ID_DANA'},
    {label: 'OVO', value: 'ID_OVO'},
    {label: 'GOPAY', value: 'ID_GOPAY'},
    {label: 'SHOPEEPAY', value: 'ID_SHOPEEPAY'},
]

switch(type) {
    case "tf-administration":
        return (
            <form onSubmit={formikAdmin.handleSubmit} className='z-[999999]'>
                <div className='mb-5'>
                    <InputField 
                        label='Jenis pembayaran'
                        name='typePayment'
                        onError={formikAdmin.errors.typePayment}
                        onTouched={!!formikAdmin.touched.typePayment}
                        onBlur={formikAdmin.handleBlur} 
                        disabled={true}
                        onChange={formikAdmin.handleChange}
                        value={typeof window !== 'undefined' ? localStorage.getItem('typePayment') ?? '' : ''}
                    />
                </div>
                <div className='mb-5'>
                    <InputField 
                        label='Nominal pencairan'
                        name='amount'
                        type='number'
                        onError={formikAdmin.errors.amount}
                        onTouched={!!formikAdmin.touched.amount}
                        onChange={formikAdmin.handleChange} 
                        onBlur={formikAdmin.handleBlur} 
                        placeholder="1.000" 
                    />
                </div>
                <div className='mb-5'>
                    <InputField 
                        label='description'
                        name='description'
                        onError={formikAdmin.errors.description}
                        onTouched={!!formikAdmin.touched.description}
                        onChange={formikAdmin.handleChange} 
                        onBlur={formikAdmin.handleBlur} 
                        placeholder="Berikan deskripsi (jika perlu)..." 
                    />
                </div>
                <div className='flex items-center'>
                    <Button text='Kirim sekarang' typeButton='submit' status='primary' style='mr-4' />
                    <Button text='Batalkan' status='delete' handleClick={onClick} />
                </div>
            </form>
        )
    case "withdraw":
        return (
            <form onSubmit={formikWithdraw.handleSubmit}>
                <div className='mb-5'>
                    <InputField 
                        label='Bank/E-wallet'
                        name='bank_code'
                        typeInput='select-input'
                        options={listPayment}
                        onError={formikWithdraw.errors.bank_code}
                        onTouched={!!formikWithdraw.touched.bank_code}
                        onChange={formikWithdraw.handleChange} 
                        onBlur={formikWithdraw.handleBlur} 
                    />
                </div>
                <div className='mb-5'>
                    <InputField 
                        label='Nomer rek/No. Telephone'
                        name='account_number'
                        type='number'
                        onError={formikWithdraw.errors.account_number}
                        onTouched={!!formikWithdraw.touched.account_number}
                        onChange={formikWithdraw.handleChange} 
                        onBlur={formikWithdraw.handleBlur} 
                        placeholder="xx1728712xx273" 
                    />
                </div>
                <div className='mb-5'>
                    <InputField 
                        label='Nominal pencairan'
                        name='amount'
                        type='number'
                        onError={formikWithdraw.errors.amount}
                        onTouched={!!formikWithdraw.touched.amount}
                        onChange={formikWithdraw.handleChange} 
                        onBlur={formikWithdraw.handleBlur} 
                        placeholder="Rp.1.000" 
                    />
                </div>
                <div className='flex items-center'>
                    <Button text='Kirim sekarang' typeButton='submit' status='primary' style='mr-4' />
                    <Button text='Batalkan' status='delete' handleClick={onClick} />
                </div>
            </form>
        )
    case "signup" :
        return (
            <form onSubmit={formikSignup.handleSubmit} className='w-full'>
                {
                    error !== "" ? (
                        <>
                        <ErrorMessage error={error} />
                        </>
                    ):
                        null
                }
                <div className='w-full md:flex items-center mb-2'>
                    <div className='mb-5 w-full md:pr-8 h-[90px]'>
                        <InputField 
                            label='Nama lengkap'
                            name='fullName'
                            onError={formikSignup.errors.fullName}
                            onTouched={!!formikSignup.touched.fullName}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.fullName}
                            placeholder='Muhammad Khoirulhuda'
                        />
                    </div>
                    <div className='mb-5 w-full md:pr-8 h-[90px]'>
                        <InputField 
                            label='Email'
                            name='email'
                            onError={formikSignup.errors.email}
                            onTouched={!!formikSignup.touched.email}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.email}
                            placeholder='****@gmail.com'
                        />
                    </div>
                </div>
                <div className='w-full md:flex items-center mb-2'>
                    <div className='mb-5 w-full md:pr-8 h-[90px]'>
                        <InputField 
                            label='Pasword'
                            name='password'
                            onError={formikSignup.errors.password}
                            onTouched={!!formikSignup.touched.password}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.password}
                            placeholder='Masukan password...'
                        />
                    </div>
                    <div className='mb-5 w-full md:pr-8 h-[90px]'>
                        <InputField 
                            label='NIM'
                            name='NIM'
                            onError={formikSignup.errors.NIM}
                            onTouched={!!formikSignup.touched.NIM}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.NIM}
                            placeholder='412***82'
                        />
                    </div>
                </div>
                <div className='w-full md:flex items-center mb-2'>
                    <div className='mb-5 w-full md:pr-8 h-[90px]'>
                        <InputField 
                            label='NIK'
                            name='NIK'
                            onError={formikSignup.errors.NIK}
                            onTouched={!!formikSignup.touched.NIK}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.NIK}
                            placeholder='1928**1627162**2'
                        />
                    </div>
                    <div className='mb-5 w-full md:pr-8 h-[90px]'>
                        <InputField 
                            label='Nomer whatsapp'
                            name='number_telephone'
                            onError={formikSignup.errors.number_telephone}
                            onTouched={!!formikSignup.touched.number_telephone}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.number_telephone}
                            placeholder='08*127**172*7'
                        />
                    </div>
                </div>
                <div className='w-full md:flex items-center mb-2'>
                    <div className='mb-5 w-full md:pr-8 h-[90px]'>
                        <InputField 
                            label='Prodi'
                            name='prodi'
                            typeInput='select-input'
                            options={prodiList}
                            onError={formikSignup.errors.prodi}
                            onTouched={!!formikSignup.touched.prodi}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.prodi}
                        />
                    </div>
                    <div className='mb-5 w-full md:pr-8 h-[90px]'>
                        <InputField 
                            label='Jenis kelamin'
                            name='gender'
                            typeInput='select-input'
                            options={genderList}
                            onError={formikSignup.errors.gender}
                            onTouched={!!formikSignup.touched.gender}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.gender}
                        />
                    </div>
                </div>
                <div className='w-full mb-[40px]'>
                    <div className='mb-5 w-1/2 md:pr-8 h-[90px]'>
                        <InputField 
                            label='Nomer rekening'
                            name='accountNumber'
                            onError={formikSignup.errors.accountNumber}
                            onTouched={!!formikSignup.touched.accountNumber}
                            onBlur={formikSignup.handleBlur} 
                            onChange={formikSignup.handleChange}
                            value={formikSignup.values.accountNumber}
                            placeholder='1212xx23xx233'
                        />
                    </div>
                </div>
                <div className='md:flex items-center'>
                    <Button status='primary' typeButton='submit' text='Daftar sekarang' />
                    <p className='mt-4 md:mt-0 md:ml-4'>Sudah punya akun ? <span onClick={onClick} className='text-blue-500 cursor-pointer hover:brightness-[90%]'>Masuk</span></p>
                </div>
            </form>
        )
    case "signin" :
        return (
            <form onSubmit={formikSignin.handleSubmit} className='w-full md:w-1/2'>
                 {
                    error !== "" ? (
                        <>
                        <ErrorMessage error={error} />
                        </>
                    ):
                        null
                }
                <div className='mb-5'>
                    <InputField 
                        label='NIM'
                        name='NIM'
                        onError={formikSignin.errors.NIM}
                        onTouched={!!formikSignin.touched.NIM}
                        onBlur={formikSignin.handleBlur} 
                        onChange={formikSignin.handleChange}
                        value={formikSignin.values.NIM}
                        placeholder='412***82'
                    />
                </div>
                <div className='mb-5'>
                    <InputField 
                        label='Password'
                        name='password'
                        onError={formikSignin.errors.password}
                        onTouched={!!formikSignin.touched.password}
                        onBlur={formikSignin.handleBlur} 
                        onChange={formikSignin.handleChange}
                        value={formikSignin.values.password}
                        placeholder='Masukan password...'
                    />
                </div>
                <p>Lupa password? <Link href={'/auth/forgotPassword'} className='cursor-pointer text-blue-500 hover:brightness-[90%]'>Klik disini</Link></p>
                <hr className='my-6 border-white' />
                <div className='md:flex h-max items-center'>
                    <Button status='primary' typeButton='submit' text='Masuk sekarang' />
                    <p className='mt-[20px] md:mt-0 md:ml-4'>Belum punya akun ? <span onClick={onClick} className='text-blue-500 cursor-pointer hover:brightness-[90%]'>Daftar</span></p>
                </div>
            </form>
        )
    case "forgotPassword" :
        return (
            <form onSubmit={formikForgot.handleSubmit} className='w-full'>
                {
                    error !== "" ? (
                        <>
                        <ErrorMessage error={error} />
                        </>
                    ):
                        null
                }
                <div className='mb-5'>
                    <InputField 
                        label='Email'
                        name='email'
                        onError={formikForgot.errors.email}
                        onTouched={!!formikForgot.touched.email}
                        onBlur={formikForgot.handleBlur} 
                        onChange={formikForgot.handleChange}
                        value={formikForgot.values.email}
                        placeholder='Masukan alamat email...'
                    />
                </div>
                <div className='flex items-center'>
                    <Button status='primary' typeButton='submit' text='Kirim' />
                </div>
            </form>
        )
    case "ResetPassword" :
        return (
            <form onSubmit={formikResetPassword.handleSubmit} className='w-full'>
                {
                    error !== "" ? (
                        <>
                        <ErrorMessage error={error} />
                        </>
                    ):
                        null
                }
                <div className='mb-5'>
                    <InputField 
                        label='Perbarui password'
                        name='password'
                        onError={formikResetPassword.errors.password}
                        onTouched={!!formikResetPassword.touched.password}
                        onBlur={formikResetPassword.handleBlur} 
                        onChange={formikResetPassword.handleChange}
                        value={formikResetPassword.values.password}
                        placeholder='Masukan pasword baru...'
                    />
                </div>
                <div className='flex items-center'>
                    <Button status='primary' typeButton='submit' text='Perbarui passsword' />
                </div>
            </form>
        )
    case "updateProfile" :
        return (
            <form onSubmit={formikUpdateProfile.handleSubmit} className='w-full'>
                <div className='mb-5 w-full md:pr-8 h-[90px]'>
                    <InputField 
                        label='Nama lengkap'
                        name='fullName'
                        onError={formikUpdateProfile.errors.fullName}
                        onTouched={!!formikUpdateProfile.touched.fullName}
                        onBlur={formikUpdateProfile.handleBlur} 
                        onChange={formikUpdateProfile.handleChange}
                        value={formikUpdateProfile.values.fullName}
                        placeholder='Muhammad Khoirulhuda'
                    />
                </div>
                <div className='mb-5 w-full md:pr-8 h-[90px]'>
                    <InputField 
                        label='Email'
                        name='email'
                        onError={formikUpdateProfile.errors.email}
                        onTouched={!!formikUpdateProfile.touched.email}
                        onBlur={formikUpdateProfile.handleBlur} 
                        onChange={formikUpdateProfile.handleChange}
                        value={formikUpdateProfile.values.email}
                        placeholder='****@gmail.com'
                    />
                </div>
                <div className='mb-5 w-full md:pr-8 h-[90px]'>
                    <InputField 
                        label='Nomer whatsapp'
                        name='number_telephone'
                        onError={formikUpdateProfile.errors.number_telephone}
                        onTouched={!!formikUpdateProfile.touched.number_telephone}
                        onBlur={formikUpdateProfile.handleBlur} 
                        onChange={formikUpdateProfile.handleChange}
                        value={formikUpdateProfile.values.number_telephone}
                        placeholder='08*127**172*7'
                    />
                </div>
                <div className='mb-5 w-full md:pr-8 h-[90px]'>
                    <InputField 
                        label='Jenis kelamin'
                        name='gender'
                        typeInput='select-input'
                        options={genderList}
                        onError={formikUpdateProfile.errors.gender}
                        onTouched={!!formikUpdateProfile.touched.gender}
                        onBlur={formikUpdateProfile.handleBlur} 
                        onChange={formikUpdateProfile.handleChange}
                        value={formikUpdateProfile.values.gender}
                    />
                </div>
                <div className='flex items-center'>
                    <Button status='primary' typeButton='submit' text='Simpan perubahan' />
                </div>
            </form>
        )
    default :
        return (
            <form>
                <div className='mb-5'>
                <InputField 
                    label='ID unipay'
                    name='unipay_id'
                    onError={formik.errors.amount}
                    onTouched={!!formik.touched.amount}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    placeholder="X776XX" 
                />
                </div>
                <div className='mb-5'>
                <InputField 
                    label='Nominal pencairan'
                    name='amount'
                    onError={formik.errors.amount}
                    onTouched={!!formik.touched.amount}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    placeholder="1.000" 
                />
                </div>
                <div className='flex items-center'>
                    <Button text='Kirim sekarang' typeButton='submit' status='primary' style='mr-4' />
                    <Button text='Batalkan' status='delete' handleClick={onClick} />
                </div>
            </form>
        )
  }
}

export default FormGroup