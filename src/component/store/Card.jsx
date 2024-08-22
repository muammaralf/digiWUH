import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Card = (props) => {
    return (
        <div className='flex p-5 gap-5 bg-white rounded-xl shadow-md'>
            <div className='w-5/12 flex flex-col gap-3 items-center'>
                <img src={props.data.image} alt={props.data.slug} className='w-full aspect-square rounded-xl' />
                <ProdukTitle title={props.data.title} />
            </div>

            <div className='w-7/12 flex flex-col justify-between'>
                <div className='w-full flex flex-col gap-2'>
                    <div className='w-full flex justify-between items-center'>
                        <ProdukTitle title={props.data.title} />
                        <CiHeart className='text-zinc-500 scale-125' />
                    </div>
                    <p>
                        {props.data.weight}
                    </p>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <p className='text-green-600 text-xl'>
                        Rp {props.data.price}
                    </p>
                    <div className='flex gap-2'>
                        <FaLocationDot className='text-zinc-900' />
                        <p className='text-zinc-900 text-xs'>
                            {props.data.location}
                        </p>
                    </div>
                    <div className='w-full flex justify-end'>
                        <div className='bg-green-500 w-fit px-3 py-1 rounded-full'>
                            <p className='text-xs text-white'>Tambahkan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProdukTitle = ({ title }) => {
    return (
        <p className='text-base font-semibold'>
            {title}
        </p>
    )
}

export default Card