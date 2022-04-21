import axios from "axios";

export const fetchCarSuccess = (car) => {
  return {
    type: "fetchCarData",
    payload: car,
  };
};

export const fetchCarIdSuccess = (carId) => {
  return {
    type: "fetchCarById",
    payload: carId,
  };
};

export const fetchCar = () => {
  return (dispatch) => {
    axios
      .get("https://rent-cars-api.herokuapp.com/admin/car")
      .then((res) => {
        const car = res.data;
        // res.forEach((car) => {
        //   car.passenger = "4 orang";
        //   car.engine = "Manual";
        //   car.year = "Tahun 2020";
        // });
        dispatch(fetchCarSuccess(car));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCarId = (id) => {
  return (dispatch) => {
    axios
      .get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
      .then((res) => {
        const carId = res.data;
        dispatch(fetchCarIdSuccess(carId));
      })
      .catch((err) => console.log(err));
  };
};
