import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ onChange }) => {
    return (
        <div className='w-full h-9 px-4 relative'>
            <input type="text" className='peer w-full h-full rounded-full px-5 border border-zinc-400/75 text-sm' onChange={(e) => onChange(e.target.value)} />
            <IoSearchOutline className='absolute peer-focus:opacity-0 top-3 left-8 text-zinc-400' />
        </div>
    )
}

export default SearchBar