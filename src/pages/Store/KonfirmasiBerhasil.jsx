import React from 'react'
import Background from '../../assets/img/store/success.jpg'

const KonfirmasiBerhasil = () => {

    const handleClick = () => {
        alert('Klik');
    }

    return (
        <div className='container relative h-screen' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
            <div className='w-full absolute bottom-48 flex flex-col justify-center items-center gap-10'>
                <p className='text-slate-100 text-3xl font-medium'>
                    BERHASIL
                </p>
                <p className='text-slate-100 text-xl text-center w-3/4 font-medium'>
                    Terima kasih sudah membeli  produk kami!
                </p>
                <p className='text-slate-100 text-xl text-center w-3/4 font-medium'>
                    Ubah Sampah Menjadi Berkah!
                </p>
                <div onClick={() => handleClick()} className='w-fit bg-white rounded-full shadow-md'>
                    <p className='text-green-600 px-5 py-2 font-medium'>Selesai</p>
                </div>
            </div>
        </div>
    )
}

export default KonfirmasiBerhasil