import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={`/acara/${props.data.id}`} className='w-full flex flex-col rounded-xl bg-white shadow-lg'>
            <img src={props.data.imageUrl} alt={props.data.id} className='rounded-xl max-h-[200px]' />
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
                        {props.data.place}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card