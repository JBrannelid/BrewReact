import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./reducers/bookingSlice";

export default configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
