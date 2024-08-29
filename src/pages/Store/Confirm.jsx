import React from 'react'
import BackButton from '../../component/BackButton'

import dataPayment from '../../data/Store/dataPayment'
import Item from '../../component/store/Item'

import WA from '../../assets/img/store/wa.png'
import useCartStore from "../../store/cart.store.js";
import {Link, useNavigate} from "react-router-dom";

const contact = '6281234567890'

const Confirm = () => {
    const navigate = useNavigate()

    const {cart} = useCartStore()

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

    const confirm = () => {
        const store = {}

        cart.forEach((item) => {
          if (!item.contact) {
            return
          }

          if (!store[item.contact]) {
            store[item.contact] = []
          }
          store[item.contact].push(item)
        })

        Object.entries(store).forEach(([contact, cart]) => {
          const text = 'Konfirmasi pembelian berikut ini' +
            '\n\n' + cart.map((item, i) => `  ${i + 1}. ${item.name} - Rp ${item.price}`).join('\n') +
            '\n\nTotal: Rp ' + totalPrice

          const url = `https://wa.me/${contact}?text=` + encodeURIComponent(text)

          window.open(url, '_blank')
        })

        navigate('/beli-produk/konfirmasi-berhasil')
    }

    return (
        <div className='container max-w-sm m-auto py-8 flex flex-col justify-between h-screen'>

            <div className='flex flex-col gap-10'>
                <BackButton text="Konfirmasi Pembelian" />

                <div className='w-full flex flex-col gap-5 p-5 bg-white rounded-xl shadow-lg'>
                    {cart.map((item) => (
                        <Item key={item.id} data={item} />
                    ))}
                    <div className='w-full flex flex-col gap-3'>
                        <p className='text-sm text-zinc-900 font-semibold'>
                            Ringkasan setor sampah
                        </p>
                        {cart.map((item) => (
                            <div key={item.id} className='flex justify-between items-center'>
                                <p className='text-xs text-zinc-900 font-normal'>
                                    {item.name}
                                </p>
                                <p className='text-xs text-zinc-900 font-normal'>
                                    Rp {item.price}
                                </p>
                            </div>
                        ))}
                        <div className='w-full flex justify-between items-center'>
                            <p className='text-sm text-zinc-900 font-semibold'>
                                Total setor sampah
                            </p>
                            <p className='text-sm text-zinc-900 font-semibold'>
                                Rp {totalPrice}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <button
              className='w-full h-12 flex justify-center items-center bg-green-600 rounded-full shadow-md'
              onClick={confirm}
            >
                <img src={WA} alt="" className='w-7 h-7 mr-2' />
                <p className='text-sm text-white font-semibold'>
                    Konfirmasi Pesanan
                </p>
            </button>
        </div>
    )
}

export default Confirm