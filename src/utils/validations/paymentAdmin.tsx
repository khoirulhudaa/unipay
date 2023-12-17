import { useFormik } from 'formik'
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface'
import API from '@/services/api'
import store from '@/redux/store'

export const paymentAdminUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {

    const auth = store.getState().authSlice.auth

    const formik = useFormik<paymentInterface>({
        initialValues: {
            amount: 0,
            typePayment: '',
            note: ''
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, { resetForm }) => {

            const data = {
                amount: values.amount,
                email: auth ? auth.fullName : '',
                description: `Pembayaran ${values.typePayment}`,
                typePayment: values.typePayment,
                fullName: auth ? auth.fullName : '',
                number_telephone: auth ? auth.number_telephone : '',
                user_id: auth ? auth.user_id : '',
                year: auth ? auth.year : '',
                note: values.note
            }

            const response = await API.transfer(data)
            console.log('response signup:', response) 
            
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