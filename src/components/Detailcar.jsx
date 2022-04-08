import React from "react";
import Icon from "react-hero-icon";

function Detailcar(props) {
  return (
    <div>
      <div className="paket-container w-full flex lg:flex-row flex-col font-helvetica items-start justify-start">
        <div className="paket-description pl-5 my-2 w-full lg:w-2/3 border-2 border-[rgba(0,0,0,0.15)]">
          <h3 className="font-bold font-sm my-3">Tentang Paket</h3>
          <h4 className="my-1">Include</h4>
          <ul className="text-[#8A8A8A] list-disc">
            <li>Apa saja yang yermasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <h4 className="my-1">Exclude</h4>
          <ul className="text-[#8A8A8A] list-disc">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <h3 className="font-bold font-sm my-3">
            Refund, Reschedule, Overtime
          </h3>
          <ul className="text-[#8A8A8A] list-disc">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
        <div className="flex items-center justify-center detail-car-card-container">
          <div className="detail-car-cardoverflow-hidden h-full lg:w-96 lg:h-[27rem]  mx-3 my-2 border-2 border-black flex items-start flex-col">
            <img src={props.image} alt="" />
            <h1>{props.name}</h1>
            <div className="flex flex-row justify-center items-center ">
              <p className="mx-3 py-3">
                <Icon className="mr-3" icon="users" type="outline" /> 4 orang{" "}
              </p>
              <p className=" mx-3 py-3">
                <Icon className="mr-3" icon="cog" type="outline" /> Manual{" "}
              </p>
              <p className=" mx-3 py-3">
                <Icon className="mr-3" icon="calendar" type="outline" /> Tahun
                2020{" "}
              </p>
            </div>
            <div className="total flex items-center justify-center">
              <h4>Total</h4>
              <h4>Rp {props.price}</h4>
            </div>
            <button className="w-5/6 mx-8 my-3 h-10 text-white font-bold font-helvetica bg-[#5CB85F]">
              {" "}
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailcar;
