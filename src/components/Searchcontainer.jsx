import React, { useState, useEffect } from "react";
import axios from "axios";
import Carcard from "./Carcard";
import { useSelector, useDispatch } from "react-redux";

function Searchcontainer(props) {
  const { searching } = useSelector((state) => state.searchReducer);

  useEffect(() => {
    console.log(searching);
  }, []);

  return (
    <div className="flex flex-colitems-center font-helvetica justify-center  text-black bg-primary">
      <form className="flex sm:flex-row flex-col text-xs sm:text-sm  bg-white w-full lg:w-3/4 py-3 items-center justify-center border-black rounded-lg">
        <div className="form-child font-light w-full lg:w-3/4 mx-3 flex items-start justify-center flex-col">
          <label htmlFor="tipedriver">Tipe Driver</label>

          <select
            className="w-full bg-transparent border-2 border-[#D0D0D0] ring-1 p-2 my-1 text-gray-500 ring-white rounded-sm"
            name="tipedriver"
            id="tipedriver"
            onChange={(e) => {
              props.setTipeDriver(e.target.value);
            }}
          >
            <option value={true}>Dengan Sopir</option>
            <option value={false}>Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>

        <div className="form-child w-full font-light mx-3 flex items-start justify-center flex-col">
          <label htmlFor="tanggal">Tanggal</label>
          <input
            className="w-full border-2 border-[#D0D0D0] text-gray-500 uppercase bg-transparent ring-1 p-2 my-1 ring-white rounded-sm"
            type="date"
            id="tanggal"
            name="tanggal"
          />
        </div>
        <div className="form-child font-light w-full mx-3 flex items-start justify-center flex-col">
          <label
            htmlFor="waktujemput"
            className="text-ellipsis overflow-hidden truncate"
          >
            Waktu Jemput/Ambil
          </label>
          <input
            className="w-full text-gray-500 border-2 border-[#D0D0D0] bg-transparent uppercase ring-1 p-2 my-1 ring-white rounded-sm"
            type="time"
            id="waktujemput"
            name="waktujemput"
          />
        </div>
        <div className="form-child font-light w-full mx-3 flex items-start justify-center flex-col">
          <label
            className="text-ellipsis overflow-hidden truncate"
            htmlFor="jumlahpenumpang"
          >
            Jumlah Penumpang(optional)
          </label>
          <input
            type="number"
            className="w-full bg-transparent border-2 border-[#D0D0D0] ring-1 p-2 my-1 text-gray-500 ring-white rounded-sm"
            name="jumlahpenumpang"
            id="jumlahpenumpang"
          />
        </div>
        <div className="form-child font-light w-full mx-1 flex items-start justify-center flex-col">
          <button
            className="text-secondary w-full p-4 rounded-md bg-[#5CB85F]  border-accent  border-2 bg-accent"
            type="submit"
            onClick={props.searchCar}
          >
            {searching ? <p>edit</p> : <p>Cari Mobil</p>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchcontainer;
