import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const Card = (props) => {

    return (
        <div className='w-full flex flex-col rounded-xl bg-white shadow-lg'>
            <img src={props.data.image} alt={props.data.slug} className='rounded-xl' />
            <div className='flex flex-col gap-1 p-4'>
                <p className='font-semibold text-zinc-900'>
                    {props.data.title}
                </p>
                <p className='font-light text-sm'>
                    {props.data.date}
                </p>
                <div className='flex items-center gap-1'>
                    <IoLocationSharp className='text-red-600' />
                    <p className='font-normal text-sm'>
                        {props.data.location}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card