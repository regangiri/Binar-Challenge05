import React from "react";
import heroImage from "../assets/img_car.png";
import Searchcontainer from "../components/Searchcontainer";
function Homepage() {
  return (
    <div className="">
      <div className="font-helvetica hero-section bg-[#F1F3FF] items-start xl:pb-0 lg:pb-28 pt-12 flex lg:flex-row flex-col w-100 ">
        <div className="hero-text flex px-14 flex-col items-center w-full lg:w-1/2">
          <h1 className="text-2xl md:text-5xl font-bold text-black py-5 sm:py-11  leading-snug">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="text-base text-black lg:pr-48">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
        <div className="hero-image w-full lg:w-1/2 flex justify-end items-center">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
