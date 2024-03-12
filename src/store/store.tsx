/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./library/librarySlice";

export default configureStore({
  reducer: {
    library: libraryReducer,
  },
});
