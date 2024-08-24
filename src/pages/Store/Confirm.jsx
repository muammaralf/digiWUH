import React from 'react'
import BackButton from '../../component/BackButton'

import dataPayment from '../../data/Store/dataPayment'
import Item from '../../component/store/Item'

import WA from '../../assets/img/store/wa.png'

const Confirm = () => {
    const totalPrice = dataPayment.reduce((acc, curr) => acc + curr.price, 0)
    return (
        <div className='container max-w-sm m-auto py-8 flex flex-col justify-between h-screen'>

            <div className='flex flex-col gap-10'>
                <BackButton text="Konfirmasi Pembelian" />

                <div className='w-full flex flex-col gap-5 p-5 bg-white rounded-xl shadow-lg'>
                    {dataPayment.map((payment) => (
                        <Item data={payment} />
                    ))}
                    <div className='w-full flex flex-col gap-3'>
                        <p className='text-sm text-zinc-900 font-semibold'>
                            Ringkasan setor sampah
                        </p>
                        {dataPayment.map((payment) => (
                            <div className='flex justify-between items-center'>
                                <p className='text-xs text-zinc-900 font-normal'>
                                    {payment.title}
                                </p>
                                <p className='text-xs text-zinc-900 font-normal'>
                                    Rp {payment.price}
                                </p>
                            </div>
                        ))}
                        <div className='w-full flex justify-between items-center'>
                            <p className='text-sm text-zinc-900 font-semibold'>
                                Total setor sampah
                            </p>
                            <p className='text-sm text-zinc-900 font-semibold'>
                                Rp {totalPrice}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-12 flex justify-center items-center bg-green-600 rounded-full shadow-md'>
                <img src={WA} alt="" className='w-7 h-7 mr-2' />
                <p className='text-sm text-white font-semibold'>
                    Konfirmasi Pesanan
                </p>
            </div>
        </div>
    )
}

export default Confirm