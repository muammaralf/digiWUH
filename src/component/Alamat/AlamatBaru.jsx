import React from "react";
import "./AlamatBaru.css";

const AlamatBaru = (props) => {
  const { a1, opsi } = props;
  return (
    <>
      <div className="alamat-baru">
        <label htmlFor="drdwn-content">Provinsi</label>
        <select
          name="drdwn-content"
          id="dropdown-content"
          className="dropdown-content"
        >
          <option value="0" disabled selected>
            Pilih
          </option>
          <option value="1">Gunungkidul</option>
          <option value="2">Mar</option>
        </select>
      </div>
    </>
  );
};

export default AlamatBaru;
