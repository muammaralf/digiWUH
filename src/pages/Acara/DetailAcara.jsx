import React, { useEffect, useState } from "react";
import BackButton from "../../component/BackButton";
import { IoLocationSharp } from "react-icons/io5";
import wa from "../../assets/img/store/wa.png";
import { Link, useParams } from "react-router-dom";
import instance from "../../services/axios/instance";
import dayjs from "dayjs";

const DetailAcara = () => {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)

  const [event, setEvent] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const { data } = await instance.get(`/events/${params.id}`)

      if (!data.success) {
        alert(data.message)
        return
      }

      setEvent(data.data)
    } catch (e) {
      console.log(e)
      alert(e?.response?.data?.message?.message || 'Error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="m-6 flex-0">
        <BackButton text="Detail Acara" />
      </div>

      {event && (
        <div className="flex-1 bg-white w-full h-full pt-2 px-6 overflow-y-scroll">
          <img src={event.imageUrl} alt="" className="rounded-xl" />
          <div id="acaraUmum" className="border-b-2 py-4">
            <p id="namaAcara" className="font-semibold text-lg">
              {event.title}
            </p>
            <p id="tglAcara" className="text-sm">
              {dayjs(event.date).format('D MMMM YYYY')}
            </p>
            <div id="lokasiAcara" className="text-sm flex">
              <IoLocationSharp className="-ml-1 w-5 h-5" />
              <p>{event.place}</p>
            </div>
            {/* <div className='flex flex-col gap-1 p-4'>
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
              </div> */}
          </div>
          <div id="deskripsi" className="">
            <p className="text-lg font-medium">Deskripsi</p>
            <p className="text-justify" dangerouslySetInnerHTML={{ __html: event.content }}>
            </p>
            <p className="text-lg font-medium my-1">Narahubung</p>
            <Link to={`https://wa.me/62${event.contact[0] === '0' ? event.contact.substr(1) : event.contact}`} target="_blank">
              <button className="rounded-full bg-[#50B478] p-1 px-2 flex">
                <img src={wa} alt="" className="h-6 w-6" />
                <p className="text-sm text-white font-medium my-auto">
                  {event.contact}
                </p>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailAcara;
