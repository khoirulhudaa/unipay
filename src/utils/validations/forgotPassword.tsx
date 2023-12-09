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
            .email('Invalid email address')
            .required('This field is required.'),
        }),
        onSubmit: async (values: any, { resetForm }) => {
           const response = await API.sendEmailResetPassword(values)
           if(response.data.message === 'Email sent successfully!') {
                onResponse(response.data.message)
                resetForm()
            } else {
                onError(response.data.message)
           }
        }
    })

    return formik
}