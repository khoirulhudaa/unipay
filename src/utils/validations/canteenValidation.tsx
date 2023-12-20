import store from '@/redux/store'
import API from '@/services/api'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface'

export const paymentCanteenUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {

    const auth = store.getState().authSlice.auth

    const formik = useFormik<paymentInterface>({
        initialValues: {
            amount: 0,
            note: ''
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .required('Tidak boleh kosong!'),
            note: Yup.string()
            .required('Tidak boleh kosong!')
        }),
        onSubmit: async (values: any, { resetForm }) => {

            const data = {
                amount: values.amount,
                fullName: auth ? auth.fullName : '',
                number_telephone: auth ? auth.number_telephone : '',
                email: auth ? auth.email : '',
                description: `Kantin`,
                typePayment: localStorage.getItem('typePayment') ?? '',
                year: auth ? auth.year : '',
                NIM: auth ? auth.NIM : '',
                to: 'Kantin kampus',
                note: values.note,
                classRoom: '-',
            }

            const response = await API.transfer(data)
            console.log('response canteen:', response) 
            
            if(response.data.status === 200) {
                onResponse(response.data.status)
                resetForm()
            }else {
                onError(response.data.message)
            }
        }
    })

    return formik
}