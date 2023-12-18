import store from '@/redux/store'
import API from '@/services/api'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface'

export const paymentUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {

    const auth = store.getState().authSlice.auth

    const formik = useFormik<paymentInterface>({
        initialValues: {
            amount: 0,
            typePayment: '',
            to: '',
            classRoom: ''
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .min(999, 'Minimal Rp. 1.000 (one Thousand)')
            .required('Tidak boleh kosong!'),
            to: Yup.string()
            .max(8, 'Maksimal 8 numbers')
            .required('Tidak boleh kosong!'),
            classRoom: Yup.string()
            .required('Tidak boleh kosong!')
        }),
        onSubmit: async (values: any, { resetForm }) => {
            console.log('data transfer1')

            const data = {
                amount: values.amount,
                email: auth ? auth.email : '',
                description: `Transaction ${localStorage.getItem('typePayment')}`,
                typePayment: localStorage.getItem('typePayment') ?? '',
                fullName: auth ? auth.fullName : '',
                number_telephone: auth ? auth.number_telephone : '',
                from: auth ? auth.NIM : '',
                to: values.to,
                year: auth ? auth.year : '',
                NIM: auth ? auth.NIM : '',
                classRoom: values.classRoom
            }

            const response = await API.transfer(data)
            console.log('response transfer:', response) 
            
            if(response.data.message === 'Transaksi berhasil!') {
                onResponse(response.data.status)
                resetForm()
            }else {
                onError(response.data.message)
            }
        }
    })

    return formik
}