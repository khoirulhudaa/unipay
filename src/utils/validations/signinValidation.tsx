'use client'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authInterface } from '../interfaces/authInterface'
import API from '@/services/api';
import { useDispatch } from 'react-redux'
import { authSignIn, saveToken } from '@/redux/authSlice';
import { useRouter } from 'next/navigation'

export const signinUseFormik = ({ onError }: {onError: any}) => {

    const dispatch = useDispatch()
    const navigate = useRouter()

    const formik = useFormik<authInterface>({
        initialValues: {
            NIM: '',
            password: '',
        },
        validationSchema: Yup.object({
            NIM: Yup.string()
            .min(6, 'Minimal must 6 characters.')
            .required('This field is required.'),
            password: Yup.string()
            .max(20, 'Maximum only 20 characters.')
            .required('This field is required.'),
        }),
        onSubmit: async (values: any, { resetForm }) => {
            const response = await API.signiIn(values)
            console.log('response signup:', response) 
            
            if(response.data.message === 'Successfully signin!') {
                dispatch(authSignIn(response.data.data))
                dispatch(saveToken(response.data.token))
                resetForm()
                navigate.push('/', {scroll: false})
            }else {
                onError(response.data.message)
            }
        }
    })

    return formik
}