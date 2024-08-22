import React from 'react'
import BackButton from '../../component/BackButton'
import SearchBar from '../../component/Acara/SearchBar'
import CardAcara from '../../component/Acara/Card'

import dataAcara from '../../data/Acara/acara'

const Acara = () => {
    return (
        <div className='container max-w-sm m-auto py-8'>
            <div className='flex flex-col gap-5'>
                <BackButton text="Acara" />
                <SearchBar />

                <div className='flex flex-col gap-10 mt-7'>
                    {dataAcara.map((acara) => (
                        <CardAcara data={acara} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Acara