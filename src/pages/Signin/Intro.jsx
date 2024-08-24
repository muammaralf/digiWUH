import React from 'react'
import Background from '../../assets/img/intro/intro.jpg'

const Intro = () => {
    return (
        <div className='container relative w-screen h-screen' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-full absolute bottom-16 flex flex-col justify-end items-end gap-40'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <p className='text-green-600/75 text-2xl font-semibold'>
                        Kalender
                    </p>
                    <p className='text-green-600/75 text-sm text-center w-3/4 font-medium'>
                        Notifikasi otomatis masuk di handphone anda ketika Rumah Sampah Buka!
                    </p>
                </div>

                <div className='w-fit bg-green-600/75 rounded-full shadow-lg mr-12'>
                    <p className='text-white px-5 py-2 font-medium'>Lewati</p>
                </div>
            </div>
        </div>
    )
}

export default Intro