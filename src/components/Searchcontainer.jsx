import React from "react";

function Searchcontainer() {
  return (
    <div className="flex items-center font-helvetica justify-center text-black bg-primary pb-24">
      <form className="flex sm:flex-row flex-col text-xs sm:text-base  bg-white w-full lg:w-3/4 py-3 items-center justify-center border-black rounded-lg">
        <div className="form-child font-light w-full lg:w-3/4 mx-3 flex items-start justify-center flex-col">
          <label for="destination">Destination</label>
          <select
            className="w-full bg-transparent border-2 border-[#D0D0D0] ring-1 p-2 my-1 text-gray-500 ring-white rounded-sm"
            name="destination"
            id="destination"
          >
            <option value="" disabled selected>
              Pilih tipe driver
            </option>
            <option value="">Dengan Sopir</option>
            <option value="">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>

        <div className="form-child font-light mx-3 flex items-start justify-center flex-col">
          <label for="checkin-date">Tanggal</label>
          <input
            className="w-full text-gray-500 uppercase bg-transparent ring-1 p-1 my-1 ring-white rounded-sm"
            type="date"
            id="checkindate"
            name="checkindate"
          />
        </div>
        <div className="form-child font-light mx-3 flex items-start justify-center flex-col">
          <label for="checkout-date">Waktu Jemput/Ambil</label>
          <input
            className="w-full text-gray-500 bg-transparent uppercase ring-1 p-1 my-1 ring-white rounded-sm"
            type="date"
            id="checkoutdate"
            name="checkoutdate"
          />
        </div>
        <div className="form-child font-light w-full mx-3 flex items-start justify-center flex-col">
          <label for="jumlahpenumpang">Jumlah Penumpang(optional)</label>
          <input
            type="number"
            className="w-full bg-transparent border-2 border-[#D0D0D0] ring-1 p-2 my-1 text-gray-500 ring-white rounded-sm"
            name="jumlahpenumpang"
            id="jumlahpenumpang"
          />
        </div>
        <button
          className="text-secondary w-1/2 rounded-md bg-[#5CB85F]  border-accent m-3  border-2 bg-accent"
          type="submit"
        >
          Cari Mobil
        </button>
      </form>
    </div>
  );
}

export default Searchcontainer;
