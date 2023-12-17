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
            typePayment: '',
            NIM: ''
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .min(9999, 'Minimal Rp. 1.000 (one Thousand)')
            .required('Tidak boleh kosong!'),
            NIM: Yup.string()
            .min(6, 'Minimal 6 numbers')
            .max(6, 'Maksimal 6 numbers')
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, { resetForm }) => {

            const data = {
                amount: values.amount,
                email: auth ? auth.email : '',
                description: `TRANSFER_${values.NIM}`,
                typePayment: localStorage.getItem('typePayment') ?? '',
                fullName: auth ? auth.fullName : '',
                number_telephone: auth ? auth.number_telephone : '',
                from: auth ? auth.NIM : '',
                to: values.NIM
            }

            const response = await API.transfer(data)
            console.log('response transfer:', response) 
            
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