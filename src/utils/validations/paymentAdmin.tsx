import { useFormik } from 'formik'
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface'

export const paymentAdminUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {
    const formik = useFormik<paymentInterface>({
        initialValues: {
            amount: 0,
            typePayment: '',
            description: ''
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .required('This field is required.'),
        }),
        onSubmit: async (values: any, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    return formik
}