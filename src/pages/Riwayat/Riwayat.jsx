import React, {useEffect, useState} from "react";
import BackButton from "../../component/BackButton";
import RiwayatComp from "../../component/RiwayatComp/RiwayatComp";
import instance from "../../services/axios/instance.js";
import dayjs from "dayjs";

const Riwayat = () => {
  const [histories, setHistories] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const {data} = await instance.get('/histories')

      setHistories(data.data)
    } catch (e) {

    } finally {

    }
  }

  return (
    <>
      <div className="pt-6 px-6">
        <BackButton text="Riwayat Pembelian"/>
        <div className="pt-8">
          {histories.map((history) => (
            <RiwayatComp
              key={history.id}
              text={history.product.name}
              noTrans={history.billNumber}
              tgl={dayjs(history.transactionDatetime).format('D MMMM YYYY')}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Riwayat;
