import React, { useEffect, useState } from "react";
import AkunSayaEdit from "./AkunSayaEdit";
import Button1 from "../Button/Button1";
import useUserStore from "../../store/user.store";
import instance from "../../services/axios/instance"
import { toast } from "react-toastify";

const AkunSayaComp = () => {
  const {user, fetch} = useUserStore()

  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    if (user) {
      setName(user.userMetadata.fullname)
      setPhoneNumber(user.userMetadata.phoneNumber)
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const {data} = await instance.put('/user/update', {
        fullname: name,
        phoneNumber: phoneNumber,
      })

      toast.success(data.message)

      fetch()
    } catch (e) {
      console.log(e.response?.data?.message?.message || 'Error')
      toast.error(e.w)
    } finally {

    }
  }

  if (!user) {
    return
  }

  return (
    <div className="flex flex-col w-full h-full bg-white mt-6 pt-4 px-6">
      <form action="submit" onSubmit={handleSubmit}>
        <AkunSayaEdit text="Nama" isi={name} onChange={setName} />
        <AkunSayaEdit text="Nomor HP atau WhatsApp" isi={phoneNumber} onChange={setPhoneNumber} />
        <div className="flex flex-col mt-2">
          <p className="text-slate-600 text-sm">Email</p>
          <p className="">{user.email}</p>
        </div>
        <Button1
          type="submit"
          classN="btn-lanjut w-fit px-5 mx-auto mt-6"
          buttonName="Simpan"
        />
      </form>
    </div>
  );
};

export default AkunSayaComp;
