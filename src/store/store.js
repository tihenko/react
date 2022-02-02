import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./car.slice";

const store = configureStore({
  reducer:{
    cars: carReducer,
  }
});

export default store;
