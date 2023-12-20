import { useFormik } from 'formik'
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface'
import API from '@/services/api'
import store from '@/redux/store'
import { toRupiah } from '@/helpers'

export const paymentAdminUseFormik = ({ onError, onResponse }: {onError: any, onResponse: any}) => {

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
                description: `Administrasi`,
                typePayment: localStorage.getItem('typePayment') ?? '',
                year: auth ? auth.year : '',
                NIM: auth ? auth.NIM : '',
                to: 'Admin kampus',
                note: values.note,
                classRoom: values.classRoom,
            }

            if (auth?.balance >= 10000 && values.amount > auth?.balance) {
                formik.setErrors({ amount: `Pengiriman maksimal ${toRupiah(auth?.balance)}` });
                return; 
            }else if(values.amount < 999) {
                formik.setErrors({ amount: 'Pengiriman minimal Rp. 1.000' })
                return; 
            }else if(auth?.balance === 0) {
                formik.setErrors({ amount: 'Saldo tidak cukup!' })
                return; 
            }

            const response = await API.transfer(data)
            console.log('response transaksi admin:', response) 
            
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