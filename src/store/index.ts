import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import dataReducer from "./dataSlice"

export default configureStore({
  reducer: {
    modal: modalReducer,
    data: dataReducer,
  },
});
