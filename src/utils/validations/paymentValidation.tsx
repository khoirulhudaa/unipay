import { useFormik } from 'formik'
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface'

export const paymentUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {
    const formik = useFormik<paymentInterface>({
        initialValues: {
            amount: 0,
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .min(9999, 'Minimal Rp. 1.000 (one Thousand)')
            .required('This field is required.'),
        }),
        onSubmit: async (values: any, { resetForm }) => {
            console.log(values)
        }
    })

    return formik
}