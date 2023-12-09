import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authInterface } from '../interfaces/authInterface'
import API from '@/services/api';

export const resetPasswordUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {
    const formik = useFormik<authInterface>({
        initialValues: {
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
            .min(8, 'Minimal must 8 characters.')
            .max(20, 'Maximum only 20 characters.')
        }),
        onSubmit: async (values: any, { resetForm }) => {
            const response = await API.resetPassword(values)
            if(response.data.message === 'Password successfully reset!') {
                onResponse(response.data.message)
                resetForm()
            } else {
                onError(response.data.message)
            }
        }
    })

    return formik
}