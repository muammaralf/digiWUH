import React, {useEffect, useState} from "react";
import Navbar from "../../component/Navbar/Navbar";
import BackButton from "../../component/BackButton";
import Mitra from "../../component/store/Mitra";

import Card from "../../component/store/Card";
import SearchBar from "../../component/Acara/SearchBar";
import instance from "../../services/axios/instance.js";
import {Link} from "react-router-dom";

const BeliProduk = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchData()
  }, [search])

  const fetchData = async () => {
    try {
      const {data} = await instance.get('/products', {
        params: {
          q: search,
          perPage: 9999,
          page: 1,
        }
      })

      setProducts(data.data)
    } catch (e) {

    } finally {

    }
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 bg-[#50B478] p-6">
          <BackButton
            text="Digiwuh Store"
            clss="text-white"
            clssArrw="fill-white"
          />

          <div className="flex gap-2 items-center">
            <div className="grow">
              <SearchBar onChange={setSearch}/>
            </div>

            <Link to="/beli-produk/konfirmasi" className='bg-white w-fit px-3 py-1 rounded-full'>
              <p className='text-md text-black'>Konfirmasi</p>
            </Link>
          </div>
        </div>
        <div className="container pt-6 pb-36 px-6 flex flex-col gap-6">
          <div className="w-full flex flex-col gap-5">
            {products.map((product) => (
              <Card key={product.id} data={product}/>
            ))}
          </div>

          <div className="flex flex-col gap-5 ">
            <p className="text-xl font-semibold sm:w-52 sm:text-2xl md:w-64 md:text-3xl">
              Mitra DigiWuh
            </p>
            <Mitra/>
          </div>
        </div>
      </div>
      <Navbar/>
    </>
  );
};

export default BeliProduk;
