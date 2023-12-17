import { useFormik } from 'formik';
import API from '../../services/api';
import * as Yup from 'yup'
import { paymentInterface } from '../interfaces/paymentInterface';
import store from '../../redux/store';
import toRupiah from '../../helpers/toRupiah';

export const paymentWithdrawUseFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {

    const auth = store.getState().authSlice.auth

    console.log('data balance:', auth?.balance)

    const formik = useFormik<paymentInterface>({
        initialValues: {
            bank_code: '',
            account_number: 0,
            amount: 0,
            classRoom: ''
        },
        validationSchema: Yup.object({
            bank_code: Yup.string()
            .required(),
            account_number: Yup.number()
            .max(9999999999999999, 'Masimal 16 karakter.')
            .min(9999999999, 'Minimal 10 karakter.')
            .required(),
            amount: Yup.number()
            .min(9999, 'Minimal nominal Rp. 10.000.')
            .required(),
            classRoom: Yup.string()
            .required('Tidak boleh kosong!')
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                const data = {
                    channelCode: values.bank_code,
                    accountNumber: values.account_number,
                    amount: values.amount,
                    user_id: auth?.fullName,
                    accountHolderName: auth?.fullName,
                    classRoom: values.classRoom
                }

                console.log('values:', data)

                if (values.amount > auth?.balance) {
                    formik.setErrors({ amount: `Withdraw maximal ${toRupiah(auth?.balance)}` });
                    return; 
                }

                const response = await API.disbursement(data)
                if(response.data.message === "Withdraw successfully!!") {
                    resetForm()
                    onResponse(response.data.message)
                } else {
                    onError(response.data.message)
                }

            } catch (error: any) {
                onError(error.data.message)
            }
        }
    })

    return formik
}