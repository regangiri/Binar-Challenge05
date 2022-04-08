import React from "react";
import Icon from "react-hero-icon";

function Carcard(props) {
  return (
    <div className="card overflow-hidden w-80 h-[38rem] mx-3 my-2 border-2 border-black flex items-start flex-col">
      <img className="sm:py-6 w-full h-64" src={props.image} alt="" />
      <div className="card-description mx-8 pr-3">
        <h3 className="text-left my-2">{props.name}</h3>
        <h3 className="text-left my-3">Rp {props.price} / hari</h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p className="flex my-3">
          <Icon className="mr-3" icon="users" type="outline" /> 4 orang{" "}
        </p>
        <p className="flex my-3">
          <Icon className="mr-3" icon="cog" type="outline" /> Manual{" "}
        </p>
        <p className="flex my-3">
          <Icon className="mr-3" icon="calendar" type="outline" /> Tahun 2020{" "}
        </p>
      </div>
      <button
        className="w-5/6 mx-8 my-3 h-10 text-white font-bold font-helvetica bg-[#5CB85F]"
        onClick={props.detailCar}
      >
        {" "}
        Pilih Mobil
      </button>
    </div>
  );
}

export default Carcard;
