import { formatDate, isEqual } from '@/helpers'
import { Building, Canteen, KHS, PKKMB, Sertification, Test, TopUp, Transfer, UP, Withdraw } from '@/public/images'
import API from '@/services/api'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Table = ({ typePayment, onClick }: { typePayment?: string, onClick?: any }) => {

const [dataHistory, setDataHistory] = useState<[]>([])

useEffect(() => {
    (async() => {
        const data = {
            typePayment: typePayment ?? 'Transfer'
        }
        const response = await API.getAllHistoryPayments(data)
        if(!isEqual(dataHistory, response.data.data)) {
            setDataHistory(response.data.data)
        }
    })()
}, [typePayment, dataHistory])

const getImageSrc = (type_payment: string) => {
    switch (type_payment) {
        case 'KHS':
            return KHS;
        case 'PKKMB':
            return PKKMB;
        case 'top-up':
            return TopUp;
        case 'Semesteran':
            return Building;
        case 'UTS':
            return Test;
        case 'Sertification':
            return Sertification;
        case 'Transfer':
            return Transfer;
        case 'UP':
            return UP;
        case 'Withdraw':
            return Withdraw;
        case 'Canteen':
            return Canteen;
        default:
            return Test;
    }
}

  return (
    <>
        <div className='w-full'>
            {
                dataHistory ? (
                    dataHistory
                    .filter((data: any) => data.date && typeof data.date === 'string' && (typePayment === '' || data.type_payment === typePayment)) 
                    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .slice(0, 20)
                    .map((data: any, index: number) => (
                        <div onClick={() => onClick(data, true)} key={index} className='w-full flex items-center justify-between py-4 duration-100 active:scale-[0.99] border-b md:border-blue-300 border-blue-200 mb-2 cursor-pointer'>
                            <div className='w-max md:w-[40%] flex items-center'>
                                <div className='w-[50px] h-[50px] mr-3 rounded-full overflow-hidden bg-white p-3 shadow-md'>
                                    <Image 
                                        src={getImageSrc(data?.type_payment)}
                                        alt='iconTypePayment'
                                    />
                                </div>
                                <div>
                                    <h3>{data?.type_payment}</h3>
                                    <small>{formatDate(data?.date)}</small>
                                </div>
                            </div>
                            <div className='w-max'>
                                <div className={`flex items-center w-max ${data.type_payment === 'top-up' ? 'bg-green-400' : 'bg-red-400'} py-2 px-3 text-white rounded-full`}>
                                    <div className='flex md:scale-[1] scale-[0.8] mr-1'>
                                        {
                                            data?.type_payment === 'top-up' ? <FaArrowUp /> : <FaArrowDown />
                                        }
                                    </div>
                                    <p className='text-[12px] md:text-[16px] flex md:ml-2 items-center text-center'>
                                        {data?.amount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ):
                <p>History not found!</p>
            }
        </div>
    </>
  )
}

export default Table
