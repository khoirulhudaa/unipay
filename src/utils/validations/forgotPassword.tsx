import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authInterface } from '../interfaces/authInterface'
import API from '@/services/api';

export const forgotPasswordUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {
    const formik = useFormik<authInterface>({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Format email tidak sesuai')
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, { resetForm }) => {
           const response = await API.sendEmailResetPassword(values)
           if(response.data.status === 200) {
                onResponse(response.data.message)
                resetForm()
            } else {
                onError(response.data.message)
           }
        }
    })

    return formik
}