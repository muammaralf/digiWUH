import React from 'react'
import Image1 from '../../assets/img/store/partner1.jpg'
import Image2 from '../../assets/img/store/partner2.png'
import Image3 from '../../assets/img/store/partner3.png'
import WA from '../../assets/img/store/wa.png'

const Mitra = () => {

    const handleWA = (number) => {
        // window.open(`https://wa.me/${number}`, '_blank')
        alert('Klik');
    }

    return (
        <div className='w-full flex flex-col gap-5'>
            <div className='w-full h-32 rounded-xl shadow-lg' style={{ backgroundImage: `url(${Image1})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <p className='text-slate-100 text-sm w-5/12 h-full px-5 py-4'>
                    Ayo tingkatkan penjualan produkmu bersama mitra kami!
                </p>
            </div>

            <div className='w-full flex gap-5'>
                <div className='w-1/2 h-28 rounded-xl relative shadow-lg' style={{ backgroundImage: `url(${Image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    <img onClick={()=>handleWA()} src={WA} alt="" className='w-10 h-10 absolute right-0 bottom-0 hover:cursor-pointer' />
                </div>
                <div className='w-1/2 h-28 rounded-xl relative shadow-lg' style={{ backgroundImage: `url(${Image3})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    <img onClick={()=>handleWA()} src={WA} alt="" className='w-10 h-10 absolute right-0 bottom-0 hover:cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Mitra