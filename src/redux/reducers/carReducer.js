const initialState = {
  carData: [],
  carId: [],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchCarData":
      return {
        ...state,
        carData: action.payload,
      };
    case "fetchCarById":
      return {
        ...state,
        carId: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
