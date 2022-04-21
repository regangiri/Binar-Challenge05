import React, { useState, useEffect } from "react";
import heroImage from "../assets/img_car.png";
import Carcard from "../components/Carcard";
import Searchcontainer from "../components/Searchcontainer";
import axios from "axios";
import { logDOM } from "@testing-library/dom";
import Detailcar from "../components/Detailcar";
import { fetchCar, fetchCarId } from "../redux/actions/carAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchButtonToggle } from "../redux/actions/searchAction";

function Homepage() {
  // const [carData, setCarData] = useState([]);
  const [searchingCar, setSearchingCar] = useState(false);
  const [tipeDriver, setTipeDriver] = useState(null);
  // const [carId, setCarId] = useState([]);
  const [showDetailCar, setShowDetailCar] = useState(false);

  const dispatch = useDispatch();
  const { carData } = useSelector((state) => state.carReducer);
  const { carId } = useSelector((state) => state.carReducer);
  useEffect(() => {
    dispatch(fetchCar());
  }, []);

  return (
    <>
      <div className="hero relative py-6">
        <div className="font-helvetica hero-section bg-[#F1F3FF] items-start xl:pb-0 lg:pb-28 pt-12 flex lg:flex-row flex-col w-100 ">
          <div className="hero-text flex px-14 flex-col items-center w-full lg:w-1/2">
            <h1 className="text-2xl md:text-5xl font-bold text-black py-5 sm:py-11  leading-snug">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="text-base text-black lg:pr-48">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="hero-image w-full lg:w-1/2 flex justify-end items-center">
            <img src={heroImage} alt="" />
          </div>
        </div>
        <div className="sm:absolute sm:-bottom-[5%] w-full  ">
          <Searchcontainer
            searchCar={(e) => {
              e.preventDefault();
              dispatch(searchButtonToggle());
              setSearchingCar(true);
              setShowDetailCar(false);
            }}
            setTipeDriver={(props) => {
              setTipeDriver(props);
              console.log(tipeDriver);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap items-center sm:flex-row flex-col sm:pt-24">
        {searchingCar
          ? carData
              .filter((data) => {
                return data.status.toString() === tipeDriver;
              })
              .map((data) => {
                return (
                  <div className="card-container ">
                    <Carcard
                      id={data.id}
                      startRent={data.start_rent_at}
                      name={data.name}
                      image={data.image}
                      price={data.price}
                      status={data.status}
                      detailCar={(e) => {
                        e.preventDefault();
                        dispatch(fetchCarId(data.id));
                        setSearchingCar(false);
                        // getCarById(data.id);
                        setShowDetailCar(true);
                      }}
                    />
                  </div>
                );
              })
          : null}
      </div>
      <div className="detail-car-container">
        {showDetailCar ? (
          <Detailcar
            id={carId.id}
            startRent={carId.start_rent_at}
            name={carId.name}
            image={carId.image}
            price={carId.price}
            status={carId.status}
          />
        ) : null}
      </div>
    </>
  );
}

export default Homepage;
