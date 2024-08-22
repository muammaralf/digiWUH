import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import BackButton from '../../component/BackButton'
import Mitra from '../../component/store/Mitra'

import dataProduk from '../../data/Store/dataProduk'
import Card from '../../component/store/Card'

const BeliProduk = () => {
    return (
        <>
            <div className='container max-w-sm m-auto py-8 flex flex-col gap-10'>
                <div className='w-full flex flex-col gap-2'>
                    <BackButton text="DigiWuh Store" />
                    <p className='text-sm text-zinc-900 font-normal indent-6'>
                        Carilah produk DigiWuh yang ingin kamu beli
                    </p>
                </div>

                <div className='w-full flex flex-col gap-5'>
                    {dataProduk.map((produk) => (
                        <Card data={produk} />
                    ))}
                </div>

                <div className='flex flex-col gap-5 '>
                    <p className='text-xl font-semibold sm:w-52 sm:text-2xl md:w-64 md:text-3xl'>
                        Mitra DigiWuh
                    </p>
                    <Mitra />
                </div>

                <div className='w-full h-12 bg-green-600/75 rounded-full mb-24'>

                </div>
            </div>
            <Navbar />
        </>
    )
}

export default BeliProduk