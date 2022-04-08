import React, { useState, useEffect } from "react";
import axios from "axios";

function Searchcontainer() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    getCarData();
    console.log(carData);
  }, []);

  async function getCarData() {
    await axios
      .get("https://rent-cars-api.herokuapp.com/admin/car")
      .then((res) => {
        setCarData(res.data);
        console.log(carData);
      });
  }

  const carDataIteration = carData.map((data) => {
    return (
      <ul>
        <li> id={data.id}</li>
        <li>startRent={data.start_rent_at}</li>
        <li>name={data.name}</li>
        <li>image={data.image}</li>
        <li> price={data.price}</li>
        <li>status={data.status}</li>
      </ul>
    );
  });

  return (
    <div className="flex items-center font-helvetica justify-center  text-black bg-primary pb-24">
      <form className="flex sm:flex-row flex-col text-xs sm:text-sm  bg-white w-full lg:w-3/4 py-3 items-center justify-center border-black rounded-lg">
        <div className="form-child font-light w-full lg:w-3/4 mx-3 flex items-start justify-center flex-col">
          <label htmlFor="destination">Destination</label>

          <select
            className="w-full bg-transparent border-2 border-[#D0D0D0] ring-1 p-2 my-1 text-gray-500 ring-white rounded-sm"
            name="destination"
            id="destination"
          >
            <option value="" disabled defaultValue>
              Pilih tipe driver
            </option>
            <option value="">Dengan Sopir</option>
            <option value="">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>

        <div className="form-child w-full font-light mx-3 flex items-start justify-center flex-col">
          <label htmlFor="checkin-date">Tanggal</label>
          <input
            className="w-full border-2 border-[#D0D0D0] text-gray-500 uppercase bg-transparent ring-1 p-2 my-1 ring-white rounded-sm"
            type="date"
            id="checkindate"
            name="checkindate"
          />
        </div>
        <div className="form-child font-light w-full mx-3 flex items-start justify-center flex-col">
          <label
            htmlFor="checkout-date"
            className="text-ellipsis overflow-hidden truncate"
          >
            Waktu Jemput/Ambil
          </label>
          <input
            className="w-full text-gray-500 border-2 border-[#D0D0D0] bg-transparent uppercase ring-1 p-2 my-1 ring-white rounded-sm"
            type="time"
            id="checkoutdate"
            name="checkoutdate"
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
            // onClick={carDataIteration}
          >
            Cari Mobil
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchcontainer;
