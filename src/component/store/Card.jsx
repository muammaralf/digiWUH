import { CiHeart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import useCartStore from "../../store/cart.store.js";

const Card = (props) => {
    const {isAdded, addToCart, removeFromCart} = useCartStore()
    return (
        <div className='flex p-5 gap-5 bg-white rounded-xl shadow-md'>
            <div className='w-5/12 flex flex-col gap-3 items-center'>
                <img src={props.data.imageUrl} alt={props.data.name} className='w-full aspect-square rounded-xl' />
                <ProdukTitle title={props.data.name} />
            </div>

            <div className='w-7/12 flex flex-col justify-between'>
                <div className='w-full flex flex-col gap-2'>
                    <div className='w-full flex justify-between items-center'>
                        <ProdukTitle title={props.data.title} />
                        <CiHeart className='text-zinc-500 scale-125' />
                    </div>
                    {/*<p>*/}
                    {/*    {props.data.weight}*/}
                    {/*</p>*/}
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <p className='text-green-600 text-xl'>
                        Rp {props.data.price}
                    </p>
                    <div className='flex gap-2'>
                        <FaLocationDot className='text-zinc-900' />
                        <p className='text-zinc-900 text-xs'>
                            {props.data.address}
                        </p>
                    </div>
                    <div className='w-full flex justify-end'>
                        {isAdded(props.data.id) ? (
                          <button className='bg-red-500 w-fit px-3 py-1 rounded-full' onClick={() => removeFromCart(props.data.id)}>
                              <p className='text-xs text-white'>Hapus</p>
                          </button>
                        ) : (
                            <button className='bg-green-500 w-fit px-3 py-1 rounded-full' onClick={() => addToCart(props.data)}>
                                <p className='text-xs text-white'>Tambahkan</p>
                            </button>
                        )}
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