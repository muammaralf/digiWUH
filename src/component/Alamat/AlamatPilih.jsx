import React from "react";
import "./AlamatPilih.css";

const AlamatPilih = () => {
  return (
    <>
      <table className="alamat-pilih-container">
        <tr>
          <td>
            <input type="radio" value="1" id="alamat1" name="alamatPilih" />
          </td>
          <td>
            <label htmlFor="alamat1">PPPPPPP</label>
          </td>
          <td className="edit-btn">
            <button className="edit-alamat-btn">Ubah</button>
          </td>
        </tr>
      </table>
      <div className="border-bottom"></div>
      <table className="alamat-pilih-container">
        <tr>
          <td>
            <input type="radio" value="1" id="alamat2" name="alamatPilih" />
          </td>
          <td>
            <label htmlFor="alamat2">PPPPPPP</label>
          </td>
          <td className="edit-btn">
            <button className="edit-alamat-btn">Ubah</button>
          </td>
        </tr>
      </table>
      <div className="border-bottom"></div>
      <a href="#">Tambah alamat</a>
    </>
  );
};

export default AlamatPilih;
