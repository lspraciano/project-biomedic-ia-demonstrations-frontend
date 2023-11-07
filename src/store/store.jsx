import {configureStore} from "@reduxjs/toolkit";
import predictToolSlice from "../redux/component/predictToolSlice.js";

export const store = configureStore(
    {
        reducer: {
            predictToolState: predictToolSlice,
        }
    }
)