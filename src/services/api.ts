import api from './axios';

const API = {

    // Account seller
    signiIn: (body: any) => {
        return api.post('/account/signin/', body)
    },
    signUp: (body: any) => {
        return api.post('/account/signup', body)
    },

    // reset-password
    sendEmailResetPassword: (body: any) => {
        return api.post('/account/forgot-password', body)
    },
    resetPassword: ({token, body}: {token: string, body: any}) => {
        return api.put(`/account/reset-password/${token}`, body)
    },

    // payment
    getAllPayments: () => {
        return api.get(`/payment`)
    },
    updatePayments: ({body}:{body: any}) => {
        return api.put('/payment/update', body)
    },
    topUp: (body: any) => {
        return api.post('/payment/top-up', body)
    },
    transfer: (body: any) => {
        return api.post('/payment/create', body)
    },
    disbursement: (body: any) => {
        return api.post('/payment/withdraw', body)
    },
}

export default API;