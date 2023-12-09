import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authInterface } from '../interfaces/authInterface'
import { useEffect } from 'react';

export const updateProfileUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {
    const formik = useFormik<authInterface>({
        initialValues: {
            email: '',
            password: '',
            fullName: '',
            NIK: '',
            NIM: '',
            gender: '',
            number_telephone: '',
            prodi: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('This field is required.'),
            password: Yup.string()
            .min(8, 'Minimal must 8 characters.')
            .max(20, 'Maximum only 20 characters.')
            .required('This field is required.'),
            fullName: Yup.string()
            .min(3, 'Minimal must 3 characters.')
            .max(20, 'Maximum only 20 characters.')
            .required('This field is required.'),
            NIK: Yup.string()
            .max(16, 'Maximum only 16 characters.')
            .required('This field is required.'),
            NIM: Yup.string()
            .max(8, 'Maximum only 8 characters.')
            .required('This field is required.'),
            number_telephone: Yup.string()
            .min(10, 'Minimal must 10 characters.')
            .max(13, 'Maximum only 13 characters.')
            .required('This field is required.'),
            prodi: Yup.string()
            .required('This field is required.'),
        }),
        onSubmit: (values: any, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    useEffect(() => {
        formik.setValues({
            email: '',
            password: '',
            fullName: '',
            NIK: '',
            NIM: '',
            gender: '',
            number_telephone: '',
            prodi: '',
        })
    }, [])

    return formik
}