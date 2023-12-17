import { useFormik } from 'formik'
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface'
import store from '@/redux/store'
import API from '@/services/api'

export const paymentTopUpUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {

    const auth = store.getState().authSlice.auth
    const formik = useFormik<paymentInterface>({
        initialValues: {
            amount: 0,
            classRoom: ''
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .min(9999, 'Minimal Rp. 1.000 (one Thousand)')
            .required('Tidak boleh kosong!'),
            classRoom: Yup.string()
            .required('Tidak boleh kosong!')
        }),
        onSubmit: async (values: any, { resetForm }) => {
            const data = {
                amount: values.amount,
                fullName: auth ? auth.fullName : '',
                number_telephone: auth ? auth.number_telephone : '',
                email: auth ? auth.email : '',
                description: 'TOP-UP',
                typePayment: 'top-up',
                NIM: auth ? auth.NIM : '',
                to: 'Admin Kampus',
                year: auth ? auth.year : '',
                classRoom: values.classRoom
            }

            const response = await API.transfer(data)
            console.log('response top-up:', response) 
            
            if(response.data.message === "Your payment is still pending!") {
                onResponse(response.data.message)
                console.log('3b')
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