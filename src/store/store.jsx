import {configureStore} from "@reduxjs/toolkit";
import predictPageSlice from "../redux/pages/predictPageSlice";

export const store = configureStore(
    {
        reducer: {
            predictPageState: predictPageSlice,
        }
    }
)