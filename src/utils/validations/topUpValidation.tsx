import { useFormik } from 'formik'
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface'
import store from '@/redux/store'
import API from '@/services/api'

export const paymentUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {

    const auth = store.getState().authSlice.auth

    const formik = useFormik<paymentInterface>({
        initialValues: {
            amount: 0,
            typePayment: ''
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .min(9999, 'Minimal Rp. 1.000 (one Thousand)')
            .required('This field is required.'),
        }),
        onSubmit: async (values: any, { resetForm }) => {

            const data = {
                amount: values.amount,
                email: auth ? auth.fullName : '',
                description: 'TOP-UP',
                typePayment: values.typePayment,
                fullName: auth ? auth.fullName : '',
                number_telephone: auth ? auth.number_telephone : '',
                user_id: auth ? auth.user_id : ''
            }

            const response = await API.topUp(data)
            console.log('response topup:', response) 
            
            if(response.data.message === 'Your payment is still pending!') {
                onResponse(response.data.message)
                resetForm()
                const invoiceUrl = response.data.data.invoiceUrl;
                window.location.href = invoiceUrl;
            }else {
                onError(response.data.message)
            }
        }
    })

    return formik
}