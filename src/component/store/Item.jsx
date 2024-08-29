import React from 'react'

const Item = (props) => {
    return (
        <div className='w-full flex justify-between items-center border-b pb-5'>
            <div className='w-1/2 flex gap-2 items-center'>
                <img src={props.data.imageUrl} alt="" className='w-24 rounded-lg' />
                <p className='text-sm text-zinc-900 font-semibold'>
                    {props.data.name}
                </p>
            </div>
            <p className='text-zinc-900 text-sm font-semibold'>
                Rp {props.data.price}
            </p>
        </div>
    )
}

export default Item