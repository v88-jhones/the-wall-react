import { configureStore } from "@reduxjs/toolkit";
import wallReducer from "../redux/wall/wall_slice";
import modalReducer from "../redux/modal/modal_slice";

export const store = configureStore({
    reducer: {
        wall: wallReducer,
        modal: modalReducer
    },
});